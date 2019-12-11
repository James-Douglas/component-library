import glob from "glob";
import fs from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import localResolve from "rollup-plugin-local-resolve";
import includePaths from "rollup-plugin-includepaths";
import smartAsset from "rollup-plugin-smart-asset";
import ignoreImport from "rollup-plugin-ignore-import";
import copy from "rollup-plugin-copy";
import url from 'rollup-plugin-url';

const ouputDir = "lib";

const rmdir = function(dir) {
  if (fs.existsSync(dir)) {
    const list = fs.readdirSync(dir);
    for (let i = 0; i < list.length; i++) {
      const filename = path.join(dir, list[i]);
      const stat = fs.statSync(filename);

      if (filename == "." || filename == "..") {
      } else if (stat.isDirectory()) {
        rmdir(filename);
      } else {
        fs.unlinkSync(filename);
      }
    }
    fs.rmdirSync(dir);
  }
};

rmdir(ouputDir);

const makeComponentIndex = components => {
  let paths = components.map(f => {
    const importDir = path.relative(`${process.cwd()}/src/components`, f);
    const [fileName] = /([^\/]+$)/.exec(importDir);
    const componentName = fileName.replace(".component.js", "");
    return `export { default as ${componentName} } from "./${importDir}";`;
  });
  fs.writeFileSync("src/components/index.js", paths.join("\n"));
};

const makeFileConfig = componentPath => {
  const [fileName] = /([^\/]+$)/.exec(componentPath);
  const componentName = fileName.replace(".component.js", "");

  const config = {
    input: componentPath,
    output: [
      {
        file: `${ouputDir}/${componentName}/index.js`,
        format: "cjs",
        exports: "named"
      }
    ],
    external: id => /^react/.test(id),

    plugins: [
      postcss(),
      includePaths({ paths: ["src", "config"] }),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf'],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      localResolve(),
      resolve({
        browser: true
      }),
      smartAsset({
        url: "copy",
        keepImport: true
      }),
      babel({ exclude: "node_modules/**" }),
      commonjs(),
      filesize()
    ]
  };
  return config;
};

const buildLibrary = () => {
  // gather our components
  const components = glob.sync(`${__dirname}/src/components/**/*.component.js`);
  // create the components index
  makeComponentIndex(components);
  // gather our rollup config
  const config = components.map(path => makeFileConfig(path));
  // add the index config to the config map
  config.push({
    input: `src/components/index.js`,
    output: [
      {
        file: `${ouputDir}/index.js`,
        format: "cjs"
      }
    ],
    external: id => /^react/.test(id),

    plugins: [
      postcss({ extract: `${ouputDir}/styles.css` }),
      includePaths({ paths: ["src", "config"] }),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf'],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      copy({
        targets: [
          { src: 'src/themes/ctm.theme.js', dest: 'lib'},
        ]
      }),
      localResolve(),
      resolve({
        browser: true
      }),
      // prevent duplication of images in component files and /lib
      ignoreImport({
        extensions: [".svg", ".png", ".jpg", ".jpeg"]
      }),
      babel({ exclude: "node_modules/**" }),
      commonjs(),
      filesize()
    ]
  });

  // send this back to rollup for the build
  return config;
};

const config = buildLibrary();

export default config;
