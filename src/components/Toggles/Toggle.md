# Toggle component
The CTM Toggle component. Can render a variety of styles of toggle:

* Square (text only, <= 25 chars)
* Rectangle (text only, > 25 chars)
* Icon (square toggle with an icon)
* Picture (square toggle with a picture) 

## Usage
~~~js
<Toggle
  id={id}
  label={label}
  type={type}
  value={value}
  selectedValue={selectedValue}
  name={name}
  invalid={invalid}
  disabled={disabled}
  onToggle={onToggle}
  icon={icon}
  iconSize={iconSize}
  pictureOptions={pictureOptions}
  rectOptions={rectOptions}
/>
~~~

## Props
The ToggleGroup component accepts the following props:

- `id` *(required) string*
    * Unique identifier for the toggle
    
- `label` *(required) string*
    * Label for the toggle.
    
- `type` *(optional) string*
    * The type of toggle to render (either 'square' or 'rectangle').
    
-  `value` *(optional) string*
    * The value to be applied to the input field.
    
-  `selectedValue` *(optional) string*
    * The value of the currently selected (toggled on) toggle.
    
-  `isPrefill` *(optional) bool*
    * Whether the selected value is a prefill (e.g. auto-populated from a prior journey)
     
-  `name` *(optional) string*
    * The name to be applied to the input field.
    
-  `invalid` *(optional) boolean*
    * Applies invalid styling when true.
    
-  `disabled` *(optional) boolean*
    * Disables the toggle when true.
    
- `onToggle` *(optional) function*
    * Handler function called when a toggle is toggled on (called with object: { id, value } of the toggle).
    
- `icon` *(optional) string*
    * Name of the icon to be rendered on the toggle. (Note if a pictureOptions object is also passed this prop will be overridden).
    
- `iconSize` *(optional) number*
    * Size of the icon to be rendered on the toggle.
    
- `pictureOptions` *(optional) object*
    * Options object for rendering a picture on a toggle, attributes match those of the Picture component.
    
- `rectOptions` *(optional) object*
    * Options object for rendering rectangular toggles, attributes:
        * align ('center' (default), 'left', 'right') - text alignment
        * col (1,2,3,4,5,6,7,8,10,11,12) - width of toggle
        * height (number) - height (rem) of the toggle
