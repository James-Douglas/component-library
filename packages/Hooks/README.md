# Hooks

## Installation

`yarn add @comparethemarketau/manor-hooks`

## Documentation

Contains a number of hooks used by Manor that can be pulled into your application:

`useBreakpoint(throttleHandler=true)` - Provides the current breakpoint (`xl`, `lg`, `md`, `sm`, `xs`). throttleHandler will
throttle the resize listener (100ms) if set.

`useId(id)` - Helper to provide a unique id (uuid4) if no id is supplied to it. (Manor uses this
to generate unique keys/ids if users haven't provided one). If an id is given it simply returns it.

`useInterval(callback, delay)` - Wrapper around setInteval, can be used to call a function at a given interval (delay).

`useIsDesktop(throttleHandler=true)` - Returns true if current breakpoint is desktop (>=`md`). throttleHandler will 
throttle the resize listener (100ms) if set.

`useIsSticky(offsetYStart=0)` - Returns true if current `window.pageYOffset` is greater than the given
`offsetYStart`.

`useMountEffect(func)` - Executes the given function once when the component mounts. Similar to `componentDidMount`.

`usePrefill(prefillValue, value, isDirty)` - Returns true if prefill styles should be applied.

`usePrevious(value)` - Used to keep track of the previous value of something.

`useUnmountEffect(func)` - Calls the given function when a component unmounts.
