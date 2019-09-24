# Checkbox component<br/>
## Usage
~~~js
<Checkbox
	{id}
	{disabled}
	{checked}
	{invertColour}
	{icon}
	{size}
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
4. `invertColour` *(optional) string*
    * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
5. `groupClass` *(optional) string*
    * Adds a class to the wrap of the checkbox
6. `icon` *(optional) string*
    * Defines the icon needed for the checkbox. Defaults to 'check'.
7. `size` *(optional) number*
    * Size of the icon

## Events

The `itemChecked` event is dispatched on click, providing an object with the id of the checkbox *(string)* and its checked state *(boolean)*