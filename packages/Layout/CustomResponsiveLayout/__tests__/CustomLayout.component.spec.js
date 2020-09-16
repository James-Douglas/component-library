import React from 'react';
import { render } from '../../../../testUtils';
import CustomResponsiveLayout from '../CustomResponsiveLayout.component';
import CustomBreakpointsProvider from '../CustomBreakpointsProvider.component';

const customBreakpoints = {
  extraSmall: 300,
  small: 600,
  medium: 900,
  large: 1200,
  extraLarge: 1600,
};

let mockBreakpointValue = 'extraSmall';
jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

describe('CustomResponsiveLayout', () => {
  it('renders on devices that is at extraSmall breakpoint', () => {
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout is="extraSmall">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'small';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that is at medium breakpoint', () => {
    mockBreakpointValue = 'medium';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout is="medium">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'small';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are from small breakpoint', () => {
    mockBreakpointValue = 'large';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout isFrom="small">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'extraSmall';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are from large breakpoint', () => {
    mockBreakpointValue = 'large';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout isFrom="large">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'extraSmall';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are up to small breakpoint', () => {
    mockBreakpointValue = 'small';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout upTo="small">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'extraLarge';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are up to large breakpoint', () => {
    mockBreakpointValue = 'medium';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout upTo="large">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'extraLarge';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are between small and large breakpoint', () => {
    mockBreakpointValue = 'medium';
    const ui = (
      <CustomBreakpointsProvider customBreakpoints={customBreakpoints}>
        <CustomResponsiveLayout isFrom="small" upTo="large">
          <div className="child-content">test</div>
        </CustomResponsiveLayout>
      </CustomBreakpointsProvider>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'extraLarge';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });
});
