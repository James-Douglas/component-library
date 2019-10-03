# Progress Tracker

By passing an array of steps, links we can visually represent the current progress of journeys. Steps and links can also have active and disabled states.

## Props

* steps (array) - an array of objects defining the current state and progress of a theoretical journey.
  
  ~~~
  steps = [
    { label: 'label', disabled: false, active: false, url: '#' },
    { label: 'label', disabled: false, active: false, url: '#' },
    { label: 'label', disabled: false, active: false, url: '#' }
  ]
  ~~~
* value (number) - the amount of progress bar to fill, as a percentage

## Usage

### Sticky
~~~js
// 50% filled progress tracker with no steps 
<StickyTracker steps=[] value=50 />


// 50% filled progress tracker with 2 steps
<StickyTracker steps=[{label: 'one', url: '#'}, {label: 'two', url: '#'}] value=50 />
~~~

### Non-sticky
~~~js
// 50% filled progress tracker with no steps
<Tracker steps=[] value=50 />


// 50% filled progress tracker with 2 steps
<Tracker steps=[{label: 'one', url: '#'}, {label: 'two', url: '#'}] value=50 />
~~~






