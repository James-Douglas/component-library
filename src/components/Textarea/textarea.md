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
    {autofill}
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


1. `id` *(required) string*
    * Unique id for the component. Required for the label to match the input.

2. `label` *(optional) string*
    * Label for the ToggleGroup. Defaults to an empty string.

3. `tooltip` *(optional) object*
   * Tooltip object (see Tooltip documentation)
       
4. `forceFullWidth` *(optional) boolean* 
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)

5. `validationMessage` *(optional string)*
    * Displays given validation message and invalid styles on the component when provided.  
            
6. `name` *(optional) string*
    * Defines a name for the drop-down list
    
    
7. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
    
8. `value` *(optional) string*
    * Defines the current value of the textarea field.
    
9. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
    
10. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
    
11. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional. Defaults to false.
    
12. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
    
13. `autofill` *(optional) boolean*
    * Adds custom styling for prefilled elements. Defaults to false.
    
14. `rows` *(optional) string (number)*
    * Specifies the height of the textarea (in lines). Default value is 2.
    
15. `wrap` *(optional) string*
    * Specifies how the text in a textarea is to be wrapped when submitted in a form.
       - `hard` - specifies that the Text present in the textarea will not be wrapped after submitting the form.
       - `soft` - specifies that the Text in a textarea is wraps when submitting the form.
       
16. `readonly` *(optional) string*
    * Specifies that a textarea should be read-only.
    
17. `maxLength` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area.
         -  Note that the maxlength attribute physically limits users from adding more that the specified limit, this 
            means that if a user pastes 1000 chars into a text area that is limited to 500 chars then half of the 
            pasted text would be truncated without giving the user any useful feedback. *Use maxchars instead*

18. `maxChars` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area - while providing useful feedback if the 
      limit is exceeded

19. `onChange` *(optional) function*
    * Called when the value of the text area changes. Function will be called with an object consisting of id and value of the text area.
