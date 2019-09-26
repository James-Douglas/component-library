# Tooltip

The tooltip component is powered by Tippy.js (https://atomiks.github.io/tippyjs/) and can be used both standalone or by 
passing tooltip options to relevant components (preferred).

## Props

* title - (String, Optional) - Title content - may include HTML.
* body - (String, Optional) - Body content - may include HTML.
* boundingElementSelector - (String, Optional) - Selector of an element the tooltip should be constrained within 
(useful for when the tooltip is within a narrow element such as a filter and should not extend outside of it).

Both title and body are optional, however at least one is required for the tooltip & icon to be rendered.

## Usage

Tooltips are integrated into form components, so most of the time you will just pass the component a title and/or body 
and the form component will handle the rest (this way positioning of tooltips will be automatically consistent).

~~~js

<Input tooltip={title: "some title", body: "some body", boundingElementSelector: '#filter-container'} />

~~~

However you can also use the tooltip component directly if the need arises:

~~~js

<Tooltip title="some title" body="some body" />

~~~

## Accessibility

* Tab navigation ready 
* Escape key dismisses tooltip without changing focus

## Behaviour

####Page resizing
If a boundingElementSelector exists the tooltip will listen for resize events and update it's placement (from left to 
underneath) in relation to it's icon if it's container gets too small.

*The values at which this occurs are currently a "best guess" and may require tweaking*

#### Scrolling, Loss of focus & click outside tooltip
Dismisses the tooltip


