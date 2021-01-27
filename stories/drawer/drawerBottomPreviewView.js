import React, { useState } from 'react';
import { DrawerHorizontal } from '@comparethemarketau/manor-drawer';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { FluidContainer, Row, Column } from '@comparethemarketau/manor-grid';
import { useBreakpoint } from '@comparethemarketau/manor-hooks';
import styled from 'styled-components';

const StyledCard = styled.div`
  text-align: center;
  padding: 4rem;
`;
const StyledDrawerContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

const DrawerBottomPreview = () => {
  const [show, setShow] = useState(false);
  const breakpoint = useBreakpoint(false);

  return (
    <ManorProvider>
      <DrawerHorizontal
        size={200}
        keyLine={!(breakpoint === 'xs' || breakpoint === 'sm')}
        visible={show}
        direction="bottom"
        handleClose={() => setShow(false)}
        iconClassName="closeIconSlide"
        trapFocus
        preview={{visible: true, clicked: false, viewArea: 40, buttonText: 'Good to know'}}
      >
        <StyledDrawerContent>
          <FluidContainer>
            <Row>
              <Column cols={12}>
                <div>
                  <Typography variant="body1">We do not compare all travel insurers or products in the market. Any advice given above is general and does not take into account your objectives, financial situation or needs. You should consider whether the advice is suitable for you and your personal circumstances, and before you make any decision about whether to purchase a product, you should read the PDS for that product. A number of the travel insurance brands on our panel are arranged by Auto & General Services Pty Ltd ACN 003 617 909 on behalf of the insurer Auto & General Insurance Company Limited ACN 111 586 353, both of which are related entities of Compare the Market Pty Ltd. Our relationship with those companies does not impact the integrity of our comparison service, and we continue to work hard to encourage brands that do not currently participate on our comparison service to come on board.</Typography>
                  <Typography variant="body1">For more information about the range of insurers and products we compare, how our service works, and how we make our money (remembering that the service is free for you to use) read our how our comparison works page, Financial Service Guide (Car, Home and Travel Insurance Products) and our Website Terms of Use.</Typography>
                  <Typography variant="body1">The Compare The Market website and trading name are owned by Compare The Market Pty Ltd ACN 117 323 378 AFSL 422926.</Typography>
                </div>
              </Column>
            </Row>
          </FluidContainer>
        </StyledDrawerContent>
      </DrawerHorizontal>
      <div>
        <Row className="row-view">
          <Column cols={12} valign="center">
            <StyledCard>
              <Typography variant="h4">Basic Drawer demo</Typography>
              <Typography variant="body1">This is an example of the Drawer component with preview.</Typography>
            </StyledCard>
          </Column>
        </Row>
      </div>
    </ManorProvider>
  );
};

export default DrawerBottomPreview;
