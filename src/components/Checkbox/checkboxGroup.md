# CheckboxGroup component<br/>
## Usage
~~~js
<CheckboxGroup groupId={'example-id'} colSize={'6'} handleClick={func} handleKeyUp={func}>
    <Checkbox id="A-1" icon="check"><p>A-1 check</p></Checkbox>
    <Checkbox id="A-2" icon="check"><p>A-2 check</p></Checkbox>
    <Checkbox id="A-3" icon="check"><p>A-3 check</p></Checkbox>
    <Checkbox id="A-4" icon="check"><p>A-4 check</p></Checkbox>
    <Checkbox id="A-5" icon="check"><p>A-5 check</p></Checkbox>
    <Checkbox id="A-6" icon="check"><p>A-6 check</p></Checkbox>
</CheckboxGroup>
~~~

## Props
Checkbox is a custom checkbox, styled with an icon. This is the default, singular variety.

1. `groupId` *(required) string*
    * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
2. `colSize` *(optional) boolean*
    * Defines the sizing of the columns to wrap the checkboxes in.
6. `handleChange` *(optional) func*
    * Called whenever a checkbox is selected or deselected. Is called with an array of objects representing the currently
    selected checkboxes (in the form `{id, value}`) 
6. `children` *(optional) component*
    * The checkboxes that are needed for the group


