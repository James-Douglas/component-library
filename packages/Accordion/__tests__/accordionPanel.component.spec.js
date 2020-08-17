import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import 'jest-styled-components';
import {
  fireEvent, render, act,
} from '@testing-library/react';
import AccordionPanel from '../AccordionPanel.component';

let mockUseIsDesktopValue = true;
jest.mock('../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<ManorProvider><AccordionPanel title="Position to purchase" /></ManorProvider>);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
  it('renders correctly when open accordion', () => {
    const { container } = render(<ManorProvider><AccordionPanel show /></ManorProvider>);
    const accordion = container.querySelector('[role="tablist"]');
    expect(accordion).toHaveStyleRule('border', `${ctmTheme.borders.transparent}`);
  });
  it('renders correctly with arrow', () => {
    const { container } = render(<ManorProvider><AccordionPanel show title="Position to purchase">Accordion</AccordionPanel></ManorProvider>);
    const accordionMain = container.querySelector('svg');
    expect(accordionMain).toHaveAttribute('viewBox');
  });

  it('click on accordion head', () => {
    jest.useFakeTimers();
    const { container } = render(<ManorProvider><AccordionPanel show /></ManorProvider>);
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
      <ManorProvider>
        <AccordionPanel title="Accordion title">
          <div><p>Accordion content</p></div>
        </AccordionPanel>
      </ManorProvider>,
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
    const { container } = render(<ManorProvider><AccordionPanel show handleClickGroup={handleClickGroup} /></ManorProvider>);
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
      <ManorProvider>
        <AccordionPanel title="Accordion title">
          <div><p>Accordion content</p></div>
        </AccordionPanel>
      </ManorProvider>,
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
      <ManorProvider>
        <AccordionPanel title="Accordion title">
          <div><p>Accordion content</p></div>
        </AccordionPanel>
      </ManorProvider>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    expect(accordionHead).toHaveStyleRule('font-size', `${ctmTheme.fontSize.lg}`);
  });
});
