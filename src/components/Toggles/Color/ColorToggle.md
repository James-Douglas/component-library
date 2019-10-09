# ColorToggle component
The CTM ColorToggle component. Renders a color-selection toggle.
## Usage
~~~js
<ColorToggle
  id={id}
  label={label}
  backgroundColor={backgroundColor}
  fontColor={fontColor}
  value={value}
  selectedId={selectedId}
  name={name}
  invalid={invalid}
  disabled={disabled}
  autofill={autofill}
  onToggle={onToggle}
/>
~~~

## Props
The ToggleGroup component accepts the following props:

1. `id` *(required) string*
    * Unique identifier for the toggle
    
2. `label` *(required) string*
    * Label for the toggle.
    
3. `backgroundColor` *(required) string*
    * The background color to be displayed (the color to be selected).
    
4.  `fontColor` *(optional) string*
    * Font color to be applied to the label (default: 'black')

5.  `value` *(optional) string*
    * The value to be applied to the input field.
    
6.  `selectedId` *(optional) string*
    * The id of the currently selected (toggled on) toggle.
    
7.  `name` *(optional) string*
    * The name to be applied to the input field.
    
8.  `invalid` *(optional) boolean*
    * Applies invalid styling when true.
    
9.  `disabled` *(optional) boolean*
    * Disables the toggle when true.

10.  `autofill` *(optional) boolean*
    * Autofills (toggles) when true.
    
11. `onToggle` *(optional) function*
    * Handler function called when a toggle is toggled on (called with the id of the toggle).
