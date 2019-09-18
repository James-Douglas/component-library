import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ManorInput from '../../components/Input/Input.component';
// import inputReadme from '../../components/Input/Input.md';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => <ManorInput content="temp" />);

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
