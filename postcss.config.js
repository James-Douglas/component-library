const tailwindcss = require('tailwindcss');
const postcssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const tailwindConfig = require('./config/tailwind.config');

module.exports = {
    plugins: [
        postcssimport(),
        tailwindcss(tailwindConfig),
        autoprefixer(),
    ],
};