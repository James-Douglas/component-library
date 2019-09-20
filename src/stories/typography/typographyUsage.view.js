import React from 'react';
import './typographyUsage.css';
// import StickyHeader from '../../components/Header/StickyHeader.component';
import Container from '../../components/Grid/Container/Container.component';
// import Button from '../../components/Button/Button.component';


/*
  import { getBreakpoint } from '@comparethemarketau/manor-config/utils/breakpoint';

  export let breakpoint = '';
  export let number = '';

  onMount(() => {
    window.addEventListener('resize', resize);
  });

  onDestroy(() => {
    window.removeEventListener('resize', resize);
  });

  function resize() {
    breakpoint = getBreakpoint();
  }

*/


const TypographyUsage = (/* {
    breakpoint,
    number,
    isSticky,
} */) => (
  <>
    {/* <StickyHeader {breakpoint} {number} /> */}
    <div className="full w-auto">
      <div className="section white-bg">
        <Container>
          <h1 className="manor-h1" title=".manor-h1">Usage Examples - For Developers Only</h1>
          <h2 className="manor-h2 manor-header-spacing manor-heading-spacing" title=".manor-h2">Hi there. Ready to compare?</h2>
          <h3 className="manor-h3" title=".manor-h3">Health insurance is changing!</h3>
          <div className="manor-body1 manor-spacing-label-to-field" title=".manor-body1">Many Aussies feel unprepared for the upcoming shake-up. Are you one of them? Relax, we&apos;ll make it simples!</div>
          <div className="manor-spacing-toggle-to-toggle">
            {/* <Button><span className="manor-button1" title=".manor-button1">Compare Now</span></Button> */}
            {' '}
            {/* This is the IMT button This is to be replaced once the button component has been done */}
          </div>

          <h3 className="manor-h3" title=".manor-h3">Lessons in Simplesness</h3>
          <h4 className="manor-h4" title=".manor-h4">What is Simplesness?</h4>
          <div className="manor-body1 manor-spacing-label-to-field" title=".manor-body1">A state of mind in which everything becomes easy to deal with.</div>
          <div className="manor-spacing-toggle-to-toggle">
            {/* <Button><span className="manor-button2" title=".manor-button2">How can it help me?</span></Button> */}
            {' '}
            {/* This is the IMT button This is to be replaced once the button component has been done */}
          </div>
          <h5 className="manor-h5" title=".manor-h5">Here is some Bacon ipsum</h5>
          <p className="manor-body1" title=".manor-body1">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner. Alcatra brisket corned beef buffalo filet mignon sausage beef ribs drumstick tongue. Biltong ribeye shankle burgdoggen, fatback prosciutto shoulder turducken salami porchetta.</p>
          <p className="manor-body1" title=".manor-body1">Filet mignon beef ribs pancetta leberkas. Prosciutto andouille beef capicola, pork loin shoulder beef ribs swine cow fatback porchetta. Alcatra picanha kielbasa andouille pig biltong. Kielbasa meatloaf prosciutto beef ribs shoulder pork chop ham hock pig. Strip steak short ribs beef bacon ground round porchetta, picanha pancetta sirloin drumstick bresaola doner shoulder frankfurter salami.</p>
          <h6 className="manor-h6" title=".manor-h6">More Bacon ipsum</h6>
          <p className="manor-body1" title=".manor-body1">Bacon burgdoggen cupim corned beef capicola prosciutto pork landjaeger. Cupim beef ribs ball tip hamburger brisket pork belly swine ham capicola boudin pork loin doner. Strip steak landjaeger brisket shoulder leberkas biltong. Kielbasa short loin cupim, bresaola meatloaf shoulder leberkas. Landjaeger turducken meatloaf cupim jerky, buffalo andouille drumstick hamburger filet mignon brisket prosciutto shankle salami ground round.</p>
          <p className="manor-body1" title=".manor-body1">Porchetta spare ribs kielbasa tri-tip sirloin andouille short ribs prosciutto. Shoulder brisket corned beef tri-tip chicken, short loin jowl short ribs. Venison corned beef buffalo tri-tip turducken boudin. Sausage porchetta pork loin corned beef pork chop burgdoggen pork spare ribs tongue prosciutto short ribs chuck picanha flank. Picanha pastrami doner t-bone. Shoulder t-bone beef ribs short loin flank meatloaf. Turducken kevin pancetta alcatra landjaeger, porchetta cow tri-tip ham shoulder.</p>

          <div className="manor-subtitle1" title=".manor-subtitle1">And now for something completely different</div>
          <p className="manor-body1" title=".manor-body1">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart. Cake tart wafer jelly-o dragée.</p>
          <p className="manor-body1" title=".manor-body1">Dessert candy powder tootsie roll cake oat cake wafer bonbon icing. Dessert powder topping candy canes. Liquorice oat cake chocolate gummies jujubes cake. Topping cake apple pie tiramisu. Brownie cookie candy sweet bear claw muffin. Jelly candy toffee pie pastry oat cake. Jelly marshmallow pie macaroon gingerbread tiramisu pudding cotton candy. Candy canes gummi bears tiramisu bonbon.</p>

          <div className="manor-subtitle2" title=".manor-subtitle2">Always Look on the Bright Side of Life</div>
          <p className="manor-body2" title=".manor-body2">
Some things in life are bad,
            <br />
            They can really make you mad,
            <br />
            Other things just make you swear and curse,
            <br />
            When you&apos;re chewing life&apos;s gristle,
            <br />
            Don&apos;t grumble,
            <br />
            Give a whistle
            <br />
            And this&apos;ll help things turn out for the best.
            <br />
            And...
            <br />
          </p>
          <p className="manor-microcopy" title=".manor-microcopy">
            If life seems jolly rotten,
            <br />
            There&apos;s something you&apos;ve forgotten,
            <br />
            And that&apos;s to laugh and smile and dance and sing.
            <br />
            When you&apos;re feeling in the dumps,
            <br />
            Don&apos;t be silly chumps.
            <br />
            Just purse your lips and whistle.
            <br />
            That&apos;s the thing.
            <br />
            And...
            <br />
          </p>

          {/* This one probably will never be used due to the way we implement placeholder text */}
          <div className="manor-placeholder" title=".manor-placeholder">Placeholder</div>
          <br />

          <div className="manor-overline" title=".manor-overline">Overline</div>
          <div className="manor-subscript" title=".manor-subscript">Subscript</div>

          <p className="manor-body1" title=".manor-body1">
This is some text
            <a className="manor-link" title=".manor-link" href="www.google.com">and this is a link</a>
          </p>


          <h4 className="manor-overline manor-header-spacing">Unordered list</h4>
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

          <h4 className="manor-overline manor-header-spacing">Ordered list</h4>
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


          <h4 className="manor-overline manor-header-spacing">Unordered list within Body 1</h4>
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

          <h4 className="manor-overline manor-header-spacing">Ordered list within Body 2</h4>
          <div className="manor-body2" title=".manor-body2">
            {/* eslint-disable-next-line max-len */}
Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.
            <ol className="manor-ol">
              <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
              <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
              <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
              <li className="manor-li-last-child" title=".manor-ol with .manor-li">Compare The Market</li>
            </ol>
            {/* eslint-disable-next-line max-len */}
            Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.
          </div>

          <br />
          <br />

          <h4 className="manor-overline manor-header-spacing">p.manor-body1 + Ordered list + p.manor-body1</h4>
          <p className="manor-body1" title="p.manor-body1">Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.</p>
          <ul className="manor-ul">
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ul with .manor-li">Compare The Market</li>
            <li className="manor-li-last-child" title=".manor-ul with .manor-li">Compare The Market</li>
          </ul>
          <p className="manor-body1" title="p.manor-body1">Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.</p>


          <h4 className="manor-overline manor-header-spacing">p.manor-body2 + Ordered list + p.manor-body2</h4>
          <p className="manor-body2" title="p.manor-body2">Chocolate dessert bonbon fruitcake. Pudding brownie cake jelly-o topping ice cream. Macaroon lollipop muffin candy toffee jelly marshmallow. Jelly beans tootsie roll cupcake muffin. Sugar plum liquorice macaroon wafer dragée tiramisu sweet gummi bears icing. Pudding caramels bear claw.</p>
          <ol className="manor-ol">
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market - Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</li>
            <li className="manor-li" title=".manor-ol with .manor-li">Compare The Market</li>
            <li className="manor-li-last-child" title=".manor-ol with .manor-li">Compare The Market</li>
          </ol>
          <p className="manor-body2" title="p.manor-body2">Jelly-o croissant caramels liquorice chupa chups pudding gummi bears cake. Ice cream chupa chups fruitcake liquorice gummi bears lemon drops chocolate cake caramels. Gingerbread bear claw sesame snaps sweet cupcake carrot cake sugar plum. Sweet roll halvah candy canes muffin oat cake powder pie muffin cheesecake. Sweet tootsie roll halvah lemon drops jelly-o. Tart fruitcake cotton candy gummi bears soufflé sesame snaps pie cake danish. Cotton candy candy canes sweet roll powder chocolate cake icing icing tootsie roll donut.</p>


          <br />
          <br />

          <h4 className="manor-overline manor-header-spacing">body 1 text within paragraph tag + body 1 text within paragraph tag</h4>
          <p className="manor-body1" title="p.manor-body1 + p.manor-body1">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</p>
          <p className="manor-body1" title="p.manor-body1 + p.manor-body1">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart.</p>

          <br />
          <br />

          <h4 className="manor-overline manor-header-spacing">body 2 text within paragraph tag + body 2 text within paragraph tag</h4>
          <p className="manor-body2" title="p.manor-body2 + p.manor-body2">Bacon ipsum dolor amet pork chop buffalo biltong leberkas pork belly alcatra tongue. Salami pork belly tail pork chop beef ribs, shoulder picanha. Pork bresaola cow shank fatback chuck pastrami t-bone prosciutto. Pork loin short loin cupim corned beef. Shank hamburger strip steak, turkey chuck frankfurter doner.</p>
          <p className="manor-body2" title="p.manor-body2 + p.manor-body2">Cupcake ipsum dolor sit amet chocolate cake. Cupcake dragée gummi bears. Jelly beans carrot cake candy liquorice apple pie. Apple pie cake jelly-o. Candy canes marzipan biscuit. Soufflé candy marshmallow chocolate cake macaroon cotton candy cake gingerbread cake. Candy canes biscuit tiramisu cheesecake tart.</p>


        </Container>
      </div>

    </div>

  </>
);

/*
TextareaView.propTypes = {
  breakpoint: PropTypes.string,
  number: PropTypes.string,
  isSticky: PropTypes.bool
};

TextareaView.defaultProps = {
  breakpoint: '',
  number: '',
  isSticky: false,
};
*/

export default TypographyUsage;
