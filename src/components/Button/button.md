# Button component<br/>
## Usage
~~~js
<Button
	{id}
	{disabled}
	{btnType}
	{btnMode}
	{btnSize}
	{href}
	{target}
	{icon}
	{size}
	{content}
	on:click
/>
~~~

## Props
The button can be styled with an icon, configurable for design approved modes. These are: `primary`, `Secondary`, `text`, `link` and `footer-link`. `secondary`, `text` and `link` also have an `onDark` mode for dark backgrounds.

When `text`, `link` and `footer-link` and supplied as a `btnType`, the html structure with be rendered as an `<a>` element, with removed padding/button styling.

1. `id` *(required) string*
    * The button ID.
2. `disabled` *(optional) boolean*
	  * Defines if the button is disabled or not. Defaults to false.
3. `btnType` *(optional) string*
	  * Defines the type of button to be used. Defaults to `primary`. Other types are `secondary`, `text`, `link` and `footer-link`.
4. `btnMode` *(optional) string*
    * Defines the mode to be in. Can be changed to `onDark` which changes the buttons for `secondary`, `text`, `link` and `footer-link`. `primary` does not have a `onDark` mode.
5. `btnSize` *(optional) string*
	  * Defines the size of button to be used, `sm`, `md` and `lg`. Defaults to `md`.
6. `href` *(optional) string*
	  * Defines the `<a>` a link. Defaults to `javascript:void(0);`.
7. `target` *(optional) string*
	  * Defines if the `<a>` should have a target attribute. 
8. `icon` *(optional) string*
    * The icon to be supplied with the button. Defaults to none.
9. `size` *(optional) string*
    * The icon sizing. Defaults to '2'
10. `content` *(required) string*
    * The button text. Can render html if required.

## Events
A click event is forwarded from the component to be used by its consumer if needed. For example, on usage you can bind a function to `on:click` which will return the event, useful to pull out its ID etc.
