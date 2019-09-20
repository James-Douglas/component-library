import React from 'react';
import './typographyRichText.css';
import Container from '../../components/Grid/Container/Container.component';

const TypographyRichText = () => (
  <>
    <div className="w-auto manor-rich-text">
      <div className="section white-bg">
        <Container>
          <h1 className="manor-h1" title=".manor-h1">For Developers Only</h1>
          <h1>h1. Heading 1</h1>
          <h2>h2. Heading 2</h2>
          <h3>h3. Heading 3</h3>
          <h4>h4. Heading 4</h4>
          <h5>h5. Heading 5</h5>
          <h6>h6. Heading 6</h6>

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

          <p>
This is some text
            <a href="www.google.com">and this is a link</a>
          </p>

          <ul>
            <li>Unordered list item 1</li>
            {/* eslint-disable-next-line max-len */}
            <li>Unordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li>Unordered list item 3</li>
            <li>
Unordered list item 4
              <ul>
                <li>Unordered list item 1</li>
                {/* eslint-disable-next-line max-len */}
                <li>Unordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
                <li>Unordered list item 3</li>
                <li>Unordered list item 4</li>
                <li>Unordered list item 5</li>
              </ul>
            </li>
            <li>Unordered list item 5</li>
            <li>Unordered list item 6</li>
          </ul>

          <ol>
            <li>Ordered list item 1</li>
            {/* eslint-disable-next-line max-len */}
            <li>Ordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li>Ordered list item 3</li>
            <li>
Ordered list item 4
              <ul>
                <li>Unordered list item 1</li>
                {/* eslint-disable-next-line max-len */}
                <li>Unordered list item 2 - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
                <li>Unordered list item 3</li>
                <li>Unordered list item 4</li>
                <li>Unordered list item 5</li>
              </ul>
            </li>
            <li>Ordered list item 5</li>
            <li>Ordered list item 6</li>
          </ol>

          <div className="manor-overline manor-header-spacing">Unordered list surrounded by text within div tag</div>
          <div title="div tag">
            {/* eslint-disable-next-line max-len */}
Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.
            <ul>
              <li title="ul li">Compare The Market</li>
              <li title="ul li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
              <li title="ul li">Compare The Market</li>
              <li title="ul li">Compare The Market</li>
            </ul>
            {/* eslint-disable-next-line max-len */}
            Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.
          </div>

          <div className="manor-overline manor-header-spacing">Ordered list surrounded by text within div tag</div>
          <div title="div tag">
            {/* eslint-disable-next-line max-len */}
Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.
            <ol>
              <li title="ol li">Compare The Market</li>
              <li title="ol li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
              <li title="ol li">Compare The Market</li>
              <li title="ol li">Compare The Market</li>
            </ol>
            {/* eslint-disable-next-line max-len */}
            Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.
          </div>

          <div className="manor-overline manor-header-spacing">p tag + Unordered list + p tag</div>
          <p title="p tag">Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.</p>
          <ul>
            <li title="ul + li">Compare The Market</li>
            <li title="ul + li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li title="ul + li">Compare The Market</li>
            <li title="ul + li">Compare The Market</li>
          </ul>
          <p title="p tag">Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.</p>


          <div className="manor-overline manor-header-spacing">paragraph tag + paragraph tag</div>
          <p title="1st p tag">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</p>
          <p title="2nd p tag">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart.</p>


        </Container>
      </div>

    </div>

  </>
);

export default TypographyRichText;
