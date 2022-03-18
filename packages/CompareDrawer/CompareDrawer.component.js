import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/pro-regular-svg-icons/faTrashAlt';
import { faBalanceScale } from '@fortawesome/pro-regular-svg-icons/faBalanceScale';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId, useMountEffect } from '@comparethemarketau/manor-hooks';
import classnames from 'classnames';
import { Button } from '@comparethemarketau/manor-button';
import {
  CompareDrawerContainer,
  CompareDrawerBody,
  CompareCard,
  CompareCardData,
  CompareCardLogoWrapper,
  CompareCardProductName,
  CompareCardPriceWrapper,
  CompareCardPrice,
  CompareCardExcess,
  CompareCardDelete,
  EmptyCompareCard,
  CompareButton,
  StyledRemoveText,
  BottomLine,
} from './CompareDrawer.styles';

const CompareDrawer = ({
  id: propsId,
  compareNowClick,
  products,
  trackingLabel,
  onProductRemoved,
  zIndex,
  className,
}) => {
  const id = useId(propsId);
  const drawerElement = useRef(null);
  const [productsStore, setProductsStore] = useState(products);
  const visible = (productsStore.length > 0);
  const [visibility, setVisibility] = useState(visible);
  const { trackInteraction, breakpoint } = useContext(ManorContext);
  const firstUpdate = useRef(true);

  const size = (breakpoint === 'xs') ? 172 : 102;
  const safeAreaBottomHeight = getComputedStyle(document.documentElement).getPropertyValue('--sab');
  const direction = 'bottom';

  useEffect(() => {
    setVisibility(visible);
  }, [visible, setVisibility]);

  useEffect(() => {
    setProductsStore(products);
  }, [products]);

  useEffect(() => {
    if (!firstUpdate.current || visibility) {
      trackInteraction(visibility ? 'Show' : 'Hide', 'CompareDrawer', direction, trackingLabel, '');
    }
  }, [visibility, firstUpdate, direction, trackingLabel, trackInteraction]);

  useMountEffect(() => {
    firstUpdate.current = false;
  });

  const handleRemove = (productId) => {
    trackInteraction('Click', 'Button', 'deleteItem', `${trackingLabel} - Remove`, productId);
    setProductsStore((previous) => {
      const List = previous.filter((product) => product.productId !== productId);
      return List;
    });
    if (productsStore.length === 0) {
      setVisibility(false);
    }
    if (onProductRemoved) {
      onProductRemoved(productId);
    }
  };

  const emptySize = 3 - productsStore.length;
  const emtyCards = [];
  const disabledButton = !((productsStore.length) > 1);
  for (let i = 0; i < emptySize; i += 1) {
    emtyCards.push(
      <EmptyCompareCard key={`${i}-card`} breakpoint={breakpoint} className={classnames('CompareDrawerEmptyCard')}>
        Select another product to compare
      </EmptyCompareCard>,
    );
  }
  /**
   * Check Home Button Visibility [safeAreaBottomHeight]
   * https://webkit.org/blog/7929/designing-websites-for-iphone-x/
   * https://benfrain.com/how-to-get-the-value-of-phone-notches-environment-variables-env-in-javascript-from-css/
  */

  return (
    <>
      <CompareDrawerContainer
        id={id}
        direction={direction}
        ref={drawerElement}
        size={size}
        className={classnames('CompareDrawerContainer', className, visibility && 'CompareDrawerContainerActive')}
        zIndex={zIndex}
        visible={visibility}
      >
        <CompareDrawerBody breakpoint={breakpoint} className={classnames('CompareDrawerBody')}>
          {
            productsStore.map((product) => (
              <CompareCard breakpoint={breakpoint} key={product.productId} className={classnames('CompareDrawerCard')}>
                <CompareCardData>
                  <CompareCardLogoWrapper breakpoint={breakpoint} className={classnames('CompareCardLogoWrapper')}>
                    {product.provider.logo}
                  </CompareCardLogoWrapper>
                  <CompareCardProductName breakpoint={breakpoint} className={classnames('CompareCardProductName')}>
                    {product.productName}
                  </CompareCardProductName>
                  <CompareCardPriceWrapper className={classnames('CompareCardPriceWrapper')}>
                    <CompareCardPrice breakpoint={breakpoint} className={classnames('CompareCardPrice')}>
                      {product.pricing.amount.prefix}{product.pricing.amount.dollars}{product.pricing.amount.separator}<span>{product.pricing.amount.cents}</span>
                    </CompareCardPrice>
                    {product.pricing.excess && <CompareCardExcess className={classnames('CompareCardExcess')}>{product.pricing.excess}</CompareCardExcess>}
                  </CompareCardPriceWrapper>
                </CompareCardData>
                <CompareCardDelete breakpoint={breakpoint} onClick={() => handleRemove(product.productId)} className={classnames('CompareCardRemove')}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                  <StyledRemoveText>Remove</StyledRemoveText>
                </CompareCardDelete>
              </CompareCard>
            ))
          }
          {emtyCards}
          {
            <CompareButton breakpoint={breakpoint}>
              <Button
                variant="primary"
                icon={faBalanceScale}
                handleClick={compareNowClick}
                style={{ margin: '0px' }}
                trackingLabel="Compare now"
                className={classnames('CompareNowBtn')}
                disabled={disabledButton}
              >
                Compare now
              </Button>
            </CompareButton>
          }
        </CompareDrawerBody>
        { (breakpoint !== 'xs'
        && (!safeAreaBottomHeight && safeAreaBottomHeight !== '0px'))
        && <BottomLine /> }
      </CompareDrawerContainer>
    </>
  );
};

CompareDrawer.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   *  Unique identifier for the Compare Drawer
   */
  id: PropTypes.string,
  /**
   * Classes to be applied to the CompareDrawer component
   */
  className: PropTypes.string,
  /**
   * Called when the compareNow is clicked
   */
  compareNowClick: PropTypes.func,
  /**
   * Remove selected product from compare drawer
   */
  onProductRemoved: PropTypes.func,
  /**
   * array of products to be compared
   */
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string,
      provider: PropTypes.shape({
        logo: PropTypes.node,
      }),
      productName: PropTypes.string,
      pricing: PropTypes.shape({
        amount: PropTypes.shape({
          prefix: PropTypes.string,
          total: PropTypes.number,
          dollars: PropTypes.string,
          separator: PropTypes.string,
          cents: PropTypes.string,
        }),
        excess: PropTypes.string,
      }),
    }),
  ),
  /**
   * zIndex for the CompareDrawer (if using)
   */
  zIndex: PropTypes.number,
};

CompareDrawer.defaultProps = {
  id: null,
  className: '',
  compareNowClick: () => {},
  onProductRemoved: (productId) => {},
  products: [],
  zIndex: 999998,
};

export default CompareDrawer;
