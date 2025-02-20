import React from 'react';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Tabs, { renderChildren } from '../Tabs.component';
import TabButton from '../TabButton.component';
import TabPanel from '../TabPanel.component';
import TabsContext from '../TabsContext';

/* renderChildren
–––––––––––––––––––––––––––––––––––––––––––––––––– */
describe('renderChildren', () => {
  // eslint-disable-next-line react/prop-types
  const RenderChildrenContainer = ({ children }) => (
    <>
      {renderChildren(children)}
    </>
  );

  it('renders a wrapper div by default', () => {
    const { container } = render(
      <>
        <RenderChildrenContainer />
      </>,
    );

    const wrap = container.querySelector('.tab-button-wrap');
    expect(wrap).toBeInTheDocument();
  });

  it('renders button components into the wrapper, panel components outside of the wrapper', () => {
    const { container } = render(
      <TabsContext.Provider value="test">
        <RenderChildrenContainer>
          <TabButton name="test" label="test btn" />
          <TabPanel name="test" label="test panel" />
        </RenderChildrenContainer>
      </TabsContext.Provider>,
    );
    const btnWrap = container.querySelector('.tab-button-wrap');

    expect(btnWrap.children).toHaveLength(1); // tab button
    expect(container.children).toHaveLength(2); // tab panel and btn wrap
  });
});

/* Tabs
–––––––––––––––––––––––––––––––––––––––––––––––––– */
describe('Tabs', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(
      <Tabs startingTab="refine-results-1">
        <TabButton name="refine-results-1" label="Refine Results" />
        <TabButton name="edit-details-1" label="Edit Details" />
        <TabPanel name="refine-results-1">
          <p>View Type</p>
        </TabPanel>
        <TabPanel name="edit-details-1">
          <p>Tab two content</p>
          <p>stuff</p>
        </TabPanel>
      </Tabs>,
    );

    const tabBtnWrap = container.querySelectorAll('.tab-button-wrap');

    expect(tabBtnWrap.length).toBe(1);
    expect(container).toMatchSnapshot();
  });

  it('changes tab on click', () => {
    const { container } = render(
      <Tabs startingTab="refine-results-1">
        <TabButton name="refine-results-1" label="Refine Results" />
        <TabButton name="edit-details-1" label="Edit Details" />
        <TabPanel name="refine-results-1">
          <p>View Type</p>
        </TabPanel>
        <TabPanel name="edit-details-1">
          <p>Tab two content</p>
          <p>stuff</p>
        </TabPanel>
      </Tabs>,
    );

    const tabBtns = container.querySelectorAll('.tab-button');

    fireEvent.click(tabBtns[1], { button: 0 });

    expect(tabBtns[0]).not.toHaveClass('active');
    expect(tabBtns[1]).toHaveClass('active');
  });

  it('accepts a clickHandler on the buttons', () => {
    const mockTestClick = jest.fn();

    const { container } = render(
      <Tabs startingTab="refine-results-1">
        <TabButton name="refine-results-1" handleClick={mockTestClick} label="Refine Results" />
        <TabButton name="edit-details-1" label="Edit Details" />
        <TabPanel name="refine-results-1">
          <p>View Type</p>
        </TabPanel>
        <TabPanel name="edit-details-1">
          <p>Tab two content</p>
          <p>stuff</p>
        </TabPanel>
      </Tabs>,
    );

    const tabBtn = container.querySelector('.tab-button');
    fireEvent.click(tabBtn, { button: 0 });
    expect(mockTestClick).toHaveBeenCalled();
  });

  it('renders a border', () => {
    const { container } = render(
      <Tabs startingTab="refine-results-1" bordered>
        <TabButton name="refine-results-1" label="Refine Results" />
        <TabButton name="edit-details-1" label="Edit Details" />
        <TabPanel name="refine-results-1">
          <p>View Type</p>
        </TabPanel>
        <TabPanel name="edit-details-1">
          <p>Tab two content</p>
          <p>stuff</p>
        </TabPanel>
      </Tabs>,
    );

    const tabsContainer = container.querySelector('.tabs-container');

    expect(tabsContainer).toHaveStyle(`border: 1px solid ${ctmTheme.colors.grey300}`); // greyLight from theme.js
    expect(container).toMatchSnapshot();
  });

  it('renders additional classNames', () => {
    const { container } = render(
      <Tabs startingTab="refine-results-1" className="test classes">
        <TabButton name="refine-results-1" label="Refine Results" />
        <TabButton name="edit-details-1" label="Edit Details" />
        <TabPanel name="refine-results-1">
          <p>View Type</p>
        </TabPanel>
        <TabPanel name="edit-details-1">
          <p>Tab two content</p>
          <p>stuff</p>
        </TabPanel>
      </Tabs>,
    );

    const tabsContainer = container.querySelector('.tabs-container');

    expect(tabsContainer).toHaveClass('test classes');
    expect(container).toMatchSnapshot();
  });
});

