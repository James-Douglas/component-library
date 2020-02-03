import React from 'react';
// import PropTypes from 'prop-types';
import Tooltip from '../../components/Tooltip/Tooltip.component';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import StoryTemplate from '../storyTemplate';

const TooltipFiltersView = () => {
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

  const filterContainerStyle = {
    width: '100%',
    border: '1px solid lightgrey',
    padding: '25px',
  };

  const inputStyle = {
    border: '1px solid lightgrey',
    width: '100%',
    minHeight: '3.4rem',
  };

  const alignTooltip = {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
  };

  return (
    <StoryTemplate>
      <Container>
        <Row>
          <Column cols="4">
            <div id="filter-container" style={filterContainerStyle}>
              <Container>
                <Row>
                  <Column cols="10">
                    <input style={inputStyle} />
                  </Column>
                  <Column cols="2">
                    <div style={alignTooltip}>
                      <Tooltip title="test tooltip" body={tooltipContentA} placement="bottom-end" />
                    </div>
                  </Column>
                </Row>
              </Container>
            </div>
          </Column>
          <Column cols="8">
            <Container>
              <Row>
                <Column cols="12">
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
                <Column cols="12">
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
                <Column cols="12">
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
                <Column cols="12">
                  <p>
                    Bacon ipsum dolor amet short loin strip steak t-bone, andouille biltong bacon tri-tip kielbasa landjaeger ham hock
                    chicken fatback pastrami turkey pork loin. Kevin prosciutto short ribs chicken strip steak picanha salami. Meatloaf
                    capicola spare ribs kielbasa fatback beef biltong chicken alcatra. Kielbasa landjaeger andouille tenderloin strip
                    steak beef shank, short ribs t-bone. Meatball pork loin turkey beef, tenderloin leberkas jerky frankfurter biltong
                    rump hamburger.
                  </p>
                </Column>
              </Row>
            </Container>
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

export default TooltipFiltersView;
