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
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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

const makeModuleIndex = modules => {
  let paths = modules.map(f => {
    const importDir = path.relative(`${process.cwd()}/src`, f);
    const [fileName] = /([^\/]+$)/.exec(importDir);
    const moduleName = fileName.replace(/(?:\.\w*)*\.js/gm, "", "");
    return `export { default as ${moduleName} } from "./${importDir}";`;
  })
  fs.writeFileSync("src/modules.js", paths.join("\n"));
}


const makeFileConfig = modulePath => {
  const [fileName] = /([^\/]+$)/.exec(modulePath);
  const moduleName = fileName.replace(/(?:\.\w*)*\.js/gm, "");

  const config = {
    input: modulePath,
    output: [
      {
        file: `${ouputDir}/${moduleName}/index.js`,
        format: "cjs",
        exports: "named"
      }
    ],
    external: id => /^react/.test(id),

    plugins: [
      peerDepsExternal(),
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
  // gather our modules
  const components = glob.sync(`${__dirname}/src/components/**/*.component.js`);
  const hooks = glob.sync(`${__dirname}/src/hooks/use*.js`);
  const modules = [...components, ...hooks]
  // create the modules index
  makeModuleIndex(modules);
  // gather our rollup config
  const config = modules.map(path => makeFileConfig(path));

  // add the modules index config to the config map
  config.push({
    input: `src/modules.js`,
    output: [
      {
        file: `${ouputDir}/index.js`,
        format: "cjs"
      }
    ],
    external: id => /^react/.test(id),

    plugins: [
      peerDepsExternal(),
      postcss({ extract: `${ouputDir}/styles.css` }),
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
      // prevent duplication of images in component files and /lib
      ignoreImport({
        extensions: [".svg", ".png", ".jpg", ".jpeg"]
      }),
      babel({ exclude: "node_modules/**" }),
      commonjs(),
      filesize()
    ]
  });

  // add the theme to the config map
  config.push({
    input: `src/themes/index.js`,
    output: [
      {
        file: `${ouputDir}/themes.js`,
        format: "cjs"
      }
    ],
    plugins: [
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
