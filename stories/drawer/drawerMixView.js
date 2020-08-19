import React, { useState } from 'react';
import styled from 'styled-components';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import { Drawer } from '@comparethemarketau/manor-drawer';
import { FluidContainer, Container, Row, Column } from '@comparethemarketau/manor-grid';
import { Button } from '@comparethemarketau/manor-button';
import { Modal } from '@comparethemarketau/manor-modal';

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
`;
const StyledDrawerContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;


const DrawerMix = () => {
  const [show, setShow] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [openLayers, setOpenLayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const breakpoint = useBreakpoint(false);

  const setOpenLayersHandler = (layer, direction) => {
    if (direction && !openLayers.includes(layer)) {
      setOpenLayers([...openLayers, layer]);
    } else {
      setOpenLayers(openLayers.filter((item) => item !== layer));
    }
  };
  const handleClickBottom = (layer) => {
    setOpenLayersHandler(layer, !show);
    setShow(!show);
  };
  const handleClickRight = (layer) => {
    setOpenLayersHandler(layer, !showLeft);
    setShowLeft(!showLeft);
  };
  return (
    <ManorProvider>
      <Drawer
        id="1"
        size={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '300px'}`}
        visible={show}
        direction="bottom"
        handleClose={() => { setOpenLayers(openLayers.filter((item) => item !== 'secondary')); setShow(false); }}
        iconClassName="closeIconSlide"
        closeButton
        layerType="secondary"
        drawerArray={openLayers}
        trapFocus
      >
        <StyledDrawerContent>
          <FluidContainer>
            <Row>
              <Column cols={12}>
                <div>
                  <Typography variant="h4">Hi I am a Drawer :)</Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                    of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                    from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
                    of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Typography>
                  <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                    very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                  </Typography>
                </div>
              </Column>
            </Row>
          </FluidContainer>
        </StyledDrawerContent>
      </Drawer>
      <Drawer
        size={`${breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'}`}
        visible={showLeft}
        direction="right"
        handleClose={() => { setOpenLayers(openLayers.filter((item) => item !== 'primary')); setShowLeft(false); }}
        iconClassName="closeIconSlide"
        closeButton
        layerType="primary"
        drawerArray={openLayers}
        overlay
        overlayOpacity={0.3}
        trapFocus
        zIndex={ show ? 31 : 30}
      >
        <Container>
          <Row>
            <Column cols={12}>
              <div>
                <Typography variant="h4">Hi I am a right drawer :)</Typography>
                <Button id="demo-1-btn" variant="secondary" handleClick={() => setModalVisible(true)}>
                  Modal one
                </Button>
                <Modal id="test-modal" visible={modalVisible} handleClose={() => setModalVisible(false)} size="lg" overlay overlayOpacity={0.3} zIndex={show && showLeft ? 32 : 31}>
                  <h2>Email Results</h2>
                  &nbsp;
                  <Typography variant="body1">Access these search results later from any device</Typography>
                </Modal>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                  cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                  1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                  from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
                  of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                  (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                  cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                  1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                  from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
                  of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Typography variant="body1">Contrary to popular belief, Lorem Ipsum is not simply random text.
                  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </Typography>
              </div>
            </Column>
          </Row>
        </Container>
      </Drawer>
      <div>
        <Row className="row-view">
          <Column cols={12} valign="center">
            <StyledCard>
              <Typography variant="h4">Basic Drawer demo</Typography>
              <Typography variant="body1">This is an example of the Drawer component.</Typography>
              <div style={{ display: 'inline-block', marginTop: '4.8rem' }}>
                <Button
                  id="btn01"
                  variant="primary"
                  handleClick={() => handleClickBottom('secondary')}
                >
                  Open bottom drawer
                </Button>
                <Button
                  id="btn02"
                  variant="primary"
                  handleClick={() => handleClickRight('primary')}
                >
                  Open right drawer
                </Button>
              </div>
            </StyledCard>
          </Column>
        </Row>
      </div>
    </ManorProvider>
  );
};

export default DrawerMix;
