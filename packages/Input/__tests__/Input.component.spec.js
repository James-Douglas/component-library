import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Input, {
  renderClearIcon, renderAffix,
} from '../Input.component';

const SvgUkFlag = () => (
  <svg width="30" height="21" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter x="-54.5%" y="-83.3%" width="209.1%" height="270.7%" filterUnits="objectBoundingBox" id="a">
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0.608497509 0 0 0 0 0.57232159 0 0 0 0 0.57232159 0 0 0 0.5 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)" transform="translate(4 2)" fillRule="nonzero" fill="none">
      <path d="M21.579 14.398H.379A.379.379 0 0 1 0 14.019V.39C0 .181.17.012.379.012h21.2c.209 0 .378.17.378.378V14.02c0 .209-.17.379-.378.379z" fill="#41479B" />
      <path d="M21.957.39c0-.209-.17-.378-.378-.378h-1.694L12.87 4.607V.012H9.086v4.595L2.072.012H.38C.169.012 0 .182 0 .39v.98l6.017 3.942H0v3.786h6.017L0 13.04v.979c0 .209.17.379.379.379h1.693l7.014-4.595v4.595h3.785V9.803l7.014 4.595h1.694c.209 0 .378-.17.378-.379v-.98L15.94 9.099h6.017V5.312H15.94l6.017-3.942V.39z" fill="#F5F5F5" />
      <g fill="#FF4B55">
        <path d="M21.957 6.069h-9.843V.012H9.843v6.057H0V8.34h9.843v6.058h2.271V8.34h9.843z" />
        <path d="M7.674 9.098L.011 14.072a.374.374 0 0 0 .368.326H.9l8.165-5.3h-1.39zM14.855 9.098h-1.39l8.152 5.292c.19-.02.34-.176.34-.371v-.311l-7.102-4.61zM0 .808l6.938 4.504h1.39L.222.049C.09.109 0 .239 0 .39v.418zM14.262 5.312L21.944.325a.373.373 0 0 0-.365-.313h-.543l-8.165 5.3h1.391z" />
      </g>
    </g>
  </svg>
);

