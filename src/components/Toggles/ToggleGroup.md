# ToggleGroup component
The CTM ToggleGroup component, wraps a given set of toggles.

## Usage
~~~js
<ToggleGroup 
  label={label}
  id={id}
  name={name}
  tooltip={tooltip}
  handleChange={handleChange}
  selectedValue={selectedValue}
>
  <Toggle />
  <Toggle />
  <Toggle />
</ToggleGroup>
~~~

*Priority: picture > icon

## Props
The ToggleGroup component accepts the following props:

1. `name` *(required) string*
    * Name property to be passed to the toggles - required for radio buttons

7. `onToggle` *(required) function*
    * onChange handler function, called on select of a toggle with { id: <selected toggle id>, value: <selected toggle value> }

2. `label` *(optional) string*
    * Label for the ToggleGroup. Defaults to an empty string.

3. `tooltip` *(optional) object*
   * Tooltip object (see Tooltip documentation)
       
4. `forceFullWidth` *(optional) boolean* 
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)

5. `validationMessage` *(optional string)*
    * Displays given validation message and invalid styles on the component when provided.  
    
6. `id` *(optional) string*
    * Unique identifier for the toggle group
    
8. `rectOptions` *(optional) object*
    * Options object for rectangular toggles (see Toggle documentation)
    
9. `selectedValue` *(optional) string/number*
    * Value of the currently selected toggle (use to pre-select)
    
