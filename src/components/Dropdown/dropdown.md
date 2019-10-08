# DropDown component
The CTM Dropdown component, which is essentially a styled HTML select and it's child options - does not support multi select (another component will handle multi select).

## Usage
~~~js
<Dropdown {id} {name} {label} {value} {bordered} {invalid} {autofill} {disabled} {required} {defaultOption} {options} />
~~~

## Props
The Dropdown component also accepts the following props:

1. `id` *(optional) string*
    * Specifies a unique id for an element

2. `name` *(optional) string*
    * Defines a name for the drop-down list

3. `label` *(optional) string*
    * Defines a field label text for the drop-down list

4. `value` *(optional) string*
    * Defines the current value of the select field (Used to set selected value)

5. `bordered` *(optional) boolean*
    * this is used to add the boarder style around the field (set to true if field used on a white background, omit if used on a grey background)

6. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
    
7. `autofill` *(optional) boolean*
    * denotes if a field has been pre-filled with data
    
8. `disabled` *(optional) boolean*
    * Specifies that a drop-down list should be disabled
    
9. `required` *(optional) boolean*
    * Specifies that the user is required to select a value before submitting the form
    
10. `defaultOption` *(optional) JSON Object*
    * The `defaultOption` JSON Object accepts the following props:
        - 1. `hasDefaultOption` *(required) boolean*
            * include the default option ('Please Select...').
        - 2. `value` *(required) <TYPE>*
            * the value for the default option
        - 3. `disabled` *(optional) boolean*
            * Specifies that the default option should be disabled
        - 4. `hidden` *(optional) boolean*
            * set the item to be hidden
        - 5. `title` *(optional) string*
            

11. `options` *(optional) Array of JSON Object/s*
    * The `options` Array accepts JSON Objects as items, each item may contain the following props:
        - 1. `value` *(required)*
        - 2. `title` *(optional) string*
            * sets the value sent for the selected item when the form is submitted
        - 3. `disabled` *(optional) boolean*
            * Specifies that an option should be disabled (only use this when absolutely necessary - usually it would be better to exclude the option item)
        - 4. `title` *(optional) string*
            * Specifies extra information about an option (hover text)
        - 5. `hidden` *(optional) boolean*
            * set the item to be hidden
