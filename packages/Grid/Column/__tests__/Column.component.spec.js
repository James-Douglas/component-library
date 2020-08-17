import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Column from '../Column.component';

describe('Column', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Column />);
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(
      <Column>
        <div className="child-content">test</div>
      </Column>,
    );
    const childContent = container.querySelector('.child-content');
    expect(childContent).toBeInTheDocument();
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Column className="test-class" />);
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('renders a column in auto mode ', () => {
    const { container } = render(<Column />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-grow', '1', {
      media: 'only screen and (min-width:0em)',
    });
  });

  it('renders an xs column with 6 cols width ', () => {
    const { container } = render(<Column xs={6} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:0em)',
    });
  });

  it('renders an sm column with 6 cols width ', () => {
    const { container } = render(<Column sm={6} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:48em)',
    });
  });

  it('renders an sm column with 6 cols width ', () => {
    const { container } = render(<Column md={6} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:64em)',
    });
  });

  it('renders an sm column with 6 cols width ', () => {
    const { container } = render(<Column lg={6} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:75em)',
    });
  });

  it('renders a column with cols at 6, lg at 2', () => {
    const { container } = render(<Column cols={6} lg={2} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:0em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:48em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:64em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '16.666666666666668%', {
      media: 'only screen and (min-width:75em)',
    });
  });

  it('renders a column with cols at 3, lg at 2, md at 1, with an offset of 1', () => {
    const { container } = render(<Column cols={3} md={1} lg={2} offset={1} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '25%', {
      media: 'only screen and (min-width:0em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '25%', {
      media: 'only screen and (min-width:48em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '8.333333333333334%', {
      media: 'only screen and (min-width:64em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '16.666666666666668%', {
      media: 'only screen and (min-width:75em)',
    });
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%', {
      media: 'only screen and (min-width:0em)',
    });
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%', {
      media: 'only screen and (min-width:48em)',
    });
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%', {
      media: 'only screen and (min-width:64em)',
    });
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%', {
      media: 'only screen and (min-width:75em)',
    });
  });

  it('hides a column at a desired breakpoint', () => {
    const { container } = render(<Column cols={6} lg={false} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:0em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:48em)',
    });
    expect(column).toHaveStyleRule('flex-basis', '50%', {
      media: 'only screen and (min-width:64em)',
    });
    expect(column).toHaveStyleRule('display', 'none', {
      media: 'only screen and (min-width:75em)',
    });
  });

  it('renders an offset', () => {
    const { container } = render(<Column xsOffset={1} />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%', {
      media: 'only screen and (min-width:0em)',
    });
  });

  it('renders a column with vertically aligned items', () => {
    const { container } = render(<Column valign="center" />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('align-items', 'center');
  });

  it('renders a column with horizontally aligned items', () => {
    const { container } = render(<Column halign="center" />);
    const column = container.firstChild;
    expect(column).toHaveStyleRule('justify-content', 'center');
  });
});
