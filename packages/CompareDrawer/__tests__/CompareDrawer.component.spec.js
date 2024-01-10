import React from 'react';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
import { render, fireEvent } from '../../../testUtils';
import CompareDrawer from '../CompareDrawer.component';
import { Picture } from '../../Picture/Picture.component';
import originLogo from '../../../images/ORIGIN.png';

describe('CompareDrawer', () => {
  const productsArray = [
    {
      productId: 'firstProductItemId',
      provider: {
        logo: <Picture src={originLogo} />,
      },
      productName: 'Gold Comprehensive 1',
      pricing: {
        amount: {
          prefix: '$',
          total: 638.63,
          dollars: '638',
          separator: '.',
          cents: '63',
        },
        excess: 'Excess $700',
      },
    },
    {
      productId: 'secondProductItemId',
      provider: {
        logo: <Picture src={originLogo} />,
      },
      productName: 'Gold Comprehensive 2',
      pricing: {
        amount: {
          prefix: '$',
          total: 637.63,
          dollars: '637',
          separator: '.',
          cents: '63',
        },
        excess: 'Excess $701',
      },
    },
    {
      productId: '345',
      provider: {
        logo: <Picture src={originLogo} />,
      },
      productName: 'Gold Comprehensive 3',
      pricing: {
        amount: {
          prefix: '$',
          total: 636.63,
          dollars: '636',
          separator: '.',
          cents: '63',
        },
        excess: 'Excess $702',
      },
    },
  ];

  it('check content inside CompareDrawer exist', () => {
    let myProductsArray = [...productsArray];

    const handleItemRemoved = (productId) => {
      myProductsArray = myProductsArray.filter((product) => product.productId !== productId);
    };

    /* eslint-disable no-alert */
    const { getAllByText, getByText, queryByText } = render(
      <CompareDrawer
        id="theCompareDrawer1"
        trackingLabel="test 1"
        compareNowClick={() => alert('Compare Now Button Test')}
        onProductRemoved={handleItemRemoved}
        products={myProductsArray}
      />,
    );

    /* eslint-enable */
    expect(getByText('Gold Comprehensive 1')).toBeInTheDocument();
    expect(getByText('Gold Comprehensive 2')).toBeInTheDocument();
    expect(getByText('Gold Comprehensive 3')).toBeInTheDocument();
    expect(getByText('Excess $700')).toBeInTheDocument();
    expect(getByText('Excess $701')).toBeInTheDocument();
    expect(getByText('Excess $702')).toBeInTheDocument();
    expect(getByText('Compare now')).toBeInTheDocument();
    expect(queryByText('Select another product to compare')).toBeNull();
    expect(getAllByText('Remove').length).toBe(3);
  });

  it('Compare draw is displayed when products added', () => {
    const myProductsArray = [...productsArray];

    const { container } = render(
      <CompareDrawer
        id="theCompareDrawer2"
        trackingLabel="test 2"
        compareNowClick={() => {}}
        onProductRemoved={() => {}}
        products={myProductsArray}
      />,
    );
    const animateBottom = container.querySelectorAll('[direction="bottom"]')[0];
    expect(animateBottom).toHaveStyleRule('bottom', '-107px');
    const compareDrawerChild = container.firstChild;
    expect(compareDrawerChild).toHaveStyleRule('background', '#FFFFFF');
    expect(compareDrawerChild).toHaveStyle('z-index: 999998');
    expect(compareDrawerChild).toHaveClass('CompareDrawerContainerActive');
  });

  it('Compare draw is not displayed when no products added', () => {
    const myProductsArray = [];

    const { container } = render(
      <CompareDrawer
        id="theCompareDrawer3"
        trackingLabel="test 3"
        compareNowClick={() => {}}
        onProductRemoved={() => {}}
        products={myProductsArray}
      />,
    );
    const compareDrawerChild = container.firstChild;
    expect(compareDrawerChild).not.toHaveClass('CompareDrawerContainerActive');
    expect(compareDrawerChild).toHaveStyleRule('bottom', '-107px');
  });

  it('check click compare now button', () => {
    const handleCompareNowFun = jest.fn();
    const handleRemoveItemFun = jest.fn();
    const myProductsArray = [...productsArray];

    const { container } = render(
      <CompareDrawer
        id="theCompareDrawer4"
        trackingLabel="test 4"
        compareNowClick={handleCompareNowFun}
        onProductRemoved={handleRemoveItemFun}
        products={myProductsArray}
      />,
    );
    const compareNowBtn = container.querySelector('.fa-balance-scale');

    fireEvent.click(compareNowBtn);
    expect(handleCompareNowFun).toHaveBeenCalled();
  });

  it('check click remove item button', () => {
    const handleCompareNowFun = jest.fn();
    const handleRemoveItemFun = jest.fn();
    const myProductsArray = [...productsArray];

    const { container } = render(
      <CompareDrawer
        id="theCompareDrawer5"
        trackingLabel="test 5"
        compareNowClick={handleCompareNowFun}
        onProductRemoved={handleRemoveItemFun}
        products={myProductsArray}
      />,
    );
    const firstTrashBtn = container.querySelectorAll('.fa-trash-alt')[0];

    fireEvent.click(firstTrashBtn);
    expect(handleRemoveItemFun).toHaveBeenCalled();
    expect(handleRemoveItemFun).toHaveBeenCalledWith('firstProductItemId');
  });

  it('Compare draw is hidden after all items removed', () => {
    const myProductsArrayWithSingleItem = productsArray.slice(0, 1);
    const handleRemoveItemFun = jest.fn();

    const { getAllByText, getByText, container } = render(
      <CompareDrawer
        id="theCompareDrawer6"
        trackingLabel="test 6"
        compareNowClick={() => {}}
        onProductRemoved={handleRemoveItemFun}
        products={myProductsArrayWithSingleItem}
      />,
    );
    expect(getAllByText('Select another product to compare').length).toBe(2);
    expect(getAllByText('Remove').length).toBe(1);
    expect(getByText('Compare now')).toBeInTheDocument();
    expect(getByText('Compare now').getAttribute('disabled'));

    const firstTrashBtn = container.querySelectorAll('.fa-trash-alt')[0];

    fireEvent.click(firstTrashBtn);
    const compareDrawerChild = container.firstChild;
    expect(compareDrawerChild).not.toHaveClass('CompareDrawerContainerActive');
  });

  it('compare drawer behavior when 2 items selected for compare', () => {
    const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
    const handleRemoveItemFun = jest.fn();

    const {
      getAllByText,
      getByText,
      container,
    } = render(
      <CompareDrawer
        id="theCompareDrawer7"
        trackingLabel="test 7"
        compareNowClick={() => {}}
        onProductRemoved={handleRemoveItemFun}
        products={myProductsArrayWithTwoItems}
      />,
    );
    expect(getAllByText('Select another product to compare').length).toBe(1);
    expect(getAllByText('Remove').length).toBe(2);
    expect(getByText('Compare now')).toBeInTheDocument();
    const secondTrashBtn = container.querySelectorAll('.fa-trash-alt')[1];

    fireEvent.click(secondTrashBtn);

    expect(handleRemoveItemFun).toHaveBeenCalled();
    expect(handleRemoveItemFun).toHaveBeenCalledWith('secondProductItemId');
    expect(getByText('Compare now')).toBeInTheDocument();
    expect(getByText('Compare now').getAttribute('disabled')).toEqual(null);

    expect(getAllByText('Select another product to compare').length).toBe(2);
    const compareDrawerChild = container.firstChild;
    expect(compareDrawerChild).toHaveClass('CompareDrawerContainerActive');
  });

  describe('breakpoint interaction', () => {
    it('breakpoint xs', () => {
      // Change the viewport to 500px.
      global.innerWidth = 500;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
      const handleRemoveItemFun = jest.fn();

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer8"
          trackingLabel="test 8"
          compareNowClick={() => {}}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithTwoItems}
        />,
      );
      const firstCompareDrawerCard = container.querySelectorAll('.CompareDrawerCard')[0];
      expect(firstCompareDrawerCard).toHaveStyle('flex-wrap: wrap-reverse');
      const firstPriceElement = container.querySelectorAll('.CompareCardPrice')[0];
      expect(firstPriceElement).toHaveStyle('font-size: 1.8rem');
      const firstPriceCentsElement = container.querySelectorAll('.CompareCardPrice > span')[0];
      expect(firstPriceCentsElement).toHaveStyle('font-size: 1.2rem');
      const firstPriceExcessElement = container.querySelectorAll('.CompareCardExcess')[0];
      expect(firstPriceExcessElement).toHaveStyle('font-size: 1.2rem');
      const firstRemoveBtnElement = container.querySelectorAll('.CompareCardRemove')[0];
      expect(firstRemoveBtnElement).toHaveStyle('font-size: 1.2rem');
      const firstEmptyCardElement = container.querySelectorAll('.CompareDrawerEmptyCard')[0];
      expect(firstEmptyCardElement).toHaveStyle('font-size: 1.2rem');
      const compareNowBtnElement = container.querySelector('.CompareNowBtn');
      expect(compareNowBtnElement).toHaveStyle('font-size: 1.6rem');
    });

    it('breakpoint sm', () => {
      // Change the viewport to 800px.
      global.innerWidth = 800;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
      const handleRemoveItemFun = jest.fn();

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer9"
          trackingLabel="test 9"
          compareNowClick={() => {}}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithTwoItems}
        />,
      );
      const firstCompareDrawerCard = container.querySelectorAll('.CompareDrawerCard')[0];
      expect(firstCompareDrawerCard).not.toHaveStyle('flex-wrap: wrap-reverse');
      const firstPriceElement = container.querySelectorAll('.CompareCardPrice')[0];
      expect(firstPriceElement).toHaveStyle('font-size: 1.8rem');
      const firstPriceCentsElement = container.querySelectorAll('.CompareCardPrice > span')[0];
      expect(firstPriceCentsElement).toHaveStyle('font-size: 1.2rem');
      const firstPriceExcessElement = container.querySelectorAll('.CompareCardExcess')[0];
      expect(firstPriceExcessElement).toHaveStyle('font-size: 1.2rem');
      const firstRemoveBtnElement = container.querySelectorAll('.CompareCardRemove')[0];
      expect(firstRemoveBtnElement).toHaveStyle('font-size: 1.2rem');
      const firstEmptyCardElement = container.querySelectorAll('.CompareDrawerEmptyCard')[0];
      expect(firstEmptyCardElement).toHaveStyle('font-size: 1.2rem');
      const compareNowBtnElement = container.querySelector('.CompareNowBtn');
      expect(compareNowBtnElement).toHaveStyle('font-size: 1.6rem');
    });

    it('breakpoint md', () => {
      // Change the viewport to 1101px.
      global.innerWidth = 1101;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
      const handleRemoveItemFun = jest.fn();

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer10"
          trackingLabel="test 10"
          compareNowClick={() => {}}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithTwoItems}
        />,
      );
      const firstCompareDrawerCard = container.querySelectorAll('.CompareDrawerCard')[0];
      expect(firstCompareDrawerCard).not.toHaveStyle('flex-wrap: wrap-reverse');
      const firstPriceElement = container.querySelectorAll('.CompareCardPrice')[0];
      expect(firstPriceElement).toHaveStyle('font-size: 2rem');
      const firstPriceCentsElement = container.querySelectorAll('.CompareCardPrice > span')[0];
      expect(firstPriceCentsElement).toHaveStyle('font-size: 1.6rem');
      const firstPriceExcessElement = container.querySelectorAll('.CompareCardExcess')[0];
      expect(firstPriceExcessElement).toHaveStyle('font-size: 1.2rem');
      const firstRemoveBtnElement = container.querySelectorAll('.CompareCardRemove')[0];
      expect(firstRemoveBtnElement).toHaveStyle('font-size: 1.2rem');
      const firstEmptyCardElement = container.querySelectorAll('.CompareDrawerEmptyCard')[0];
      expect(firstEmptyCardElement).toHaveStyle('font-size: 1.6rem');
      const compareNowBtnElement = container.querySelector('.CompareNowBtn');
      expect(compareNowBtnElement).toHaveStyle('font-size: 1.6rem');
    });

    it('breakpoint lg', () => {
      // Change the viewport to 1201px.
      global.innerWidth = 1201;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
      const handleRemoveItemFun = jest.fn();

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer11"
          trackingLabel="test 11"
          compareNowClick={() => {}}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithTwoItems}
        />,
      );
      const firstCompareDrawerCard = container.querySelectorAll('.CompareDrawerCard')[0];
      expect(firstCompareDrawerCard).not.toHaveStyle('flex-wrap: wrap-reverse');
      const firstPriceElement = container.querySelectorAll('.CompareCardPrice')[0];
      expect(firstPriceElement).toHaveStyle('font-size: 2rem');
      const firstPriceCentsElement = container.querySelectorAll('.CompareCardPrice > span')[0];
      expect(firstPriceCentsElement).toHaveStyle('font-size: 1.6rem');
      const firstPriceExcessElement = container.querySelectorAll('.CompareCardExcess')[0];
      expect(firstPriceExcessElement).toHaveStyle('font-size: 1.2rem');
      const firstRemoveBtnElement = container.querySelectorAll('.CompareCardRemove')[0];
      expect(firstRemoveBtnElement).toHaveStyle('font-size: 1.2rem');
      const firstEmptyCardElement = container.querySelectorAll('.CompareDrawerEmptyCard')[0];
      expect(firstEmptyCardElement).toHaveStyle('font-size: 1.6rem');
      const compareNowBtnElement = container.querySelector('.CompareNowBtn');
      expect(compareNowBtnElement).toHaveStyle('font-size: 1.6rem');
    });

    it('breakpoint lg Plus', () => {
      // Change the viewport to 1500px.
      global.innerWidth = 1500;

      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));

      const myProductsArrayWithTwoItems = productsArray.slice(0, 2);
      const handleRemoveItemFun = jest.fn();

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer12"
          trackingLabel="test 12"
          compareNowClick={() => {}}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithTwoItems}
        />,
      );
      const firstCompareDrawerCard = container.querySelectorAll('.CompareDrawerCard')[0];
      expect(firstCompareDrawerCard).not.toHaveStyle('flex-wrap: wrap-reverse');
      const firstPriceElement = container.querySelectorAll('.CompareCardPrice')[0];
      expect(firstPriceElement).toHaveStyle('font-size: 2rem');
      const firstPriceCentsElement = container.querySelectorAll('.CompareCardPrice > span')[0];
      expect(firstPriceCentsElement).toHaveStyle('font-size: 1.6rem');
      const firstPriceExcessElement = container.querySelectorAll('.CompareCardExcess')[0];
      expect(firstPriceExcessElement).toHaveStyle('font-size: 1.2rem');
      const firstRemoveBtnElement = container.querySelectorAll('.CompareCardRemove')[0];
      expect(firstRemoveBtnElement).toHaveStyle('font-size: 1.2rem');
      const firstEmptyCardElement = container.querySelectorAll('.CompareDrawerEmptyCard')[0];
      expect(firstEmptyCardElement).toHaveStyle('font-size: 1.6rem');
      const compareNowBtnElement = container.querySelector('.CompareNowBtn');
      expect(compareNowBtnElement).toHaveStyle('font-size: 1.6rem');
    });
  });

  describe('interaction tracking', () => {
    it('tracks show action', () => {
      const { trackEvent } = useTracking();

      const myProductsArray = [...productsArray];
      const myTrackingLabel = 'test 13';

      render(
        <CompareDrawer
          id="theCompareDrawer13"
          trackingLabel={myTrackingLabel}
          compareNowClick={() => {}}
          onProductRemoved={() => {}}
          products={myProductsArray}
        />,
      );

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Show',
          ixn_object: 'CompareDrawer',
          ixn_type: 'bottom',
          ixn_label: myTrackingLabel,
          ixn_value: '',
        },
      });
    });

    it('track click compare now button', () => {
      const { trackEvent } = useTracking();
      const handleCompareNowFun = jest.fn();
      const handleRemoveItemFun = jest.fn();
      const myProductsArray = [...productsArray];
      const myTrackingLabel = 'test 14';

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer14"
          trackingLabel={myTrackingLabel}
          compareNowClick={handleCompareNowFun}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArray}
        />,
      );
      const compareNowBtn = container.querySelector('.fa-balance-scale');

      fireEvent.click(compareNowBtn);

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_object: 'Button',
          ixn_type: 'primary',
          ixn_label: 'Compare now',
          ixn_value: 'Compare now',
        },
      });
    });

    it('track click remove item button', () => {
      const { trackEvent } = useTracking();
      const handleCompareNowFun = jest.fn();
      const handleRemoveItemFun = jest.fn();
      const myProductsArray = [...productsArray];
      const myTrackingLabel = 'test 15';

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer15"
          trackingLabel={myTrackingLabel}
          compareNowClick={handleCompareNowFun}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArray}
        />,
      );
      const firstTrashBtn = container.querySelectorAll('.fa-trash-alt')[0];

      fireEvent.click(firstTrashBtn);

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_object: 'Button',
          ixn_type: 'deleteItem',
          ixn_label: `${myTrackingLabel} - Remove`,
          ixn_value: 'firstProductItemId',
        },
      });
    });

    it('track hide compare drawer', () => {
      const { trackEvent } = useTracking();
      const handleCompareNowFun = jest.fn();
      const handleRemoveItemFun = jest.fn();
      const myProductsArrayWithSingleItem = productsArray.slice(0, 1);
      const myTrackingLabel = 'test 16';

      const { container } = render(
        <CompareDrawer
          id="theCompareDrawer16"
          trackingLabel={myTrackingLabel}
          compareNowClick={handleCompareNowFun}
          onProductRemoved={handleRemoveItemFun}
          products={myProductsArrayWithSingleItem}
        />,
      );
      const firstTrashBtn = container.querySelectorAll('.fa-trash-alt')[0];

      fireEvent.click(firstTrashBtn);

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_object: 'Button',
          ixn_type: 'deleteItem',
          ixn_label: `${myTrackingLabel} - Remove`,
          ixn_value: 'firstProductItemId',
        },
      });

      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Hide',
          ixn_object: 'CompareDrawer',
          ixn_type: 'bottom',
          ixn_label: myTrackingLabel,
          ixn_value: '',
        },
      });
    });
  });
});
