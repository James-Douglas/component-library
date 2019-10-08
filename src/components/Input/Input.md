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
    bordered={true}
    disabled={false}
    required={false}
    invalid={false}
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
2. `type` *(optional) string*
    * Type of input (such as number, text, tel etc). Defaults to 'text'.
3. `label` *(optional) string*
    * Label for the input, provided by the fieldset component. Defaults to an empty string.
4. `tooltip` *(optional) object*
    * Tooltip for the fieldset, provided by the fieldset component. Accepts title and body properties. Defaults to an empty obj.
5. `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.
6. `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.
7. `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.
8. `required` *(optional) boolean*
    * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional. Defaults to false.
9. `invalid` *(optional) boolean*
    * if true adds styles to denote if a field is invalid.
10. `prefillValue` *(optional) string*
    * Adds prefill data to the input field and adds custom styling for prefilled inputs. Defaults to an empty string.
11. `prefixContent` *(optional) string*
    * Adds a prefix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.
12. `suffixContent` *(optional) string*
    * Adds a suffix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.
13. `listId` *(optional) string* //TO DO
    * Exclusively for the Combo component datalist functionality. Links a datalist to the input field.
14. `autocomplete` *(optional) string*
    * Turn the browsers implementation of autocompletion/memory of forms on or off. Defaults to 'off'.
15. `handleChange` *(required) func*
    * Custom handler to attach to the input field - used to get the value of the field for example.

