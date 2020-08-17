/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import Textarea, { getRemainingLimit, getRemainingCharsContent } from '../Textarea.component';

describe('getRemainingLimit()', () => {
  it('returns charLimit when no value given', () => {
    expect(getRemainingLimit(null, 200)).toEqual(200);
  });

  it('returns remaining limit when value provided', () => {
    expect(getRemainingLimit('test', 200)).toEqual(196);
  });
});

describe('getRemainingCharsContent()', () => {
  const RemainingCharsContentContainer = ({
  // eslint-disable-next-line react/prop-types
    maxChars, maxLength, id, textAreaRemainChars, label,
  }) => (
    <ManorProvider>
      {getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label)}
    </ManorProvider>
  );

  it('returns null if maxChars and maxLength is null', () => {
    expect(getRemainingCharsContent(null, null, 'test', 100, 'test label')).toBeNull();
  });

  it('returns content when maxChars is available', () => {
    const { container, getByText } = render(<RemainingCharsContentContainer maxChars={50} id="test" textAreaRemainChars={20} label="test label" />);
    const wrapper = container.firstChild;
    expect(wrapper.id).toEqual('test-maxlength-indicator');
    expect(wrapper).not.toHaveClass('max-chars-exceeded');
    expect(getByText('Remaining allowed characters for the test label field')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('returns content when maxLength is available', () => {
    const { container, getByText } = render(<RemainingCharsContentContainer maxLength={50} id="test" textAreaRemainChars={20} label="test label" />);
    const wrapper = container.firstChild;
    expect(wrapper.id).toEqual('test-maxlength-indicator');
    expect(wrapper).not.toHaveClass('max-chars-exceeded');
    expect(getByText('Remaining allowed characters for the test label field')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });

  it('returns correct content when limit exceeded', () => {
    const { container, getByText } = render(<RemainingCharsContentContainer maxChars={50} id="test" textAreaRemainChars={-1} label="test label" />);
    const wrapper = container.firstChild;
    expect(wrapper.id).toEqual('test-maxlength-indicator');
    expect(wrapper).toHaveClass('max-chars-exceeded');
    expect(getByText('Exceeded character limit for the test label field')).toBeInTheDocument();
    expect(getByText('-1')).toBeInTheDocument();
  });
});

describe('Textarea.component.js', () => {
  it('renders with id prop', () => {
    const { container } = render(<Textarea label="test" id="blah" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const props = {
      id: 'textarea-id',
      name: 'textarea-id',
      label: 'textarea-label',
      placeholder: 'textarea-placeholder',
      disabled: false,
      required: false,
      autofill: false,
      rows: '',
      wrap: 'soft',
      readonly: false,
      maxlength: '',
      maxchars: '',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('on input, set value func is called', () => {
    const getValueCb = jest.fn();
    const { container } = render(<Textarea label="test" id="input-id" handleChange={getValueCb} />);

    const textareaField = container.querySelector('textarea');
    fireEvent.change(textareaField, { target: { value: 'thing' } });

    expect(textareaField).toHaveValue('thing');
    expect(getValueCb).toBeCalled();
  });

  it('calls focus & blur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<Textarea label="test" id="input-id" handleFocus={handleFocus} handleBlur={handleBlur} />);
    const textareaField = container.querySelector('textarea');
    fireEvent.focus(textareaField);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(textareaField);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('applies invalid styling when validation message is supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      validationMessage: 'invalid',
      value: 'Hello World',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveStyle(`border: ${ctmTheme.borders.invalid}`);
  });

  it('renders with prefill', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      prefillValue: 'autofilled value test',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement.value).toBe('autofilled value test');
  });

  it('has a required attribute when the field is required', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      required: true,
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveAttribute('required');
  });

  it('it has a disabled attribute when specified', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      disabled: true,
      value: 'helloworld',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveAttribute('disabled');
  });

  it('id attribute populated correctly when supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      name: 'thisisatest',
      value: '',
      disabled: true,
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveAttribute('id', 'textarea-id');
  });

  it('names attribute populated correctly when supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      name: 'thisisatest',
      disabled: true,
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveAttribute('name', 'thisisatest');
  });

  it('has supplied value on load when specified', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'Hello World',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const theTextareaElement = container.querySelector('#textarea-id');
    expect(theTextareaElement.value).toBe('Hello World');
  });

  it('has supplied value on load when specified 1', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'Hello World',
      disabled: true,
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const theTextareaElement = container.querySelector('#textarea-id');
    expect(theTextareaElement.value).toBe('Hello World');
  });

  it('on maxlength provided, indicator is displayed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: '',
      maxLength: '7',
    };
    const { container } = render(<Textarea label="test" {...props} />);
    const theTextareaElement = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement.innerHTML).toContain('7');
    const theTextareaElement1 = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement1).toBeNull();
  });

  it('if default supplied text exceeds max length limit, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'helloworld',
      maxLength: '7',
      autofill: true,
    };
    const { container, getByText } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveStyleRule('border', ctmTheme.borders.invalid);
    expect(getByText('-3')).toBeInTheDocument();
  });

  it('on maxChars exceeded, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'hello',
      maxChars: '7',
    };
    const { getByText, container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(getByText('2')).toBeInTheDocument();
    fireEvent.change(textAreaElement, { target: { value: 'helloworld' } });
    expect(textAreaElement).toHaveStyleRule('border', ctmTheme.borders.invalid);
    expect(getByText('-3')).toBeInTheDocument();
  });

  it('if default supplied text exceeds maxChars limit, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'helloworld',
      maxChars: '7',
      autofill: true,
    };
    const { getByText, container } = render(<Textarea label="test" {...props} />);
    const textAreaElement = container.querySelector('textarea');
    expect(textAreaElement).toHaveStyleRule('border', ctmTheme.borders.invalid);
    expect(getByText('-3')).toBeInTheDocument();
  });

  it('render with prop tooltip', () => {
    const tooltip = {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    };
    const props = {
      id: 'textarea-id',
      value: 'helloworld',
      maxChars: '7',
      autofill: true,
      required: false,
    };
    const { container } = render(<Textarea label="test" {...props} tooltip={tooltip} />);
    const tooltipExist = container.querySelector(' div[role="tooltip"]');
    expect(tooltipExist).toBeInTheDocument();
  });
});
