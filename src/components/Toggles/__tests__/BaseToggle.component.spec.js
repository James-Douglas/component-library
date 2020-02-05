import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import 'jest-styled-components';
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
    const { container } = render(<BaseToggle type="square" id="test-square" value="test" handleToggle={() => {}} />);
    expect(container).toMatchSnapshot();
  });
  it('sets checked when selectedId equals id', () => {
    const { container } = render(<BaseToggle type="square" id="test-selected-id" value="test" selectedValue="test" autofill handleToggle={() => {}} />);
    expect(container.querySelector('input')).toHaveAttribute('checked');
  });
  it('calls onToggle when toggled', () => {
    const onToggleCb = jest.fn();
    const { container } = render(<BaseToggle type="square" id="test-square" value="testt" handleToggle={onToggleCb} />);
    const element = container.firstChild;
    fireEvent.click(element);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual('testt');
  });
  it('calls focus and blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<BaseToggle type="square" handleToggle={() => {}} id="test" value="testt" handleFocus={handleFocus} handleBlur={handleBlur} />);
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});
