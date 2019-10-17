import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, select,
} from '@storybook/addon-knobs';

import TextareaReadme from '../../components/Textarea/textarea.md';
import TextareaDemoView from './textareaDemo.view';

storiesOf('Textarea', module)
  .addDecorator(withKnobs)
  .add('demo', () => {
    const id = text('ID', 'input-one');
    const name = text('Name', 'input-one');
    const label = text('Label', '[Fieldset label]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const TextareaValue = text('Value', '');
    const bordered = boolean('Bordered', true);
    const disabled = boolean('Disabled', false);
    const required = boolean('Required', false);
    const invalid = boolean('Invalid', false);
    const autofill = boolean('Autofill', false);
    const rows = text('Rows', '6'); // can be set via the css width property
    const wrap = select('Wrap', ['', 'hard', 'soft'], '');
    const readonly = boolean('Readonly', false);
    const maxLength = text('Maxlength', '');
    const maxChars = text('Maxchars', '500');

    return (
      <TextareaDemoView
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        value={TextareaValue}
        bordered={bordered}
        disabled={disabled}
        required={required}
        invalid={invalid}
        autofill={autofill}
        rows={rows}
        wrap={wrap}
        readonly={readonly}
        maxLength={maxLength}
        maxChars={maxChars}
      />
    );
  }, { notes: TextareaReadme })
  .add('Demo with text', () => {
    const id = text('ID', 'input-one');
    const name = text('Name', 'input-one');
    const label = text('Label', '[Fieldset label]');
    const placeholder = text('Placeholder', 'Placeholder Text');
    const TextareaValue = text('Value', 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.');
    const bordered = boolean('Bordered', true);
    const disabled = boolean('Disabled', false);
    const required = boolean('Required', false);
    const invalid = boolean('Invalid', false);
    const autofill = boolean('Autofill', false);
    const rows = text('Rows', '6'); // can be set via the css width property
    const wrap = select('Wrap', ['', 'hard', 'soft'], '');
    const readonly = boolean('Readonly', false);
    const maxLength = text('Maxlength', '');
    const maxChars = text('Maxchars', '500');

    return (
      <TextareaDemoView
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        value={TextareaValue}
        bordered={bordered}
        disabled={disabled}
        required={required}
        invalid={invalid}
        autofill={autofill}
        rows={rows}
        wrap={wrap}
        readonly={readonly}
        maxLength={maxLength}
        maxChars={maxChars}
      />
    );
  }, { notes: TextareaReadme });
