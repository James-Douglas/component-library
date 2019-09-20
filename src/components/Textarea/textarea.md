# Textarea component
The CTM Textarea component, which is essentially a styled HTML textarea.

## Usage
~~~js
<Textarea 
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
    {hidden}
    {rows}
    {wrap}
    {readonly}
    {maxLength}
    {maxChars}
/>
~~~

## Props
The Textarea component also accepts the following props:

1. `id` *(required) string*
    * Unique id for the component. Required for the label to match the input.
    
2. `name` *(optional) string*
    * Defines a name for the drop-down list
    
3. `label` *(optional) string*
    * Label for the input, relies on id being passed in. Defaults to an empty string.
    
4. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
    
5. `value` *(optional) string*
    * Defines the current value of the textarea field.
    
6. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
    
7. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
    
8. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional. Defaults to false.
    
9. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
    
10. `autofill` *(optional) boolean*
    * Adds custom styling for prefilled elements. Defaults to false.
    
11. `hidden` *(optional) boolean*
    * Hide or show an input. Adds `display: none;` defaults to false.
    
12. `rows` *(optional) string (number)*
    * Specifies the height of the textarea (in lines). Default value is 2.
    
13. `wrap` *(optional) string*
    * Specifies how the text in a textarea is to be wrapped when submitted in a form.
       - `hard` - specifies that the Text present in the textarea will not be wrapped after submitting the form.
       - `soft` - specifies that the Text in a textarea is wraps when submitting the form.
       
14. `readonly` *(optional) string*
    * Specifies that a textarea should be read-only.
    
15. `maxLength` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area.
         -  Note that the maxlength attribute physically limits users from adding more that the specified limit, this 
            means that if a user pastes 1000 chars into a text area that is limited to 500 chars then half of the 
            pasted text would be truncated without giving the user any useful feedback. *Use maxchars instead*
16. `maxChars` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area - while providing useful feedback if the 
      limit is exceeded
