# Utils

## Installation

`yarn add @comparethemarketau/manor-utils`


## Documentation

Exports a number of util functions Manor uses that may be useful for your application.

* `applySpacing(theme, spacingType, spacingValue` - Returns `spacingType` css if the given `spacingValue`
is valid (meaning the value exists within the theme.spacing array). e.g. given the [ctmTheme](../Themes/ctm.theme.js),
a spacingType of `'margin'` and a `spacingValue` of `[4, 8]`, this function would return `margin: 0.4rem 0.4rem`.
* `spacingPropTypes` - Custom proptypes function to validate props used by `applySpacing`
* `getBreakpoint` - Return the current breakpoint (`xl`, `lg`, `md`, `sm`, `xs`), Custom breakpoint values can be provided by passing in a formatted objec as follows eg. `{ xs: 300, sm: 600, md: 900, lg: 1200 }`.
* `isDesktop` - True if the current breakpoing is desktop (`md`, `lg`, `xl`)
* `getScreenReaderLabel(screenReaderLabel, fieldLabel)` - Returns the `screenReaderLabel` if present, otherwise
returns a default label for screen readers based off the `fieldLabel`.  
* `hasTooltipContent(title, body)` - Determines whether a tooltip has been provided (if either `title` or `body` exists)
* `throttle(func, wait=100)` - Throttles the given `func` with the given `wait` time.
