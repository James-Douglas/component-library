import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import ignoreImport from 'rollup-plugin-ignore-import';
import smartAsset from 'rollup-plugin-smart-asset';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import includePaths from 'rollup-plugin-includepaths';
import del from 'rollup-plugin-delete';

const outputDir = 'lib';

export default {
  input: './index.js',
  output: [
    {
      file: `./${outputDir}/index.js`,
      format: 'cjs',
    },
  ],
  external: (id) => /^react/.test(id),
  plugins: [
    del({ targets: 'lib/' }),
    peerDepsExternal(),
    postcss(),
    includePaths({ paths: ['packages', 'config'] }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['../../**/*.woff', '../../**/*.woff2', '../../**/*.eot', '../../**/*.ttf'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
    localResolve(),
    resolve({
      browser: true,
    }),
    // prevent duplication of images in component files and /lib
    ignoreImport({
      extensions: ['.svg', '.png', '.jpg', '.jpeg'],
    }),
    smartAsset({
      url: 'copy',
      keepImport: true,
    }),
    babel({
      babelHelpers: 'bundled',
      rootMode: 'upward',
      exclude: /node_modules/,
    }),
    commonjs({
      include: /node_modules/
    }),
    filesize(),
  ],
};
