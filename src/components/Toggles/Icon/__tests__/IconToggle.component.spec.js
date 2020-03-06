import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { render, fireEvent } from '../../../../testUtils';
import IconToggle, { getToggleContent } from '../IconToggle.component';

describe('getToggleContent()', () => {
  const IconToggleContentContainer = ({
    // eslint-disable-next-line react/prop-types
    id, icon, title, description,
  }) => (
    <>
      {getToggleContent(id, icon, title, description)}
    </>
  );

  it('renders with props', () => {
    const { getByText, container } = render(<IconToggleContentContainer id="testing" icon={faCheck} title="test" description="test description" />);
    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    expect(container.querySelector('.fa-check')).toBeInTheDocument();
  });
});

describe('IconToggle', () => {
  it('renders with props', () => {
    const { container } = render(<IconToggle id="test" value="test" title="test icon toggle" icon={faCheck} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls handleToggle on toggle when provided', () => {
    const handleChangeCb = jest.fn();
    const { container } = render(<IconToggle id="test" value="test" title="test icon toggle" icon={faCheck} handleToggle={handleChangeCb} />);
    const element = container.firstChild;
    fireEvent.click(element);
    expect(handleChangeCb).toHaveBeenCalled();
    expect(handleChangeCb.mock.calls[0][0]).toEqual('test');
  });

  it('calls focus and blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<IconToggle id="test" title="testing" icon={faCheck} value="test" handleFocus={handleFocus} handleBlur={handleBlur} />);
    const input = container.querySelector('input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});