describe('renderClearIcon()', () => {
  const ClearIconContainer = ({
    // eslint-disable-next-line react/prop-types
    value, clearInput, isAutofill, label,
  }) => (
    <>
      {renderClearIcon(value, clearInput, isAutofill, label)}
    </>
  );

  it('does not render an clearIcon if the value.length is over 0', () => {
    const { container } = render(<div id="test"><ClearIconContainer value="" /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });

  it('renders a clearIcon when the value.length is > 0', () => {
    const { container } = render(<ClearIconContainer value="input text" label="test input" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });
});

describe('renderAffix()', () => {
  const AffixContainer = ({
    // eslint-disable-next-line react/prop-types
    affixType, affixContent, isAutofill, disabled,
  }) => (
    <>
      {renderAffix(affixType, affixContent, isAutofill, disabled)}
    </>
  );

  it('does not render a prefix or suffix if its not supplied', () => {
    const { container } = render(<div id="test"><AffixContainer /></div>);
    expect(container.querySelector('#test')).toBeEmpty();
  });

  it('renders a prefix when supplied', () => {
    const { getByText } = render(<AffixContainer affixType="prefix" affixContent="?" />);
    expect(getByText('?')).toBeInTheDocument();
  });

  it('renders a suffix when supplied', () => {
    const { getByText } = render(<AffixContainer affixType="suffix" affixContent="?!" />);
    expect(getByText('?!')).toBeInTheDocument();
  });

  it('does not render the additional stlying for autofill if its disabled', () => {
    const { container, getByText } = render(<AffixContainer affixType="prefix" affixContent="?" isAutofill disabled />);
    const prefix = getByText('?');
    const element = container.querySelector('span');
    expect(prefix).toBeInTheDocument();
    expect(element).not.toHaveStyleRule('background', ctmTheme.colors.inputPrefilled);
  });

  it('can render a component via prop', () => {
    const { container } = render(<AffixContainer affixType="suffix" affixContent={<SvgUkFlag />} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

describe('Input.component', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Input id="test-id" handleChange={() => {}} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders with props', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        label="input label"
        autocomplete="on"
        handleChange={() => {}}
      />,
    );

    const input = container.querySelector('#test-id');
    const label = container.querySelector('label');
    const placeholder = input.getAttribute('placeholder');
    const autocomplete = input.getAttribute('autocomplete');
    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;
    const inputInvalid = container.querySelector('.invalid');

    expect(label.textContent).toBe('input label');
    expect(placeholder).toBe('placeholder test');
    expect(autocomplete).toBe('on');
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.component);
    expect(inputInvalid).toBe(null);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders an invalid input', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        validationMessage="invalid"
        handleChange={() => {}}
      />,
    );

    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.invalid);
  });

  it('renders an a prefix and a suffix', () => {
    const { getByText } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        prefixContent="$"
        suffixContent="?"
        handleChange={() => {}}
      />,
    );

    const prefix = getByText('$');
    const suffix = getByText('?');

    expect(prefix).toBeInTheDocument();
    expect(suffix).toBeInTheDocument();
  });

  it('adds focus styles on focus and removes on blur', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        handleChange={() => {}}
      />,
    );
    const inputField = container.querySelector('input');
    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;

    inputField.focus();
    expect(inputWrap).toHaveStyleRule(`border: ${ctmTheme.borders.hover}`);
    expect(inputWrap).not.toHaveStyleRule(`border: ${ctmTheme.borders.component}`);
    inputField.blur();
    expect(inputWrap).not.toHaveStyleRule(`border: ${ctmTheme.borders.hover}`);
    expect(inputWrap).toHaveStyleRule(`border: ${ctmTheme.borders.component}`);
  });

  it('accepts a prefill value and renders with prefill styling', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        prefillValue="autofilled value test"
        handleChange={() => {}}
      />,
    );

    const inputField = container.querySelector('input');
    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;

    expect(inputWrap).toHaveStyleRule(`background: ${ctmTheme.colors.inputPrefilled}`);
    expect(inputField.value).toBe('autofilled value test');
    expect(inputWrap).toHaveStyleRule(`border: ${ctmTheme.borders.component}`);
  });

  it('clears the input on click of the clear button', () => {
    const clearValueCb = jest.fn();
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        handleChange={clearValueCb}
      />,
    );

    const inputField = container.querySelector('#test-id');
    fireEvent.input(inputField, { target: { value: 'test string' } });
    expect(inputField.value).toBe('test string');

    const clearBtn = container.querySelector('.input-clear-button');
    fireEvent.click(clearBtn);
    expect(inputField.value).toBe('');

    expect(clearValueCb.mock.calls.length).toBe(2);
    expect(clearValueCb.mock.calls[0][0]).toBe('test string');
  });

  it('has a max length attribute', () => {
    // https://github.com/testing-library/dom-testing-library/issues/332
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        maxlength={5}
        handleChange={() => {}}
      />,
    );

    const inputField = container.querySelector('#test-id');
    const maxlength = inputField.getAttribute('maxlength');

    expect(maxlength).toBe('5');
  });

  it('has a readonly true attribute', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        maxlength={5}
        readonly
        handleChange={() => {}}
      />,
    );

    const inputField = container.querySelector('#test-id');

    expect(inputField.hasAttribute('readonly', 'true')).toBeTruthy();
  });

  it('has a focus handler when passed in', () => {
    const focusCb = jest.fn();
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        maxlength={5}
        handleChange={() => {}}
        handleFocus={focusCb}
      />,
    );

    const inputField = container.querySelector('#test-id');
    fireEvent.focus(inputField);
    expect(focusCb.mock.calls.length).toBe(1);
    expect(focusCb.mock.calls[0][0]).toBe(undefined);
  });

  it('has a blur handler when passed in', () => {
    const blurCb = jest.fn();
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        maxlength={5}
        handleChange={() => {}}
        handleBlur={blurCb}
      />,
    );

    const inputField = container.querySelector('#test-id');
    fireEvent.blur(inputField);
    expect(blurCb.mock.calls.length).toBe(1);
    expect(blurCb.mock.calls[0][0]).toBe(undefined);
  });

  it('applies border on blur', () => {
    const { container } = render(
      <Input
        id="test-id"
        type="text"
        placeholder="placeholder test"
        handleChange={() => {}}
      />,
    );
    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;
    const inputField = container.querySelector('#test-id');
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.component);
    inputField.focus();
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.active);
    inputField.blur();
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.component);
  });

  it('applies border on blur when prefill is true', () => {
    const { container } = render(
      <Input
        label="[Fieldset label] With tooltip"
        id="input-one"
        tooltip={{ title: 'input demo' }}
        placeholder="Placeholder one"
        prefillValue="autofilled value test"
        type="text"
        required={false}
        disabled={false}
        invalid={false}
        handleChange={() => {}}
      />,
    );
    const inputFieldWrap = container.querySelector('.input-container');
    const inputWrap = inputFieldWrap.firstChild;
    const inputField = container.querySelector('#input-one');
    inputField.focus();
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.active);
    inputField.blur();
    expect(inputWrap).toHaveStyleRule('border', ctmTheme.borders.prefill);
  });
});
