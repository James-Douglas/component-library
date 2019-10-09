# CustomToggle component
The CTM CustomToggle component. Used to render a toggle that falls outside of the capabilities of the Toggle component.

## Usage
~~~js
<CustomToggle
  id={id}
  value={value}
  selectedId={selectedId}
  name={name}
  invalid={invalid}
  disabled={disabled}
  autofill={autofill}
  onToggle={onToggle}
>
    // custom content here
</CustomToggle>
~~~


## Props
The CustomToggle component accepts the following props:

1. `id` *(required) string*
    * Unique identifier for the toggle
    
2.  `value` *(optional) string*
    * The value to be applied to the input field.
    
3.  `selectedId` *(optional) string*
    * The id of the currently selected (toggled on) toggle.
    
4.  `name` *(optional) string*
    * The name to be applied to the input field.
    
5.  `invalid` *(optional) boolean*
    * Applies invalid styling when true.
    
6.  `disabled` *(optional) boolean*
    * Disables the toggle when true.

7.  `autofill` *(optional) boolean*
    * Autofills (toggles) when true.
    
8. `onToggle` *(optional) function*
    * Handler function called when a toggle is toggled on (called with the id of the toggle).
