# Input component<br/>
## Usage
~~~js
<Input 
    {id}
    {type}
    {label}
    {placeholder}
    {bordered}
    {disabled}
    {required}
    {invalid}
    {autofill}
    {prefix}
    {suffix}
    {listId}
    {autocomplete}
    {hidden}
/>
~~~

## Props
The Input component can be extended by the combo component, and accepts the following props:

1. `id` *(required) string*
    * Unique id for the component. Required for the label to match the input.
2. `type` *(optional) string*
    * Type of input (such as number, text, tel etc). Defaults to 'text'.
3. `label` *(optional) string*
    * Label for the input, relies on id being passed in. Defaults to an empty string.
4. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
5. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
6. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
7. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional. Defaults to false.
8. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid
9. `autofill` *(optional) boolean*
    * Adds custom styling for prefilled elements. Defaults to false.
10. `prefix` *(optional) string*
    * Adds a prefix to the input - can be supplied with html which will be rendered. Defaults to false.
11. `suffix` *(optional) string*
    * Adds a suffix to the input - can be supplied with html which will be rendered. Defaults to false.
12. `listId` *(optional) string*
    * Exclusively for the Combo component datalist functionality. Links a datalist to the input field.
13. `autocomplete` *(optional) string*
    * Turn the browsers implementation of autocompletion/memory of forms. Defaults to 'off'.
14. `hidden` *(optional) boolean*
    * Hide or show an input. Adds `display: none;` defaults to false.
