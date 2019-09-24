# Button component<br/>
## Usage
~~~js
<Button
	id={"unique-id"}
	btnType={"primary"}
	btnMode={"onDark"}
	btnSize={"md"}
	content={"button content string"}
	disabled={false}
	icon={"check"}
	size={"2"}
	iconAlignRight={true}
	href={"#"}
	target={"_blank"}
	rel={"nofollow"}
	handleClick={func}
/>
~~~

## Props
The button can be styled with an icon, configurable for design approved modes. These are: `primary`, `Secondary`, `text`, `link` and `footer-link`. `secondary`, `text` and `link`. All have an `onDark` mode for dark backgrounds apart from `primary`.

When `text`, `link` and `footer-link` and supplied as a `btnType`, the html structure with be rendered as an `<a>` element, with removed padding/button styling.

1. `id` *(required) string*
    * The button ID.
2. `btnType` *(optional) string*
	  * Defines the type of button to be used, applied as a class. Defaults to `primary`. Other types are `secondary`, `text`, `link` and `footer-link`.
3. `btnMode` *(optional) string*
    * Defines the mode to be in. Can be changed to `onDark` which changes the buttons for `secondary`, `text`, `link` and `footer-link`. `primary` does not have a `onDark` mode.
4. `btnSize` *(optional) string*
	  * Defines the size of button to be used, `sm`, `md` and `lg`. Defaults to `md`.
5. `content` *(required) string*
    * The button text. Can render html if required.
6. `disabled` *(optional) boolean*
	  * Defines if the button is disabled or not. Defaults to false.
7. `icon` *(optional) string*
    * The icon to be supplied with the button. Defaults to none.
8. `size` *(optional) string*
    * The icon sizing. Defaults to '2'
9. `iconAlignRight` *(optional) boolean*
    * Shift the icon to the right, content to the left. Defaults to false.
10. `href` *(optional) string*
	  * Defines the `<a>` link. Defaults to `#`.
11. `target` *(optional) string*
	  * Defines if the `<a>` should have a target attribute. 
12. `rel` *(optional) string*
	  * Specifies the rel, for example "nofollow" can be supplied
13. `handleClick` *(optional) string*
	  * Pass the button a custom click function

