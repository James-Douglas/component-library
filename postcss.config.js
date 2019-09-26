
module.exports = (ctx) => ({
    plugins: [
        require('postcss-import')(ctx.plugin),
        require('tailwindcss')(ctx.plugin),
        require('autoprefixer')(ctx.plugin),
    ]
})
