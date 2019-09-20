# Typography Styles
Typography styles can be applied by either applying a specific class to an individual element or by adding .manor-rich-text to an ancestor element.

## Usage
~~~js
<h1 class='manor-h1'>This is a h1 heading with typography styles applied at the element level</h1>


<div class="manor-rich-text">
    <h1>This is a h1 heading with typography styles applied via an ancestor element</h1>

    <div>
        <h1>This is also a h1 heading with typography styles applied via an ancestor element</h1>
    </div>
</div>
~~~

## Classes Available for use

1. Body classes
    * The following classes are available for styling bodies and can only be applied via adding a class at the element level.
        - 1. `.manor-body1`
            * Use case: Tooltips, input fields, drop downs, combo fields, Text fields
        - 2. `.manor-body2`
            * Use case: Secondary text (extra information) e.g. tooltips

2. Button classes
    * The following classes are available for styling Button and can only be applied via adding a class at the element level.
        - 1. `.manor-button1`
            * Use case: CTA (red routes)
        - 2. `.manor-button2`
            * Use case: Other Buttons

3. Heading classes:
    * The following classes are available for styling headings and can be applied at the element level or by
      applying the 'manor-rich-text' class to ancestor element.
        - 1. `.manor-h1`
            * Use case: Homepage
        - 2. `.manor-h2`
            * Use case: Homepage, Landing pages, Journey Headings
        - 3. `.manor-h3`
            * Use case: Homepage, Landing pages, Journey Headings
        - 4. `.manor-h4`
            * Use case: Homepage, Landing pages, Journey Headings
        - 5. `.manor-h5`
            * Use case: Homepage, Landing pages, Journey Headings
        - 6. `.manor-h6`
            * Use case: Homepage, Landing pages, Journey Headings

4. Subtitle classes
    * The following classes are available for styling Subtitles and can only be applied via adding a class at the element level.
        - 1. `.manor-subtitle1`
            * Use case: Homepage, Landing pages, Journey Headings
        - 2. `.manor-subtitle2`
            * Use case: Homepage, Landing pages, Journey Headings

5. link class
       * The following classes are available for styling links and can be applied at the element level or by
         applying the 'manor-rich-text' class to ancestor element.
           - 1. `.manor-link`

6. list classes
    * The following classes are available for styling lists and can be applied at the element level or by
      applying the 'manor-rich-text' class to ancestor element.
        - 1. `.manor-ul`
            * Use case: Unordered Lists
        - 2. `.manor-ol`
            * Use case: Ordered Lists
        - 2. `.manor-li`
            * Use case: List Items - adds padding after each item
        - 3. `.manor-li-last-item`
            * Use case: Last child List Items - removes padding from last list item
        - 4. `.manor-nested-list`
            * Use case: nested lists - removes margin from bottom of nested list

7. Microcopy class
       * The following class is available for styling Microcopy and can only be applied via adding a class at the element level.
           - 1. `.manor-microcopy`
            * Use case: Captions, Terms and Conditions

8. Overline / Underline classes
    * The following class is available for styling overline / subscript text and can only be applied via adding a class at the element level.
        - 1. `.manor-overline`
            * Use case: Field text label
        - 2. `.manor-subscript`
            * Use case: Field requirement 'Optional'

5. Placeholder class
       * The following class is available for styling placeholders and can only be applied via adding a class at the element level.
           - 1. `.manor-placeholder`
            * Use case: placeholder information form-fields

6. Spacing classes
       * The following classes are available for dynamic styling for spacing and currently can only be applied via adding a class at the element level.
           - 1. `.manor-header-spacing`
            * Use case: Add to first element on the page after the Page header / tracker / progress bar
           - 2. `.manor-heading-spacing`
            * Use case: Add to h1 element to provide a buffer between it and an element below it
           - 3. `.manor-label-spacing`
            * Use case: Add to label element to provide a buffer between it and a form input element of some description below it
           - 4. `.manor-toggle-to-toggle`
            * Use case: Add to toggle element to provide a buffer between it and a toggle element of some description below it