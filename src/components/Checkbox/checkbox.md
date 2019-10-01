# Checkbox component<br/>
## Usage
~~~js
<Checkbox
	id={'example-id'}
	disabled={false}
	checked={false}
	invertColour={false}
	icon={'check'}
    handleClick={func}
    handleKeyUp={func}
    children={<p>checkbox content</p>}
/>
~~~

## Props
Checkbox is a custom checkbox, styled with an icon. This is the default, singular variety.

1. `id` *(required) string*
    * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
2. `disabled` *(optional) boolean*
    * Defines if the checkbox is disabled or not. Defaults to false.
3. `checked` *(optional) boolean*
    * Defines the checkbox checked state. Defaults to false.
4. `invertColour` *(optional) boolean*
    * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
6. `icon` *(optional) string*
    * Defines the icon needed for the checkbox. Defaults to 'check'.
6. `handleClick` *(optional) func*
    * Supplies the label with a custom click function.
6. `handleKeyUp` *(optional) string*
    * Supplies the label with a custom keyUp function.
6. `children` *(optional) string*
    * Defines the associated content for the checkbox, used by the wrapper component, `<CheckboxGroup/>`. Not required for the singular checkbox.


