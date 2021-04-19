import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
import {
  fireEvent, render, act,
} from '../../../testUtils';
import AccordionPanel from '../AccordionPanel.component';

let mockUseIsDesktopValue = true;
jest.mock('../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

jest.mock('../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => ''),
  isDesktop: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<AccordionPanel trackingLabel="test" title="Position to purchase" />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });

  it('renders correctly when open accordion', () => {
    const { container } = render(<AccordionPanel trackingLabel="test" show />);
    const accordion = container.querySelector('[role="tablist"]');
    expect(accordion).toHaveStyleRule('border', `${ctmTheme.borders.transparent}`);
  });

  it('renders correctly with arrow', () => {
    const { container } = render(<AccordionPanel trackingLabel="test" show title="Position to purchase">Accordion</AccordionPanel>);
    const accordionMain = container.querySelector('svg');
    expect(accordionMain).toHaveAttribute('viewBox');
  });

  it('click on accordion head', () => {
    jest.useFakeTimers();
    const { container } = render(<AccordionPanel trackingLabel="test" show />);
    const svg = container.querySelector('[role="img"]');
    const accordionHead = container.querySelector('[role="tab"]');
    const accordionBody = container.querySelector('[role="tabpanel"]');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(svg).toHaveAttribute('data-icon', 'chevron-down');
    expect(accordionBody).toHaveStyleRule('height', '0');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', '100%');
    expect(container.querySelector('.fa-flip-vertical')).toBeInTheDocument();
  });

  it('works on focus/when leaving focus', () => {
    const { container } = render(
      <AccordionPanel trackingLabel="test" title="Accordion title">
        <div><p>Accordion content</p></div>
      </AccordionPanel>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    fireEvent.keyDown(accordion, { key: 'Tab', code: 9 });
    accordionHead.focus();
    fireEvent.keyDown(accordionHead, { key: 'Enter', code: 13 });
    expect(accordion).toHaveStyleRule('border', `${ctmTheme.borders.focus}`);
    accordionHead.blur();
    expect(accordion).toHaveStyleRule('border', `${ctmTheme.borders.transparent}`);
  });

  it('check handleClickGroup function is called', () => {
    jest.useFakeTimers();
    const handleClickGroup = jest.fn();
    const { container } = render(<AccordionPanel trackingLabel="test" show handleClickGroup={handleClickGroup} />);
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordion).toHaveStyleRule('border', '1px solid transparent');
    expect(handleClickGroup).toBeCalled();
  });

  it('works on keydown', () => {
    jest.useFakeTimers();
    const { container } = render(
      <AccordionPanel trackingLabel="test" title="Accordion title">
        <div><p>Accordion content</p></div>
      </AccordionPanel>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    expect(accordionHead).toHaveStyleRule('font-size', `${ctmTheme.fontSize['3xl']}`);
    const accordionBody = container.querySelector('[role="tabpanel"]');
    fireEvent.keyDown(accordion, { key: 'Tab', keyCode: 9 });
    accordionHead.focus();
    fireEvent.keyDown(accordionHead, { key: 'Enter', keyCode: 13 });
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', '100%');
    fireEvent.keyDown(accordionHead, { key: 'Enter', keyCode: 13 });
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', '0');
  });

  it('check font-size on resize', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <AccordionPanel trackingLabel="test" title="Accordion title">
        <div><p>Accordion content</p></div>
      </AccordionPanel>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    expect(accordionHead).toHaveStyleRule('font-size', `${ctmTheme.fontSize.lg}`);
  });

  describe('interaction tracking', () => {
    it('tracks Expand and Contract interactions', () => {
      jest.useFakeTimers();
      const { trackEvent } = useTracking();
      const { container } = render(<AccordionPanel trackingLabel="test" />);
      const accordionHead = container.querySelector('[role="tab"]');
      fireEvent.click(accordionHead);
      act(() => {
        jest.runAllTimers();
      });
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Expand',
          ixn_label: 'test',
          ixn_object: 'Accordion',
          ixn_type: 'Accordion',
          ixn_value: 'test',
        },
      });
      fireEvent.click(accordionHead);
      act(() => {
        jest.runAllTimers();
      });
      expect(trackEvent).toHaveBeenCalledTimes(2);
      expect(trackEvent.mock.calls[1][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Contract',
          ixn_label: 'test',
          ixn_object: 'Accordion',
          ixn_type: 'Accordion',
          ixn_value: 'test',
        },
      });
    });
  });
});
