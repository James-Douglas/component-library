import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Input from '../../components/Input/Input.component';
// import inputReadme from '../../components/Input/Input.md';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    
    const SvgComponent = () => {
      return <svg width="30" height="21" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-54.5%" y="-83.3%" width="209.1%" height="270.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.608497509 0 0 0 0 0.57232159 0 0 0 0 0.57232159 0 0 0 0.5 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" transform="translate(4 2)" fillRule="nonzero" fill="none"><path d="M21.579 14.398H.379A.379.379 0 0 1 0 14.019V.39C0 .181.17.012.379.012h21.2c.209 0 .378.17.378.378V14.02c0 .209-.17.379-.378.379z" fill="#41479B"/><path d="M21.957.39c0-.209-.17-.378-.378-.378h-1.694L12.87 4.607V.012H9.086v4.595L2.072.012H.38C.169.012 0 .182 0 .39v.98l6.017 3.942H0v3.786h6.017L0 13.04v.979c0 .209.17.379.379.379h1.693l7.014-4.595v4.595h3.785V9.803l7.014 4.595h1.694c.209 0 .378-.17.378-.379v-.98L15.94 9.099h6.017V5.312H15.94l6.017-3.942V.39z" fill="#F5F5F5"/><g fill="#FF4B55"><path d="M21.957 6.069h-9.843V.012H9.843v6.057H0V8.34h9.843v6.058h2.271V8.34h9.843z"/><path d="M7.674 9.098L.011 14.072a.374.374 0 0 0 .368.326H.9l8.165-5.3h-1.39zM14.855 9.098h-1.39l8.152 5.292c.19-.02.34-.176.34-.371v-.311l-7.102-4.61zM0 .808l6.938 4.504h1.39L.222.049C.09.109 0 .239 0 .39v.418zM14.262 5.312L21.944.325a.373.373 0 0 0-.365-.313h-.543l-8.165 5.3h1.391z"/></g></g></svg>
    }

    const tooltip = {
      title: 'Text input tooltip!',
    };

    return (
      <Input 
        id={'default-id'} 
        placeholder='temp placeholder' 
        bordered={true} 
        optional={true} 
        required={false} 
        autoFill={false}
        disabled={true}
        prefix={<SvgComponent/>}
        suffix={'suffix'}
        invalid={false}
        label='[Fieldset label]'
        tooltip={tooltip}
      />
    );
  })
/* import Input from '../../src/Input/Input.svelte';
import InputBgGrey from './inputBgGrey.view.svelte';
import InputBgWhite from './inputBgWhite.view.svelte';
import InputTypes from './inputTypes.view.svelte';
import InputValues from './inputValues.view.svelte';
import InputPrefixSuffix from './inputPrefixSuffix.view.svelte';
import InputReadme from '../../src/Input/input.md';

export default storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const id = text('ID', 'input-one');
    const type = text('Type', 'text');
    const label = text('Label', '[Input label]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const bordered = boolean('bordered', true);
    const disabled = boolean('disabled', false);
    const required = boolean('required', false);
    const invalid = boolean('invalid', false);
    const autofill = boolean('autofill', false);
    const prefix = text('prefix', '');

    const defaultTooltip = {
      title: '',
      body: ''
    };

    const tooltip = object('Tooltip', defaultTooltip);

    return {
      Component: Input,
      props: {
        id,
        type,
        label,
        bordered,
        disabled,
        placeholder,
        required,
        invalid,
        autofill,
        prefix,
        tooltip
      },
    };
  }, {notes: InputReadme})
  .add('On grey Background', () => {
    const label = text('Label', '[Label on grey background]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const disabled = boolean('disabled', false);
    const required = boolean('required', false);
    const invalid = boolean('invalid', false);
    const autofill = boolean('autofill', false);
    const prefix = text('prefix', '');
    const defaultTooltip = {
      title: '',
      body: ''
    };

    const tooltip = object('Tooltip', defaultTooltip);

    return {
      Component: InputBgGrey,
      props: {
        label,
        disabled,
        placeholder,
        required,
        invalid,
        autofill,
        prefix,
        tooltip
      }
    }
  }, {notes: InputReadme})
  .add('On white Background', () => {
    const label = text('Label', '[Label on white background]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const disabled = boolean('disabled', false);
    const required = boolean('required', false);
    const invalid = boolean('invalid', false);
    const autofill = boolean('autofill', false);
    const prefix = text('prefix', '');
    const defaultTooltip = {
      title: '',
      body: ''
    };

    const tooltip = object('Tooltip', defaultTooltip);

    return {
      Component: InputBgWhite,
      props: {
        label,
        disabled,
        placeholder,
        required,
        invalid,
        autofill,
        prefix,
        tooltip
      }
    }
  }, {notes: InputReadme})
  .add('Input types', () => {

    return {
      Component: InputTypes
    }
  }, {notes: InputReadme})
  .add('Changing input values', () => {

    return {
      Component: InputValues
    }
  }, {notes: InputReadme})
  .add('Prefix', () => {
    const label = text('Label', '[Label on white background]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const disabled = boolean('disabled', false);
    const required = boolean('required', false);
    const invalid = boolean('invalid', false);
    const autofill = boolean('autofill', false);

    return {
      Component: InputPrefixSuffix,
      props: {
        label,
        disabled,
        placeholder,
        required,
        invalid,
        autofill
      }
    }
  }, {notes: InputReadme})
 */
