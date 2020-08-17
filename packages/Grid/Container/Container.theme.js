export default function getTheme(gutterWidth) {
  return {
    gridSize: 12, // columns
    gutterWidth: (gutterWidth / 10), // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    breakpoints: {
      xs: 0, // em
      sm: 48, // em or 768px
      md: 64, // em or 1024px
      lg: 75, // em or 1200px,
      xl: 90, // em or 1440px
    },
  };
}
