import React from 'react';
import './typography.css';
// import Container from '../../components/Grid/Container/Container.component';

const TypographyDemo = () => (
  <>
    <div className="w-auto">
      <div className="section white-bg">
        {/* <Container> */}

        <div className="manor-overline">h1. Heading 1</div>
        <h1 className="manor-h1" title=".manor-h1">Compare The Market</h1>

        <div className="manor-overline">h2. Heading 2</div>
        <h2 className="manor-h2" title=".manor-h2">Compare The Market</h2>

        <div className="manor-overline">h3. Heading 3</div>
        <h3 className="manor-h3" title=".manor-h3">Compare The Market</h3>

        <div className="manor-overline">h4. Heading 4</div>
        <h4 className="manor-h4" title=".manor-h4">Compare The Market</h4>

        <div className="manor-overline">h5. Heading 5</div>
        <h5 className="manor-h5" title=".manor-h5">Compare The Market</h5>

        <div className="manor-overline">h6. Heading 6</div>
        <h6 className="manor-h6" title=".manor-h6">Compare The Market</h6>

        <div className="manor-overline">Subtitle 1</div>
        <div className="manor-subtitle1" title=".manor-subtitle1">Compare The Market</div>

        <div className="manor-overline">Subtitle 2</div>
        <div className="manor-subtitle2" title=".manor-subtitle2">Compare The Market</div>


        <br />
        <br />
        <div className="manor-overline">Body 1</div>
        <div className="manor-body1" title=".manor-body1">Compare The Market</div>

        <div className="manor-overline">Body 2</div>
        <div className="manor-body2" title=".manor-body2">Compare The Market</div>

        <div className="manor-overline">Microcopy</div>
        <div className="manor-microcopy" title=".manor-microcopy">Compare The Market</div>

        <div className="manor-overline">Field Overline text</div>
        <div className="manor-overline" title=".manor-overline">Compare The Market</div>

        <div className="manor-overline">Field Subscript text</div>
        <div className="manor-subscript" title=".manor-subscript">Compare The Market</div>

        <div className="manor-overline">Placeholder</div>
        <div className="manor-placeholder" title=".manor-placeholder">Compare The Market</div>
        <br />
        <br />
        <div className="manor-overline">Button 1 (button text only as button not yet defined)</div>
        <div className="manor-button1" title=".manor-button1">Compare The Market</div>

        <div className="manor-overline">Button 2 (button text only as button not yet defined)</div>
        <div className="manor-button2" title=".manor-button2">Compare The Market</div>

        <div className="manor-overline">link</div>
        <a className="manor-link" title=".manor-link" href="www.comparethemarket.com.au">Compare The Market</a>
        <br />
        <br />
        <div className="manor-overline">Unordered list</div>
        <ul className="manor-ul">
          <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
          <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ul with .manor-li">
Example:
            <ul className="manor-ul manor-nested-list">
              <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Compare The Market</li>
              <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
              <li className="manor-li" title=".manor-ul + .manor-ul with .manor-li">Compare The Market</li>
              <li className="manor-li-last-child" title=".manor-ul + .manor-ul with .manor-li">Compare The Market</li>
            </ul>
          </li>
          <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
        </ul>

        <div className="manor-overline">Ordered list</div>
        <ol className="manor-ol">
          <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
          <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ol with .manor-li">
Example:
            <ul className="manor-ul manor-nested-list">
              <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">Compare The Market</li>
              <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
              <li className="manor-li" title=".manor-ol + .manor-ul with .manor-li">Compare The Market</li>
              <li className="manor-li-last-child" title=".manor-ol + .manor-ul with .manor-li">Compare The Market</li>
            </ul>
          </li>
          <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
          <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
        </ol>

        <br />
        <br />

        <div className="manor-overline">Unordered list within Body 1</div>
        <div className="manor-body1" title=".manor-body1">
          {/* eslint-disable-next-line max-len */}
Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.
          <ul className="manor-ul">
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
            <li className="manor-li-last-child" title=".manor-ul with .manor-li">Compare The Market</li>
          </ul>
          {/* eslint-disable-next-line max-len */}
          Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.
        </div>

        <br />
        <br />

        <div className="manor-overline">Ordered list within Body 2</div>
        <div className="manor-body2" title=".manor-body2">
          {/* eslint-disable-next-line max-len */}
Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.
          <ol className="manor-ol">
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
            <li className="manor-li-last-child" title=".manor-ol with .manor-li">Compare The Market</li>
          </ol>
          {/* eslint-disable-next-line max-len */}
          Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.
        </div>

        <br />
        <br />

        <div className="manor-overline">body 1 text within paragraph tag + body 1 text within paragraph tag</div>
        <p className="manor-body1" title="p.manor-body1 + p.manor-body1">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</p>
        <p className="manor-body1" title="p.manor-body1 + p.manor-body1">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart.</p>

        <br />
        <br />

        <div className="manor-overline">body 2 text within paragraph tag + body 2 text within paragraph tag</div>
        <p className="manor-body2" title="p.manor-body2 + p.manor-body2">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</p>
        <p className="manor-body2" title="p.manor-body2 + p.manor-body2">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart.</p>


        {/* </Container> */}
      </div>

    </div>

  </>
);

export default TypographyDemo;
