import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input, { renderClearIcon, renderAffix, renderOptionalElement } from '../Input.component';

describe('renderClearIcon()', () => {
  // eslint-disable-next-line react/prop-types
  const ClearIconContainer = ({ value, clearInput, isAutofill, label }) => (
    <>
      {renderClearIcon(value, clearInput, isAutofill, label)}
    </>
  );

  it('does not render an clearIcon if the value.length is over 0', () => {
    const { container } = render(<ClearIconContainer value="" />);
    
    expect(container).toBeEmpty();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders a clearIcon when the value.length is > 0', () => {
    const { container } = render(<ClearIconContainer value="input text" label='test input'/>);

    const svg = container.querySelector('svg');

    expect(svg).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });

});
/* affixType, affixContent, bordered, isAutofill, disabled */
describe('renderAffix()', () => {
  // eslint-disable-next-line react/prop-types
  const AffixContainer = ({ affixType, affixContent, bordered, isAutofill, disabled }) => (
    <>
      {renderAffix(affixType, affixContent, bordered, isAutofill, disabled)}
    </>
  );

  it('does not render a prefix or suffix if its not supplied', () => {
    const { container } = render(<AffixContainer />);
    
    expect(container).toBeEmpty();
    expect(container.innerHTML).toMatchSnapshot();
  });

  
  it('renders a prefix when supplied', () => {
    const { container } = render(<AffixContainer affixType={'prefix'} affixContent={'?'}/>);
    
    const prefix = container.querySelector('.prefix');
    const suffix = container.querySelector('.suffix');

    expect(suffix).toBe(null);
    expect(prefix).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders a suffix when supplied', () => {
    const { container } = render(<AffixContainer affixType={'suffix'} affixContent={'?'}/>);
    
    const prefix = container.querySelector('.prefix');
    const suffix = container.querySelector('.suffix');

    expect(prefix).toBe(null);
    expect(suffix).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders a suffix when supplied with additional styling for autofill and border', () => {
    const { container } = render(<AffixContainer affixType={'prefix'} affixContent={'?'} border={false} isAutofill={true} disabled={false}/>);
    
    const prefix = container.querySelector('.prefix');
    const suffix = container.querySelector('.suffix');
    const border = container.querySelector('.prefix-no-border');
    const prefill = container.querySelector('.manor-prefilled');

    expect(suffix).toBe(null);
    expect(prefix).toBeInTheDocument();
    expect(border).toBeInTheDocument();
    expect(prefill).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });

});

xdescribe('renderOptionalElement()', () => {

});

/* 
  id, type, placeholder, prefillValue, autofill, 
  required, disabled, bordered, invalid, prefix, 
  suffix, label, tooltip, 
*/
xdescribe('Input.component', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Input id="test-id" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const mockTestClick = jest.fn();
    const { container } = render(
      <Input
        id="test-id"
        icon="check"
        disabled={false}
        invertColour
        handleChange={mockTestClick}
      >
        <p>child content</p>
      </Input>,
    );

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');
    const labelStyle = container.querySelector('.manor-checkbox');

    fireEvent.click(label, { button: 0 });

    expect(mockTestClick).toHaveBeenCalled();
    expect(labelStyle.classList).toContain('inverted');
    expect(checkbox.getAttribute('disabled')).toBe(null);
    expect(container.querySelector('#child-content')).toBeDefined();
    expect(container.getElementsByTagName('svg')).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('checks on click', () => {
    const { container } = render(<Input id="test-id" icon="check" disabled={false} invertColour />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(true);
  });

  it('click is disabled when disabled prop is supplied', () => {
    const { container } = render(<Input id="test-id" icon="check" disabled />);

    const checkbox = container.querySelector('#test-id');
    const label = container.querySelector('label');

    fireEvent.click(label, { button: 0 });

    expect(checkbox.checked).toBe(false);
  });
});
