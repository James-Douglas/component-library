import React, { useState, useContext } from 'react';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { faAngleRight, faAngleLeft } from '@fortawesome/pro-regular-svg-icons';
import { WizardModal } from '@comparethemarketau/manor-modal';
import { Button } from '@comparethemarketau/manor-button';
import { Container, FluidContainer, Row, Column } from '@comparethemarketau/manor-grid';
import { Typography } from '@comparethemarketau/manor-typography';
import { Picture } from '@comparethemarketau/manor-picture';
import { Link } from '@comparethemarketau/manor-link';

import bluetooth from '../../../images/carousel/bluetooth.svg';
import contract from '../../../images/carousel/contract-info.svg';
import reminders from '../../../images/carousel/reminders.svg';

import { StyledActions, StyledPreviousButton, StyledNextButton, StyledCompleteButton } from './wizard.modal.styles';

const WizardModalView = () => {
  const { breakpoint } = useContext(ManorContext);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const open = (index) => {
    closeModals();
    setVisibleIndex(index);
  };

  const closeModals = () => {
    setVisibleIndex(-1);
  };

  function handleComplete() {
    window.open('https://dev.comparethemarket.com.au/', '_blank');
    closeModals();
  }

  function handleNext() {
    setCarouselIndex(carouselIndex + 1);
  }

  function handlePrevious() {
    setCarouselIndex(carouselIndex - 1);
  }

  const ActionButtons = () => (
    <StyledActions>
      {carouselIndex === 0 ? (
        <StyledPreviousButton />
      ) : (
        <StyledPreviousButton>
          <Button
            id="Previous-btn"
            variant="tertiary"
            style={{
              margin: 0,
              padding: 0,
            }}
            handleClick={handlePrevious}
            icon={faAngleLeft}
            trackingLabel={`Previous button`}
          >
            Previous
          </Button>
        </StyledPreviousButton>
      )}
      {carouselIndex === getPages().length - 1 ? (
        <StyledCompleteButton>
          <Button
            id="Complete-btn"
            variant="hero"
            style={{
              margin: 0,
              padding: '1.4rem 1.73rem',
              background: 'red',
            }}
            handleClick={handleComplete}
            icon={faAngleRight}
            iconAlign="right"
            trackingLabel={`Complete button`}
          >
            I Agree and Continue
          </Button>
        </StyledCompleteButton>
      ) : (
        <StyledNextButton>
          <Button
            id="next-btn"
            variant="primary"
            style={{
              margin: 0,
              padding: '1.4rem 1.73rem',
            }}
            handleClick={handleNext}
            icon={faAngleRight}
            iconAlign="right"
            trackingLabel={`Next button`}
          >
            NEXT
          </Button>
        </StyledNextButton>
      )}
    </StyledActions>
  );

  function getPages() {
    let contentPaddingSpace = ['28', '84', '28', '84'];
    switch (breakpoint) {
      case 'xs':
        contentPaddingSpace = ['24', '36', '24', '36'];
        break;
      case 'sm':
        contentPaddingSpace = ['28', '60', '28', '64'];
        break;
    }
    return [
      <Container padding={contentPaddingSpace} key={'111'}>
        <Row>
          <Column valign="center" halign="center">
            <Picture alt="contract" title="contract" src={contract} />
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" style={{ fontSize: '2.0rem', fontWeight: '600' }}>
              How Carpeesh rewards safe driving
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              To use the features of this product you will be required to download Carpeesh’s{' '}
              <strong>Driver Safety App</strong> on your mobile phone within 14 days from the beginning of the period of
              insurance.
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              The Driver Safety App samples your driving data; how far and how safely you drive your car impacts the
              future premiums you pay, with good drivers of any age rewarded and unsafe drivers required to pay more.
            </Typography>
          </Column>
        </Row>
      </Container>,
      <Container padding={contentPaddingSpace} key={'222'}>
        <Row>
          <Column valign="center" halign="center">
            <Picture alt="bluetooth" title="bluetooth" src={bluetooth} />
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" style={{ fontSize: '2.0rem', fontWeight: '600' }}>
              How It Works
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              Once the cooling off period has passed, you will be sent a Bluetooth enabled beacon to place in your car.
              Once this beacon is paired to the App, it will only record those trips completed in the insured vehicle.
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              Where the App is not downloaded within 14 days from the beginning of the period of insurance,{' '}
              <strong>an additional excess of $1,000 will apply on any claim.</strong>
            </Typography>
          </Column>
        </Row>
      </Container>,
      <Container padding={contentPaddingSpace} key={'333'}>
        <Row>
          <Column valign="center" halign="center">
            <Picture alt="reminders" title="reminders" src={reminders} />
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" style={{ fontSize: '2.0rem', fontWeight: '600' }}>
              Cooling Off Period
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              This Policy has a 14-day cooling off period. Cancellations after the 14-day cooling off period (but before
              the expiry date of the policy) will incur a cancellation fee of $50 (plus GST). There is no refund on the
              one-off Driver Safety App Fee initially charged as part of your premium.
            </Typography>
          </Column>
        </Row>
        <Row>
          <Column valign="center" halign="center">
            <Typography variant="body1" align="center">
              Please refer to the{' '}
              <Link trackingLabel="test link" href="#">
                Product Disclosure Statement
              </Link>{' '}
              and{' '}
              <Link trackingLabel="test link" href="#">
                Premium and Excess Guide
              </Link>{' '}
              for full details.
            </Typography>
          </Column>
        </Row>
      </Container>,
    ];
  }

  return (
    <FluidContainer>
      <Row>
        <Column xsOffset={4} xs={4} sm={4} md={4} lg={4}>
          <Button id="demo-1-btn" variant="secondary" handleClick={() => open(1)} trackingLabel="test">
            Mock wizard modal with external action buttons
          </Button>
        </Column>
        <WizardModal id="demo-1" trackingLabel="demo-2-tracking" visible={visibleIndex == 1} onClose={closeModals}>
          {getPages()[carouselIndex]}
          <ActionButtons />
        </WizardModal>
      </Row>
      <Row>
        <Column xsOffset={4} xs={4} sm={4} md={4} lg={4}>
          <Button id="demo-2-btn" variant="secondary" handleClick={() => open(2)} trackingLabel="test">
            Mock wizard modal with dynamic height
          </Button>
        </Column>
        <WizardModal
          id="demo-2"
          trackingLabel="demo-2-tracking"
          visible={visibleIndex == 2}
          onClose={closeModals}
          dynamicHeight
        >
          <Container padding={['28', '84', '28', '84']} key={'333'}>
            <Row>
              <Column valign="center" halign="center">
                <Picture alt="reminders" title="reminders" src={reminders} />
              </Column>
            </Row>
            <Row>
              <Column valign="center" halign="center">
                <Typography variant="body1" style={{ fontSize: '2.0rem', fontWeight: '600' }}>
                  Cooling Off Period
                </Typography>
              </Column>
            </Row>
            <Row>
              <Column valign="center" halign="center">
                <Typography variant="body1" align="center">
                  This Policy has a 14-day cooling off period. Cancellations after the 14-day cooling off period (but
                  before the expiry date of the policy) will incur a cancellation fee of $50 (plus GST). There is no
                  refund on the one-off Driver Safety App Fee initially charged as part of your premium.
                </Typography>
              </Column>
            </Row>
            <Row>
              <Column valign="center" halign="center">
                <Typography variant="body1" align="center">
                  Please refer to the{' '}
                  <Link trackingLabel="test link" href="#">
                    Product Disclosure Statement
                  </Link>{' '}
                  and{' '}
                  <Link trackingLabel="test link" href="#">
                    Premium and Excess Guide
                  </Link>{' '}
                  for full details.
                </Typography>
              </Column>
            </Row>
          </Container>
          <ActionButtons />
        </WizardModal>
      </Row>
    </FluidContainer>
  );
};

export default WizardModalView;
