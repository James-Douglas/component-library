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

- `id` *(required) string*
    * Unique id for the component. Required.

- `tooltip` *(optional) object*
    * Tooltip object (see Tooltip documentation)

- `forceFullWidth` *(optional) boolean* 
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)

- `validationMessage` *(optional string)*
    * Displays given validation message and invalid styles on the component when provided.  

- `type` *(optional) string*
    * Type of input (such as number, text, tel etc). Defaults to 'text'.

- `label` *(optional) string*
    * Label for the input, provided by the fieldset component. Defaults to an empty string.

- `placeholder` *(optional) string*
    * The placeholder text for the input. Defaults to an empty string.

- `bordered` *(optional) boolean*
    * The input field border style. Defaults to true.

- `disabled` *(optional) boolean*
    * Disables the button via a class on its wrapper, and an attribute on the input. Defaults to false.

- `required` *(optional) boolean*
    * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional. Defaults to false.

- `prefillValue` *(optional) string*
    * Adds prefill data to the input field and adds custom styling for prefilled inputs. Defaults to an empty string.

- `prefixContent` *(optional) string*
    * Adds a prefix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.

- `suffixContent` *(optional) string*
    * Adds a suffix to the input - can be supplied with another component (eg for an svg) which will be rendered. Defaults to false.

- `listId` *(optional) string* //TO DO
    * Exclusively for the Combo component datalist functionality. Links a datalist to the input field.

- `autocomplete` *(optional) string*
    * Turn the browsers implementation of autocompletion/memory of forms on or off. Defaults to 'off'.

- `handleChange` *(required) func*
    * Custom handler to attach to the input field - used to get the value of the field for example.

