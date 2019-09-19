import React from 'react';
import { render } from '@testing-library/react';

import Textarea from '../Textarea.component';

describe('Textarea.component.js', () => {
  it('renders with id prop', () => {
    const { container } = render(<Textarea id="blah" />);
    expect(container.innerHTML).toMatchSnapshot();
  });


  it('renders with props', () => {
    const props = {
      id: 'textarea-id',
      name: 'textarea-id',
      label: 'textarea-label',
      placeholder: 'textarea-placeholder',
      bordered: true,
      disabled: false,
      required: false,
      invalid: false,
      autofill: false,
      rows: '',
      wrap: '',
      readonly: false,
      maxlength: '',
      maxchars: '',
    };
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  /*

  ### This currently fails due to the code for testing the call back function is not right ###

it('on input, set value func is called', () => {
  const { container, component } = render(<Textarea id='input-id' />);

  const getValueCb = jest.fn();
  component.$on('setValue', getValueCb);

  const textareaField = container.querySelector('textarea');
  textareaField.value = 'thing';
  textareaField.dispatchEvent(new Event('input'));

  return new Promise(resolve => setImmediate(resolve)).then(() => {
    jest.runAllTimers();
    expect(getValueCb).toBeCalled();
  });
});
  */


  /* *******************************************************************************************
        test white background support
    ******************************************************************************************** */
  it('renders a textarea with a class for the border styles, an associated label', () => {
    const props = {
      id: 'textarea-id',
      name: 'textarea-name',
      label: 'this is a test',
      bordered: true,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-border').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  it('renders a label for the textarea with a class associated with the border styles when the field is disabled', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      bordered: true,
      disabled: true,

    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theLabel = container.querySelector('.manor-bordered-field-disabled-label');
    expect(theLabel.innerHTML).toContain('this is a test');

    const theTextareaElementId = container.querySelector('.manor-textarea-default:disabled').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  /* *******************************************************************************************
        test grey background support
    ******************************************************************************************** */
  it('renders a textarea without a class for the border styles when specified (used for grey backgrounds)', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      bordered: false,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId1 = container.querySelector('.manor-textarea-border');
    expect(theTextareaElementId1).toBeNull();

    const theTextareaElementId2 = container.querySelector('.manor-textarea-default').id;
    expect(theTextareaElementId2).toContain('textarea-id');
  });


  it('renders a label for the textarea without a class associated with the border styles when specified and the field is disabled (used for grey backgrounds)', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      bordered: false,
      disabled: true,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theLabel1 = container.querySelector('.manor-bordered-field-disabled-label');
    expect(theLabel1).toBeNull();

    const theLabel2 = container.querySelector('.manor-textarea-label');
    expect(theLabel2.innerHTML).toContain('this is a test');

    const theTextareaElementId = container.querySelector('.manor-textarea-default:disabled').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  /* *******************************************************************************************
        test specified attributes
    ******************************************************************************************** */
  it('has an invalid class for the textarea when it is indicated to do so', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      invalid: true,
      value: 'Hello World',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-default.invalid').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  it('has a manor-prefilled class for the textarea when it is indicated to do so', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      autofill: true,
      value: 'Hello World',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-default.manor-prefilled').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  it('has a required attribute when the field is required', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      required: true,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-default:required').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  it('it has a disable attribute when specified', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      disabled: true,
      value: 'helloworld',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-textarea-default:disabled');
    expect(theTextareaElement.value).toBe('helloworld');
  });


  it('id attribute populated correctly when supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      name: 'thisisatest',
      value: '',
      disabled: true,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('#textarea-id').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  it('names attribute populated correctly when supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      name: 'thisisatest',
      disabled: true,
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-default[name="thisisatest"]').id;
    expect(theTextareaElementId).toContain('textarea-id');
  });


  /* *******************************************************************************************
        test additional attributes
    ******************************************************************************************** */

  /*

  ####  This currently fails due to ignoring props that are not explicitly specified - eg title this test needs to be added after that feature is added to the code #####

  it('has additional attributes when supplied', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'Hello World',
      'data-ng-blah': 'a value',
      'aria-autocomplete': false,
      hidden: false,
      title: 'wassup',
      autofocus: false,
      tabindex: '1',
      accesskey: 'k',
    };

    / * eslint-disable-next-line react/jsx-props-no-spreading * /
    const { container } = render(<Textarea {...props} />);

    const theTextareaElementId = container.querySelector('.manor-textarea-default[title="wassup"]').id;
    expect(theTextareaElementId).toContain('textarea-id');

    expect(container.innerHTML).toMatchSnapshot();
  });
  */

  /* *******************************************************************************************
        test supplied value
    ******************************************************************************************** */
  it('has supplied value on load when specified', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'Hello World',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

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

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('#textarea-id');
    expect(theTextareaElement.value).toBe('Hello World');
  });


  /* *******************************************************************************************
       test on change event functionality
    ******************************************************************************************** */

  /*
  it('on change, set value func is called', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'hello',
    };

    const { container, component } = render(<Textarea {...props} />);

    const getValueCb = jest.fn();

    component.$on('setValue', getValueCb);

    const textareaField = container.querySelector('textarea');
    textareaField.value = 'helloworld';
    textareaField.dispatchEvent(new Event('input'));

    return new Promise(resolve => setImmediate(resolve)).then(() => {
      jest.runAllTimers();
      expect(getValueCb).toBeCalled();
    });
  });


  it('on change, set value func is called, error css class is not removed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      invalid: true,
      value: 'hello',
    };

    const { container, component } = render(<Textarea {...props} />);

    const theTextareaElementId1 = container.querySelector('.manor-textarea-default.invalid').id;
    expect(theTextareaElementId1).toContain('textarea-id');

    const getValueCb = jest.fn();

    component.$on('setValue', getValueCb);

    const textareaField = container.querySelector('textarea');
    textareaField.value = 'helloworld';
    textareaField.dispatchEvent(new Event('input'));

    return new Promise(resolve => setImmediate(resolve)).then(() => {
      jest.runAllTimers();
      expect(getValueCb).toBeCalled();

      const theTextareaElement2 = container.querySelector('.manor-textarea-default.invalid');
      expect(theTextareaElement2.value).toBe('helloworld');
    });
  });


  it('on change, set value func is called, manor-prefilled css class removed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      autofill: true,
      value: 'hello',
    };

    const { container, component } = render(<Textarea {...props} />);

    const theTextareaElementId1 = container.querySelector('.manor-textarea-default.manor-prefilled').id;
    expect(theTextareaElementId1).toContain('textarea-id');

    const getValueCb = jest.fn();

    component.$on('setValue', getValueCb);

    const textareaField = container.querySelector('textarea');
    textareaField.value = 'helloworld';
    textareaField.dispatchEvent(new Event('input'));

    return new Promise(resolve => setImmediate(resolve)).then(() => {
      jest.runAllTimers();
      expect(getValueCb).toBeCalled();

      const theTextareaElement2 = container.querySelector('.manor-textarea-default.manor-prefilled');
      expect(theTextareaElement2).toBeNull();
    });
  });
*/

  /* *******************************************************************************************
       test on maxChars / maxLength functionality
    ******************************************************************************************** */

  it('on maxlength provided, indicator is displayed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: '',
      maxLength: '7',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement.innerHTML).toContain('7');

    const theTextareaElement1 = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement1).toBeNull();
  });

  /*
  it('on maxLength exceeded, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'hello',
      maxLength: '7',
    };

    const { container, component } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement.innerHTML).toContain('2');

    const theTextareaElement1 = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement1).toBeNull();

    const getValueCb = jest.fn();

    component.$on('setValue', getValueCb);

    const textareaField = container.querySelector('textarea');
    textareaField.value = 'helloworld';
    textareaField.dispatchEvent(new Event('input'));

    return new Promise((resolve) => setImmediate(resolve)).then(() => {
      jest.runAllTimers();
      expect(getValueCb).toBeCalled();

      const theTextareaElement2 = container.querySelector('.manor-textarea-default.invalid');
      expect(theTextareaElement2.value).toBe('helloworld');

      const theTextareaElement3 = container.querySelector('.manor-textarea-default:invalid');
      expect(theTextareaElement3.value).toBe('helloworld');

      const theTextareaElement4 = container.querySelector('.manor-maxlength-indicator.max-chars-exceeded');
      expect(theTextareaElement4.innerHTML).toContain('-3');
    });
  });
  */


  /*

  ### This one is failing because :invalid is not being triggered which probably means the custom validation message had not been applied ####

  it('if default supplied text exceeds max length limit, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'helloworld',
      maxLength: '7',
      autofill: true,
    };

    / * eslint-disable-next-line react/jsx-props-no-spreading * /
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement.value).toBe('helloworld');

    const theTextareaElement2 = container.querySelector('.manor-textarea-default:invalid');
    expect(theTextareaElement2.value).toBe('helloworld');

    const theTextareaElement3 = container.querySelector('.manor-maxlength-indicator.max-chars-exceeded');
    expect(theTextareaElement3.innerHTML).toContain('-3');
  });
  */

  it('on maxLength provided, indicator is displayed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: '',
      maxChars: '7',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement.innerHTML).toContain('7');

    const theTextareaElement1 = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement1).toBeNull();
  });


  /*
  it('on maxChars exceeded, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'hello',
      maxChars: '7',
    };

    const { container, component } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement.innerHTML).toContain('2');

    const theTextareaElement1 = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement1).toBeNull();

    const getValueCb = jest.fn();

    component.$on('setValue', getValueCb);

    const textareaField = container.querySelector('textarea');
    textareaField.value = 'helloworld';
    textareaField.dispatchEvent(new Event('input'));

    return new Promise((resolve) => setImmediate(resolve)).then(() => {
      jest.runAllTimers();
      expect(getValueCb).toBeCalled();

      const theTextareaElement2 = container.querySelector('.manor-textarea-default.invalid');
      expect(theTextareaElement2.value).toBe('helloworld');

      const theTextareaElement3 = container.querySelector('.manor-textarea-default:invalid');
      expect(theTextareaElement3.value).toBe('helloworld');

      const theTextareaElement4 = container.querySelector('.manor-maxlength-indicator.max-chars-exceeded');
      expect(theTextareaElement4.innerHTML).toContain('-3');
    });
  });
  */

  /*

  ### This one is failing because :invalid is not being triggered which probably means the custom validation message had not been applied ####

  it('if default supplied text exceeds maxChars limit, validation is performed', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'helloworld',
      maxChars: '7',
      autofill: true,
    };

    / * eslint-disable-next-line react/jsx-props-no-spreading * /
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-textarea-default.invalid');
    expect(theTextareaElement.value).toBe('helloworld');

    const theTextareaElement2 = container.querySelector('.manor-textarea-default:invalid');
    expect(theTextareaElement2.value).toBe('helloworld');

    const theTextareaElement3 = container.querySelector('.manor-maxlength-indicator.max-chars-exceeded');
    expect(theTextareaElement3.innerHTML).toContain('-3');
  });
  */

  it('if maxLenth and maxChars limit not supplied maxlength indicator does not exist', () => {
    const props = {
      id: 'textarea-id',
      label: 'this is a test',
      value: 'helloworld',
    };

    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = render(<Textarea {...props} />);

    const theTextareaElement = container.querySelector('.manor-textarea-default');
    expect(theTextareaElement.value).toBe('helloworld');

    const theTextareaElement3 = container.querySelector('.manor-maxlength-indicator');
    expect(theTextareaElement3).toBeNull();
  });
});
