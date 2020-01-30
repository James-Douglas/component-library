import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import screens from '../../../../../config/screens';
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
    expect(container).toMatchSnapshot();
    expect(childContent).toBeInTheDocument();
  });

  it('adds default styles to col if no props are passed', () => {
    const { container } = render(<Column />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toBeDefined();
    expect(column).toHaveStyleRule('display', 'flex');
    expect(column).toHaveStyleRule('flex-basis', '0%');
    expect(column).toHaveStyleRule('max-width', '100%');
  });

  it('defines col size when supplied', () => {
    const { container } = render(<Column cols={5} />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toBeDefined();
    expect(column).toHaveStyleRule('flex', '41.66666666666667%');
  });

  it('defines an offset when supplied', () => {
    const { container } = render(<Column offset={1} />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toBeDefined();
    expect(column).toHaveStyleRule('margin-left', '8.333333333333334%');
  });

  it('resizes on breakpoint', () => {
    const { container } = render(<Column sm={8} md={7} lg={6} xl={5} xxl={4} />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();

    expect(column).toHaveStyleRule('flex', '66.66666666666667%', {
      media: `(min-width:${screens.xs})`,
    });
    expect(column).toHaveStyleRule('flex', '58.333333333333336%', {
      media: `(min-width:${screens.sm})`,
    });
    expect(column).toHaveStyleRule('flex', '50%', {
      media: `(min-width:${screens.md})`,
    });
    expect(column).toHaveStyleRule('flex', '41.66666666666667%', {
      media: `(min-width:${screens.lg})`,
    });
    expect(column).toHaveStyleRule('flex', '33.333333333333336%', {
      media: `(min-width:${screens.xl})`,
    });
  });

  it('resizes offsets on breakpoint', () => {
    const { container } = render(<Column offsetSm={8} offsetMd={7} offsetLg={6} offsetXl={5} offsetXxl={4} />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('margin-left', '66.66666666666667%', {
      media: `(min-width:${screens.xs})`,
    });
    expect(column).toHaveStyleRule('margin-left', '58.333333333333336%', {
      media: `(min-width:${screens.sm})`,
    });
    expect(column).toHaveStyleRule('margin-left', '50%', {
      media: `(min-width:${screens.md})`,
    });
    expect(column).toHaveStyleRule('margin-left', '41.66666666666667%', {
      media: `(min-width:${screens.lg})`,
    });
    expect(column).toHaveStyleRule('margin-left', '33.333333333333336%', {
      media: `(min-width:${screens.xl})`,
    });
  });

  it('stacks at breakpoint sm', () => {
    const { container } = render(<Column cols="sm" />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('flex-basis', '0%', {
      media: `(min-width:${screens.sm})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.sm})`,
    });
  });

  it('stacks at breakpoint md', () => {
    const { container } = render(<Column cols="md" />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('flex-basis', '0%', {
      media: `(min-width:${screens.md})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.md})`,
    });
  });

  it('stacks at breakpoint lg', () => {
    const { container } = render(<Column cols="lg" />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('flex-basis', '0%', {
      media: `(min-width:${screens.lg})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.lg})`,
    });
  });

  it('stacks at breakpoint xl', () => {
    const { container } = render(<Column cols="xl" />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('flex-basis', '0%', {
      media: `(min-width:${screens.xl})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.xl})`,
    });
  });

  it('stacks at breakpoint xxl', () => {
    const { container } = render(<Column cols="xxl" />);

    const column = container.getElementsByTagName('div')[0];

    expect(container).toMatchSnapshot();
    expect(column).toHaveStyleRule('flex-basis', '0%', {
      media: `(min-width:${screens.xxl})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.xxl})`,
    });
  });

  it('allows additional classes to be passed through', () => {
    const { container } = render(<Column className="test-class" />);

    expect(container).toMatchSnapshot();
    const test = container.getElementsByClassName('test-class');
    expect(test).toBeDefined();
  });

  it('allows column be auto ', () => {
    const { container } = render(<Column sm="auto" md="auto" lg="auto" xl="auto" xxl="auto" />);
    const column = container.getElementsByTagName('div')[0];
    expect(column).toHaveStyleRule('flex', '0 0 auto', {
      media: `(min-width:${screens.xs})`,
    });
    expect(column).toHaveStyleRule('width', 'auto', {
      media: `(min-width:${screens.sm})`,
    });
    expect(column).toHaveStyleRule('max-width', '100%', {
      media: `(min-width:${screens.md})`,
    });
    expect(column).toHaveStyleRule('flex', '0 0 auto', {
      media: `(min-width:${screens.lg})`,
    });
    expect(column).toHaveStyleRule('width', 'auto', {
      media: `(min-width:${screens.xl})`,
    });
  });
});
