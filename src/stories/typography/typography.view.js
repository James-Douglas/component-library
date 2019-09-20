import React from 'react';
import './typography.css';
import Container from '../../components/Grid/Container/Container.component';

const Typography = () => (
  <>
    <div className="w-auto">
      <div className="section white-bg">
        <Container>
          <h1 className="manor-h1" title=".manor-h1">For Developers Only</h1>
          <h1 className="manor-h1" title=".manor-h1">h1. Heading 1</h1>
          <h2 className="manor-h2" title=".manor-h2">h2. Heading 2</h2>
          <h3 className="manor-h3" title=".manor-h3">h3. Heading 3</h3>
          <h4 className="manor-h4" title=".manor-h4">h4. Heading 4</h4>
          <h5 className="manor-h5" title=".manor-h5">h5. Heading 5</h5>
          <h6 className="manor-h6" title=".manor-h6">h6. Heading 6</h6>

          <div className="manor-subtitle1" title=".manor-subtitle1">Subtitle 1</div>
          <div className="manor-subtitle2" title=".manor-subtitle2">Subtitle 2</div>

          <div className="manor-placeholder" title=".manor-placeholder">Placeholder</div>

          <div className="manor-body1" title=".manor-body1">Body 1</div>
          <div className="manor-body2" title=".manor-body2">Body 2</div>

          <div className="manor-microcopy" title=".manor-microcopy">Microcopy</div>

          <div className="manor-overline" title=".manor-overline">Field Overline text</div>
          <div className="manor-subscript" title=".manor-subscript">Field Subscript text</div>

          <div className="manor-button1" title=".manor-button1">Button 1 Text</div>
          <div className="manor-button2" title=".manor-button2">Button 2 Text</div>

          <p className="manor-body1">
This is some text
            <a className="manor-link" title=".manor-link" href="www.google.com">and this is a link</a>
          </p>


          <ul className="manor-ul">
            <li className="manor-li" title=".manor-ul with .manor-li">Unordered list item 1</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Unordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Unordered list item 3</li>
            <li className="manor-li" title=".manor-ul with .manor-li">
Unordered list item 4
              <ul className="manor-ul manor-nested-list">
                <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Nested unordered list item - 1</li>
                <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Nested unordered list item - 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
                <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Nested unordered list item - 3</li>
                <li className="manor-li-last-child" title=".manor-ul + .manor-ul.manor-nested-list with .manor-li-last-child">last nested unordered list item - 4</li>
              </ul>
            </li>
            <li className="manor-li" title=".manor-ul with .manor-li">Unordered list item 5</li>
            <li className="manor-li-last-child" title=".manor-ul with .manor-li">Last unordered list item 6</li>
          </ul>


          <ol className="manor-ol">
            <li className="manor-li" title=".manor-ol with .manor-li">Ordered list item 1</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Ordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Ordered list item 3</li>
            <li className="manor-li" title=".manor-ol with .manor-li">
Ordered list item 4
              <ul className="manor-ul manor-nested-list">
                <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">nested unordered list item - 1</li>
                <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">nested unordered list item - 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
                <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">nested unordered list item - 3</li>
                <li className="manor-li-last-child" title=".manor-ol + .manor-ul.manor-nested-list with .manor-li-last-child">last nested unordered list item - 4</li>
              </ul>
            </li>
            <li className="manor-li" title=".manor-ol with .manor-li">Ordered list item 5</li>
            <li className="manor-li-last-child" title=".manor-ol with .manor-li">Last ordered list item 6</li>
          </ol>

        </Container>
      </div>

    </div>

  </>
);

export default Typography;
