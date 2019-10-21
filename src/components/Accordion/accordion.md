# Accordion component<br/>
## Usage
~~~js
<Accordion title='title'>
  <div>Content</div>
</Accordion>
~~~

## Props

1. `title` *(optional) string*
    * Title text
2. `children` *(optional) DOM*
    * Defines text blocks.
1. `show` *(optional) boolean* 
    * Defines visibility of text blocks 
4. `size` *(optional) number*
    * Define size of the svg icon.    
    
 # Accordion group<br/>  
 ## Usage
 ~~~js
<AccordionGroup>
      <Accordion title="title" show>
        <div>Content</div>
      </Accordion>
      <Accordion title="title">
        <div>Content</div>
      </Accordion>
</AccordionGroup>
 ~~~

 AccordionGroup is a component that organizes content within collapsable items. AccordionGroup allows the display of only one collapsed item at a time.

 Default styling for the AccordionGroup component when all sections are collapsed.

