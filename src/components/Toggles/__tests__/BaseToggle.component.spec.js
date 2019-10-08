import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseToggle, { getInlineStyles } from '../BaseToggle';

describe('getInlineStyles()', () => {
  it('returns empty object when type is not rectangle', () => {
    expect(getInlineStyles('square', {})).toEqual({});
  });
  it('returns inline styles when type is rectangle without col', () => {
    const rectOptions = {
      height: 4,
    };

    const result = getInlineStyles('rectangle', rectOptions);
    expect(result.height).toEqual('4rem');
  });
  it('returns inline styles when type is rectangle with col', () => {
    const rectOptions = {
      height: 4,
      col: 2,
    };

    const result = getInlineStyles('rectangle', rectOptions);
    expect(result.height).toEqual('4rem');
    expect(result.width).toEqual('50%');
    expect(result.flexBasis).toEqual('50%');
  });
});

describe('BaseToggle', () => {
  it('renders with minimal props', () => {
    const { container } = render(<BaseToggle type="square" id="test-square" />);
    expect(container).toMatchSnapshot();
  });
  it('sets checked when autofill', () => {
    const { container } = render(<BaseToggle type="square" id="test-autofill" autofill />);
    expect(container.querySelector('.toggle-input')).toHaveAttribute('checked');
  });
  it('sets checked when selectedId equals id', () => {
    const { container } = render(<BaseToggle type="square" id="test-selected-id" selectedId="test-selected-id" autofill />);
    expect(container.querySelector('.toggle-input')).toHaveAttribute('checked');
  });
  it('calls handleChange when toggled', () => {
    const handleChangeCb = jest.fn();
    const { container } = render(<BaseToggle type="square" id="test-square" handleChange={handleChangeCb} />);
    const element = container.querySelector('.toggle');
    fireEvent.click(element);
    expect(handleChangeCb).toHaveBeenCalled();
    expect(handleChangeCb.mock.calls[0][0]).toEqual('test-square');
  });
});
