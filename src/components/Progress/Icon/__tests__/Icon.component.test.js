import React from 'react';
import { render } from '@testing-library/react';
import ProgressIcon from '../Icon.component';

describe('ProgressIcon', () => {
  it('renders with minimal properties', () => {
    const { container } = render(<ProgressIcon />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly without label', () => {
    const props = {
      index: 3,
      active: false,
      disabled: false,
    };
    const { container } = render(<ProgressIcon index={props.index} active={props.active} disabled={props.disabled} mobile={props.mobile} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly without active property', () => {
    const props = {
      index: 3,
      disabled: false,
    };
    const { container } = render(<ProgressIcon index={props.index} disabled={props.disabled} mobile={props.mobile} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly without disabled property', () => {
    const props = {
      index: 3,
      active: false,
    };
    const { container } = render(<ProgressIcon index={props.index} disabled={props.disabled} mobile={props.mobile} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('goes to default number in properties when index is wrong type', () => {
    const props = {
      index: '3',
    };
    const { container } = render(<ProgressIcon index={props.index} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly on mobile', () => {
    const props = {
      index: 3,
      active: false,
      disabled: false,
    };
    const { container } = render(<ProgressIcon index={props.index} disabled={props.disabled} mobile />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly on Desktop', () => {
    const props = {
      index: 3,
      active: false,
      disabled: false,
    };
    const { container } = render(<ProgressIcon index={props.index} disabled={props.disabled} mobile={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
