import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Subtitle from '../Subtitle.component';

describe('Subtitle.component', () => {
  it('renders correctly with minimal props', () => {
    const { container } = render(<Subtitle />);
    expect(container).toMatchSnapshot();
  });

  it('renders with as a primary type by default', () => {
    const { getByText } = render(
      <Subtitle>
        Subtitle content
      </Subtitle>,
    );
    expect(getByText('Subtitle content')).toBeDefined();
    expect(getByText('Subtitle content')).toHaveStyleRule(
      'font-weight', '400',
      'line-height', '1.4',
      'font-size', '1.8rem',
    );
    expect(getByText('Subtitle content')).not.toHaveStyleRule(
      'font-size', '1.4rem',
    );
  });

  it('renders with as a primary type', () => {
    const { getByText } = render(
      <Subtitle variant="primary">
        Subtitle content
      </Subtitle>,
    );
    expect(getByText('Subtitle content')).toBeDefined();
    expect(getByText('Subtitle content')).toHaveStyleRule(
      'font-weight', '400',
      'line-height', '1.4',
      'font-size', '1.8rem',
    );
    expect(getByText('Subtitle content')).not.toHaveStyleRule(
      'font-size', '1.6rem',
    );
  });
  it('renders with as a secondary type', () => {
    const { getByText } = render(
      <Subtitle variant="secondary">
        Subtitle content
      </Subtitle>,
    );
    expect(getByText('Subtitle content')).toBeDefined();
    expect(getByText('Subtitle content')).toHaveStyleRule(
      'font-weight', '700',
      'font-size', '1.6rem',
      'line-height', '1.5',
    );
    expect(getByText('Subtitle content')).not.toHaveStyleRule(
      'font-size', '1.8rem',
    );
  });
});
