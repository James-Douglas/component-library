import React from 'react';
// import PropTypes from 'prop-types';
import Tooltip from '../../components/Tooltip/Tooltip.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import StoryTemplate from '../storyTemplate';

const TooltipGenericView = () => {
  const tooltipContentA = (
    <>
      <p>
        <b>Loss of Rent</b>
        <br />
        When there is a valid rental agreement in place, this feature provides cover for loss of rent if an insured event causes damage to the property,
        and the insurer agrees that the property is not fit to live in whilst being repaired.*
      </p>
      <p>
        <b>Malicious Damage</b>
        <br />
        Provides cover for vandalism or a malicious or intentional act caused by the tenant and/or their visitors.*
      </p>
      <p>
        <b>Tenant Default</b>
        <br />
        Provides cover up to a specified period of time if your tenant defaults on their rental payments and vacates the property without consent.*
      </p>
      <p>
        <i>*You should always read the PDS for cover limits, details of cover and exclusions as they differ between insurers</i>
      </p>
    </>
  );

  const tooltipContentB = <p>Topsail bucko capstan </p>;

  const tooltipContentC = (
    <>
      <p>Topsail bucko capstan splice the main brace me snow blow the man down clipper long boat haul wind. </p>
      <p>
Quarterdeck tender heave to pillage stern lass list Blimey maroon walk the plank. Port Blimey Jolly Roger fore no prey,
        no pay brig blow the man down cackle fruit rum bring a spring upon her cable.
      </p>
    </>
  );

  return (
    <StoryTemplate background="grey">
      <Container>
        <Row>
          <Column col="10">
            <p>
                Bacon ipsum dolor amet short loin strip steak t-bone, andouille biltong bacon tri-tip kielbasa landjaeger ham hock
                chicken fatback pastrami turkey pork loin. Kevin prosciutto short ribs chicken strip steak picanha salami. Meatloaf
                capicola spare ribs kielbasa fatback beef biltong chicken alcatra. Kielbasa landjaeger andouille tenderloin strip
                steak beef shank, short ribs t-bone. Meatball pork loin turkey beef, tenderloin leberkas jerky frankfurter biltong
                rump hamburger.
            </p>
          </Column>
          <Column col="2">
            <Tooltip title="test tooltip" body={tooltipContentA} />
          </Column>
        </Row>
        <Row>
          <Column col="10">
            <p>
  Bacon ipsum dolor amet short loin strip steak t-bone, andouille biltong bacon tri-tip kielbasa landjaeger ham hock
                chicken fatback pastrami turkey pork loin. Kevin prosciutto short ribs chicken strip steak picanha salami. Meatloaf
                capicola spare ribs kielbasa fatback beef biltong chicken alcatra. Kielbasa landjaeger andouille tenderloin strip
                steak beef shank, short ribs t-bone. Meatball pork loin turkey beef, tenderloin leberkas jerky frankfurter biltong
                rump hamburger.
            </p>
          </Column>
        </Row>
        <Row>
          <Column col="10">
            <p>
  Bacon ipsum dolor amet short loin strip steak t-bone, andouille biltong bacon tri-tip kielbasa landjaeger ham hock
                chicken fatback pastrami turkey pork loin. Kevin prosciutto short ribs chicken strip steak picanha salami. Meatloaf
                capicola spare ribs kielbasa fatback beef biltong chicken alcatra. Kielbasa landjaeger andouille tenderloin strip
                steak beef shank, short ribs t-bone. Meatball pork loin turkey beef, tenderloin leberkas jerky frankfurter biltong
                rump hamburger.
            </p>
          </Column>
          <Column col="2">
            <Tooltip title="test tooltip" body={tooltipContentB} />
          </Column>
        </Row>
        <Row>
          <Column col="10">
            <p>
  Bacon ipsum dolor amet short loin strip steak t-bone, andouille biltong bacon tri-tip kielbasa landjaeger ham hock
                chicken fatback pastrami turkey pork loin. Kevin prosciutto short ribs chicken strip steak picanha salami. Meatloaf
                capicola spare ribs kielbasa fatback beef biltong chicken alcatra. Kielbasa landjaeger andouille tenderloin strip
                steak beef shank, short ribs t-bone. Meatball pork loin turkey beef, tenderloin leberkas jerky frankfurter biltong
                rump hamburger.
            </p>
          </Column>
          <Column col="2">
            <Tooltip title="test tooltip" body={tooltipContentC} />
          </Column>
        </Row>
      </Container>
    </StoryTemplate>
  );
};

// TooltipGenericView.propTypes = {
//   title: PropTypes.string,
//   body: PropTypes.string,
// };

// TooltipGenericView.defaultProps = {
//   title: 'Example tooltip',
//   body: 'This is an example of a Tooltip, yay!',
// };

export default TooltipGenericView;
