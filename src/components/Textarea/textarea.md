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


    
- `readonly` *(optional) string*
    * Specifies that a textarea should be read-only.
    
- `maxLength` *(optional) string (number)*

- `maxChars` *(optional) string (number)*
    * Specifies the maximum number of characters allowed in the text area - while providing useful feedback if the 
      limit is exceeded

- `onChange` *(optional) function*
    * Called when the value of the text area changes. Function will be called with an object consisting of id and value of the text area.