/* TabButton
–––––––––––––––––––––––––––––––––––––––––––––––––– */
describe('TabButton', () => {
  it('renders a TabButton', () => {
    const { container, getByText } = render(
      <TabsContext.Provider value="test">
        <TabButton name="test" label="Refine Results" />
      </TabsContext.Provider>,
    );

    const tabBtn = container.querySelector('.tab-button');

    expect(tabBtn).toBeInTheDocument();
    expect(getByText('Refine Results')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders multiple TabButtons', () => {
    const { container, getByText } = render(
      <TabsContext.Provider value="test">
        <TabButton name="test1" label="Refine Results1" />
        <TabButton name="test2" label="Refine Results2" />
      </TabsContext.Provider>,
    );

    const tabBtns = Array.from(container.querySelectorAll('.tab-button'));

    expect(tabBtns).toHaveLength(2);
    expect(getByText('Refine Results1')).toBeInTheDocument();
    expect(getByText('Refine Results2')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  describe('interaction tracking', () => {
    it('tracks click events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <TabsContext.Provider value={{ changeTab: () => {} }}>
          <TabButton name="test" label="Refine Results" />
        </TabsContext.Provider>,
      );
      const tabBtn = container.querySelector('.tab-button');
      fireEvent.click(tabBtn);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_label: 'Refine Results',
          ixn_object: 'Tab',
          ixn_type: 'Tab',
          ixn_value: '',
        },
      });
    });
  });
});

/* TabPanel
–––––––––––––––––––––––––––––––––––––––––––––––––– */
describe('TabPanel', () => {
  it('renders a TabPanel', () => {
    const { container, getByText } = render(
      <TabsContext.Provider value="test">
        <TabPanel name="tab-panel-test"><p>View Type</p></TabPanel>
      </TabsContext.Provider>,
    );

    const tabPanel = container.querySelector('.tab-panel');
    expect(tabPanel).toBeInTheDocument();
    expect(getByText('View Type')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders multiple TabPanels', () => {
    const { container, getByText } = render(
      <TabsContext.Provider value="test">
        <TabPanel name="tab-panel-test1"><p>test1</p></TabPanel>
        <TabPanel name="tab-panel-test2"><p>test2</p></TabPanel>
        <TabPanel name="tab-panel-test3"><p>test3</p></TabPanel>
        <TabPanel name="tab-panel-test4"><p>test4</p></TabPanel>
      </TabsContext.Provider>,
    );

    const tabPanels = Array.from(container.querySelectorAll('.tab-panel'));

    expect(tabPanels).toHaveLength(4);
    expect(getByText('test1')).toBeInTheDocument();
    expect(getByText('test2')).toBeInTheDocument();
    expect(getByText('test3')).toBeInTheDocument();
    expect(getByText('test4')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders additional classNames', () => {
    const { container } = render(
      <TabsContext.Provider value="test">
        <TabPanel name="tab-panel-test1" className="test classes"><p>test1</p></TabPanel>
        <TabPanel name="tab-panel-test2" className="another-class"><p>test2</p></TabPanel>
      </TabsContext.Provider>,
    );

    const tabPanels = Array.from(container.querySelectorAll('.tab-panel'));

    expect(tabPanels[0]).toHaveClass('test classes');
    expect(tabPanels[1]).toHaveClass('another-class');
    expect(container).toMatchSnapshot();
  });
});
