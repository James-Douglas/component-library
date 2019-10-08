# ToggleGroup component
The CTM ToggleGroup component, wraps a given set of toggles (radio buttons under the hood).

## Usage
~~~js
<ToggleGroup 
  label={label}
  id={id}
  name={name}
  tooltip={tooltip}
  handleChange={handleChange}  
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
    
2. `id` *(optional) string*
    * Unique identifier for the toggle group
    
3. `label` *(optional) string*
    * Label for the ToggleGroup. Defaults to an empty string.
    
4. `tooltip` *(optional) object*
    * Tooltip object (see Tooltip documentation)
    
5. `handleChange` *(optional) function*
    * onChange handler function, called on select of a toggle with the id of that toggle 
    
