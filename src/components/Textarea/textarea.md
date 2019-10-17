# Textarea component
The CTM Textarea component, which is essentially a styled HTML textarea.

## Usage
~~~js
<Textarea 
    {fieldsetProps}
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

1. `fieldsetProps` *(optional) object*
    * Props to be passed to the fieldset wrapping the text area. 
    ```
     {
       label (optional) string - label for the component
       tooltip: {
         title - (optional) string - title for the tooltip 
         body: (optional) string - body for the tooltip
         boundingElementSelector (optional) string - container tooltip should be bound within
         screenReaderLabel (optional) string - screen reader label for the tooltip icon
       },
       forceFullWidth (optional) bool - forces the component to use a full width layout (overrides design specifications), 
           useful for components that aren't in a typical form (e.g. IMT widget)
       validationMessage (optional) string - Validation error message
       supportingElements (optional) node - supporting elements
     }
    ```
        
2. `id` *(required) string*
    * Unique id for the component. Required for the label to match the input.
    
3. `name` *(optional) string*
    * Defines a name for the drop-down list
    
4. `label` *(optional) string*
    * Label for the input, relies on id being passed in. Defaults to an empty string.
    
5. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
    
6. `value` *(optional) string*
    * Defines the current value of the textarea field.
    
7. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
    
8. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
    
9. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional. Defaults to false.
    
10. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
    
11. `autofill` *(optional) boolean*
    * Adds custom styling for prefilled elements. Defaults to false.
    
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

18. `onChange` *(optional) function*
    * Called when the value of the text area changes. Function will be called with an object consisting of id and value of the text area.
