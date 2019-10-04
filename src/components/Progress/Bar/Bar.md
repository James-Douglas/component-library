
# Progress Bar

By passing an array of steps, links we can visually represent the current progress of journeys. Steps and links can also have active and disabled states.

## Props

* value (number or string) - the amount of progress bar to fill, as a percentage
## Usage

### Non-sticky Bar
~~~js
<Bar value={50} />

~~~

~~~js
<Bar value='50' />

~~~



### Sticky Bar
~~~js
<StickyBar value={50} />

~~~

~~~js
<StickyBar value='50' />

~~~