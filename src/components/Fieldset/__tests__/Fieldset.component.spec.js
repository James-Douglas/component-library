import React from 'react';
import { render } from '@testing-library/react';

import Fieldset, {
  hasTooltipContent, shouldEnableLabelTooltip, getScreenReaderLabel, renderTooltip,
} from '../Fieldset.component';

describe('hasTooltipContent()', () => {
  it('returns false when no content exists', () => {
    expect(hasTooltipContent(null, null)).toEqual(false);
  });
  it('returns true when title exists', () => {
    expect(hasTooltipContent('test', null)).toEqual(true);
  });
  it('returns true when body exists', () => {
    expect(hasTooltipContent(null, 'testing')).toEqual(true);
  });
});

describe('shouldEnableLabelTooltip()', () => {
  it('returns false when desktop and not forceFullWidth', () => {
    expect(shouldEnableLabelTooltip(false, true)).toEqual(false);
  });

  it('returns true when forceFullWidth is true', () => {
    expect(shouldEnableLabelTooltip(true, true)).toEqual(true);
  });

  it('returns true when !desktop', () => {
    expect(shouldEnableLabelTooltip(false, false)).toEqual(true);
  });
});

describe('getScreenReaderLabel()', () => {
  it('returns screenReaderLabel when defined', () => {
    expect(getScreenReaderLabel('test', 'something else')).toEqual('test');
  });
  it('returns formatted label when label exists', () => {
    expect(getScreenReaderLabel(null, 'test')).toEqual('Click here for additional information about test');
  });
  it('returns basic label when no screenreader and label exist', () => {
    expect(getScreenReaderLabel(null, null)).toEqual('tooltip');
  });
});

describe('renderTooltip()', () => {
  const TooltipContainer = ({
    // eslint-disable-next-line react/prop-types
    enableLabelTooltip, breakpoint, hasTooltip, title, body, boundingElementSelector, srLabel,
  }) => (
    <>
      {renderTooltip(enableLabelTooltip, breakpoint, hasTooltip, title, body, boundingElementSelector, srLabel)}
    </>
  );

  it('returns null when enableLabelTooltip is true', () => {
    const { container } = render(<TooltipContainer enableLabelTooltip hasTooltip />);
    expect(container).toBeEmpty();
  });

  it('returns null when hasTooltip is false', () => {
    const { container } = render(<TooltipContainer hasTooltip={false} />);
    expect(container).toBeEmpty();
  });

  it('returns tooltip when applicable', () => {
    const { getByText, container } = render(<TooltipContainer enableLabelTooltip={false} breakpoint="xl" hasTooltip title="test tooltip" body="this is a test" srLabel="screen reader label" />);
    expect(getByText('screen reader label')).toBeInTheDocument();
    expect(container.querySelector('.tooltip-container')).toBeInTheDocument();
  });
});


let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

const tooltip = {
  title: 'test tooltip',
};

describe('Fieldset', () => {
  beforeEach(() => {
    mockUseIsDesktopValue = true;
  });

  it('renders without props', () => {
    const { container } = render(<Fieldset />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with label', () => {
    const { getByText } = render(<Fieldset label="test label" />);
    expect(getByText('test label')).toBeInTheDocument();
  });

  it('renders with tooltip on desktop', () => {
    const { container } = render(<Fieldset tooltip={tooltip} />);
    const tooltipContainer = container.querySelector('.tooltip-container');
    expect(tooltipContainer).toBeInTheDocument();
  });

  it('renders with tooltip on mobile', () => {
    mockUseIsDesktopValue = false;

    const { container } = render(<Fieldset tooltip={tooltip} />);
    const tooltipContainer = container.querySelector('.tooltip-container');
    expect(tooltipContainer).not.toBeInTheDocument();

    const tooltipWrapper = container.querySelector('.tooltip-wrapper');
    expect(tooltipWrapper).toBeInTheDocument();
  });

  it('always renders tooltip in label when forceFullWidth is true', () => {
    const { container } = render(<Fieldset tooltip={tooltip} forceFullWidth />);
    const tooltipContainer = container.querySelector('.tooltip-container');
    expect(tooltipContainer).not.toBeInTheDocument();

    const tooltipWrapper = container.querySelector('.tooltip-wrapper');
    expect(tooltipWrapper).toBeInTheDocument();
  });
});
