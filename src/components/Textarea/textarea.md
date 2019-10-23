# Textarea component
The CTM Textarea component, which is essentially a styled HTML textarea.

## Usage
~~~js
<Textarea 
    {label}
    {tooltip}
    {forceFullWidth}
    {validationMessage}
    {id}
    {name}
    {label}
    {placeholder}
    {value}
    {bordered}
    {disabled}
    {required}
    {invalid}
    {isPrefill}
    {rows}
    {wrap}
    {readonly}
    {maxLength}
    {maxChars}
    {onChange}
/>
~~~

## Props
The Textarea component also accepts the following props:


- `id` *(required) string*
    * Unique id for the component. Required for the label to match the input.

- `label` *(optional) string*
    * Label for the ToggleGroup. Defaults to an empty string.

- `tooltip` *(optional) object*
   * Tooltip object (see Tooltip documentation)
       
- `forceFullWidth` *(optional) boolean* 
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)

- `validationMessage` *(optional string)*
    * Displays given validation message and invalid styles on the component when provided.  
            
- `name` *(optional) string*
    * Defines a name for the drop-down list
    
- `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
    
- `value` *(optional) string*
    * Defines the current value of the textarea field.
    
- `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
    
- `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
    
- `required` *(optional) boolean*
    * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional. Defaults to false.
    
- `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
    
- `isPrefill` *(optional) boolean*
    * Adds custom styling for prefilled elements. Defaults to false.
    
- `rows` *(optional) string (number)*
    * Specifies the height of the textarea (in lines). Default value is 2.
    
- `wrap` *(optional) string*
    * Specifies how the text in a textarea is to be wrapped when submitted in a form.
       - `hard` - specifies that the Text present in the textarea will not be wrapped after submitting the form.
       - `soft` - specifies that the Text in a textarea is wraps when submitting the form.
       
- `readonly` *(optional) string*
    * Specifies that a textarea should be read-only.
    
- `maxLength` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area.
         -  Note that the maxlength attribute physically limits users from adding more that the specified limit, this 
            means that if a user pastes 1000 chars into a text area that is limited to 500 chars then half of the 
            pasted text would be truncated without giving the user any useful feedback. *Use maxchars instead*

- `maxChars` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area - while providing useful feedback if the 
      limit is exceeded

- `onChange` *(optional) function*
    * Called when the value of the text area changes. Function will be called with an object consisting of id and value of the text area.
