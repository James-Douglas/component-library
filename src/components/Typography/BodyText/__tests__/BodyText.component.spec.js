import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import BodyText from '../BodyText.component';

describe('BodyText.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<BodyText />);
    expect(container).toMatchSnapshot();
  });

  it('renders with as a primary type by default', () => {
    const { getByText } = render(
      <BodyText>
        some content
      </BodyText>,
    );
    expect(getByText('some content')).toBeDefined();
    expect(getByText('some content')).toHaveStyleRule(
      'line-height', '1.4',
      'font-size', '1.6rem',
      'margin', '0 0 1.2rem',
    );
    expect(getByText('some content')).not.toHaveStyleRule(
      'font-size', '1.4rem',
    );
  });

  it('renders with as a primary type', () => {
    const { getByText } = render(
      <BodyText variant="primary">
        some content
      </BodyText>,
    );
    expect(getByText('some content')).toBeDefined();
    expect(getByText('some content')).toHaveStyleRule(
      'line-height', '1.4',
      'font-size', '1.6rem',
      'margin', '0 0 1.2rem',
    );
    expect(getByText('some content')).not.toHaveStyleRule(
      'font-size', '1.4rem',
    );
  });
  it('renders with as a secondary type', () => {
    const { getByText } = render(
      <BodyText variant="secondary">
        some content
      </BodyText>,
    );
    expect(getByText('some content')).toBeDefined();
    expect(getByText('some content')).toHaveStyleRule(
      'line-height', '1.4',
      'font-size', '1.4rem',
      'margin', '0 0 1.2rem',
    );
    expect(getByText('some content')).not.toHaveStyleRule(
      'font-size', '1.6rem',
    );
  });
});
