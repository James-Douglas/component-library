import React from 'react';
import { render } from '../../../../testUtils';
import DesktopLayout from '../DesktopLayout.component';

let mockBreakpointValue = 'md';
jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

describe('DesktopLayout', () => {
  it('allows additional classes to be passed through', () => {
    const { container } = render(
      <DesktopLayout className="test-class">
        <div className="child-content">test</div>
      </DesktopLayout>,
    );
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('renders on desktop only devices', () => {
    const ui = (
      <DesktopLayout>
        <div className="child-content">test</div>
      </DesktopLayout>
    );
    let { container } = render(ui);
    let childContent = container.querySelector('.child-content');

    expect(childContent).toBeInTheDocument();

    mockBreakpointValue = 'xs';
    ({ container } = render(ui));
    childContent = container.querySelector('.child-content');

    expect(childContent).not.toBeInTheDocument();
  });
});
