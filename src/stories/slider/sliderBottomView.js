import React, { useState } from 'react';
import Slider from 'components/Slider/Slider.component';
import Overlay from 'components/Overlay/Overlay.component';
import FluidContainer from 'components/Grid/Container/Container.component';
import Row from 'components/Grid/Row/Row.component';
import Column from 'components/Grid/Column/Column.component';
import Button from 'components/Button/Button.component';
import useBreakpoint from 'hooks/useBreakpoint';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
  border: 1px solid ${(props) => props.theme.colors.greyLight};
`;
const StyledSliderContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;
const StyledContainer = styled(FluidContainer)`
  background: ${(props) => props.theme.colors.greyLight};
`;

const SliderBottom = () => {
  const [show, setShow] = useState(false);
  const breakpoint = useBreakpoint(false);
  return (
    <ThemeProvider theme={getTheme()}>
      {show && (
        <>
          <Overlay opacityLevel={0.3} onClose={() => setShow(false)} />
          <Slider
            notificationSize={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '120px'}`}
            show={show}
            direction="bottom"
            onClose={() => setShow(false)}
            iconClassName="closeIconSlide"
            closeButton
          >
            <StyledSliderContent>
              <FluidContainer className="mt-24">
                <Row>
                  <Column cols="12" sm="12" md="12">
                    <div>
                      <h4>Hi I am a slider :)</h4>
                    </div>
                  </Column>
                </Row>
              </FluidContainer>
            </StyledSliderContent>
          </Slider>
        </>
      )}
      <StyledContainer>
        <Row className="row-view">
          <Column cols="12" valign="center">
            <StyledCard>
              <h4>Basic slider demo</h4>
              <p>This is an example of the slider component.</p>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button
                  id="text-btn01"
                  variant="tertiary"
                  disabled={false}
                  href="#/"
                  handleClick={() => setShow(!show)}
                  target="_self"
                >
                  Click me
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default SliderBottom;
