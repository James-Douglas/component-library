# Input component<br/>
## Usage
~~~js
<Input 
    id="input-id"
    type="text"
    label="label"
    tooltip={
        title: 'Tooltip heading',
        body: 'Tooltip body',
    }
    placeholder="placeholder string"
    bordered
    disabled={false}
    required={false}
    prefillValue=""
    prefixContent=""
    suffixContent=""
    listId="" //TODO
    autocomplete="off"
    handleChange={() => {}}
/>
~~~

## Props
The Input component can be extended by the combo component //TODO, and accepts the following props:

1. `id` *(required) string*
    * Unique id for the component. Required.

2. `tooltip` *(optional) object*
    * Tooltip object (see Tooltip documentation)

3. `forceFullWidth` *(optional) boolean* 
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)

4. `validationMessage` *(optional string)*
    * Displays given validation message and invalid styles on the component when provided.  

5. `type` *(optional) string*
    * Type of input (such as number, text, tel etc). Defaults to 'text'.

6. `label` *(optional) string*
    * Label for the input, provided by the fieldset component. Defaults to an empty string.

7. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.

8. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.

9. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.

10. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional. Defaults to false.

11. `prefillValue` *(optional) string*
    * Adds prefill data to the input field and adds custom styling for prefilled inputs. Defaults to an empty string.

12. `prefixContent` *(optional) string*
    * Adds a prefix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.

13. `suffixContent` *(optional) string*
    * Adds a suffix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.

14. `listId` *(optional) string* //TO DO
    * Exclusively for the Combo component datalist functionality. Links a datalist to the input field.

15. `autocomplete` *(optional) string*
    * Turn the browsers implementation of autocompletion/memory of forms on or off. Defaults to 'off'.

16. `handleChange` *(required) func*
    * Custom handler to attach to the input field - used to get the value of the field for example.

