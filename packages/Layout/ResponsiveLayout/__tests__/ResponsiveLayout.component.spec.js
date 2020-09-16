import React from 'react';
import { render } from '../../../../testUtils';
import ResponsiveLayout from '../ResponsiveLayout.component';

let mockBreakpointValue = 'xs';
jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

describe('ResponsiveLayout', () => {
  it('renders on mobile only devices', () => {
    const ui = (
      <ResponsiveLayout isMobile>
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'md';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on desktop only devices', () => {
    const ui = (
      <ResponsiveLayout isDesktop>
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xs';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that is at md breakpoint', () => {
    mockBreakpointValue = 'md';
    const ui = (
      <ResponsiveLayout is="md">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'lg';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on on devices that is at lg breakpoint', () => {
    const ui = (
      <ResponsiveLayout is="lg">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'md';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are from sm breakpoint', () => {
    const ui = (
      <ResponsiveLayout isFrom="sm">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xs';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are from lg breakpoint', () => {
    mockBreakpointValue = 'lg';
    const ui = (
      <ResponsiveLayout isFrom="lg">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'md';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are up to sm breakpoint', () => {
    mockBreakpointValue = 'sm';
    const ui = (
      <ResponsiveLayout upTo="sm">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'md';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('renders on devices that are up to lg breakpoint', () => {
    const ui = (
      <ResponsiveLayout upTo="lg">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xl';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });

  it('rrenders on devices that are between sm and lg breakpoint', () => {
    mockBreakpointValue = 'md';
    const ui = (
      <ResponsiveLayout isFrom="sm" upTo="lg">
        <div className="child-content">test</div>
      </ResponsiveLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xl';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });
});
