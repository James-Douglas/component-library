# Hooks

## Installation

`yarn add @comparethemarketau/manor-hooks`


## Documentation

Contains a number of hooks used by Manor that can be pulled into your application:

`useBreakpoint(throttleHandler=true, customBreakpoints)` - Provides the current breakpoint (`xl`, `lg`, `md`, `sm`, `xs`). throttleHandler will
throttle the resize listener (100ms) if set. Use customBreakpoints to pass in customized breakpoints of choice, the format should be ie.
`{ sm: 350, md: 700, lg: 1400 }`.

`useIsBreakpointRange(options)` - Returns true if current breakpoint is within the breakpoint options provided. The options object accepts the 
following format ie.: `{ breakpointFrom: 'sm', breakpointTo: 'lg', customBreakpoints: { xs: 200, sm: 350, md: 700, lg: 1000, xl: 1400 } }`.
When only breakpointFrom value is provided it will check against breakpoint values from that value to the maximum breakpoint value. When only 
breakpointTo value is provided it will check against breakpoint values up to that value. When breakpointFrom and breakpointTo values are provided 
it will check against breakpoint values between these two values.

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
