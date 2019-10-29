import glob from "glob";
import fs from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import localResolve from "rollup-plugin-local-resolve";
import url from "rollup-plugin-url";
import includePaths from "rollup-plugin-includepaths";
import pkg from "./package.json";

const ouputDir = "lib";

const makeComponentIndex = components => {
  let paths = components.map(f => {
    const importDir = path.relative(`${process.cwd()}/src/components`, f);
    const [fileName] = /([^\/]+$)/.exec(importDir);
    const componentName = fileName.replace(".component.js", "");
    return `export { default as ${componentName} } from "./${importDir}";`;
  });
  paths = ['import "../index.css"\n'].concat(paths);
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
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],

    plugins: [
      postcss({ extract: true }),
      babel({ exclude: "node_modules/**" }),
      includePaths({ paths: ["src", "config"] }),
      localResolve(),
      commonjs(),
      resolve({
        browser: true
      }),
      url({
        publicPath: "assets"
      }),
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
        format: "cjs",
        exports: "named"
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],

    plugins: [
      postcss({ extract: `${ouputDir}/styles.css` }),
      babel({ exclude: "node_modules/**" }),
      includePaths({ paths: ["src", "config"] }),
      localResolve(),
      commonjs(),
      resolve({
        browser: true
      }),
      url({
        publicPath: "assets"
      }),
      filesize()
    ]
  });
  // send this back to rollup for the build
  return config;
};

const config = buildLibrary();

export default config;
