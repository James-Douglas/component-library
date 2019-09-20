import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, // text, select,
} from '@storybook/addon-knobs';

import TypographyReadme from './typography.md';
import Typography from './typography.view';
import TypographyRichText from './typographyRichText.view';
import TypographyDemo from './typographyDemo.view';
import TypographyDemo2 from './typographyDemo2.view';
import TypographyShowcase from './typographyShowcase.view';
import TypographyUsage from './typographyUsage.view';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('.manor-*', () => (
    <Typography />
  ), { notes: TypographyReadme })
  .add('.manor-rich-text', () => (
    <TypographyRichText />
  ), { notes: TypographyReadme })


  .add('Typography Usage examples', () =>
  /*
      const breakpoint = select('breakpoint', ['xs', 'sm', 'lg', 'xl'], 'lg');
      const number = text('number', '1800 123 456');
      */
    /* eslint-disable-next-line implicit-arrow-linebreak */
    (
      <TypographyUsage />
    ),
  { notes: TypographyReadme })
  .add('Typography Demo', () => (
    <TypographyDemo />
  ), { notes: TypographyReadme })
  .add('Typography Demo2', () => (
    <TypographyDemo2 />
  ), { notes: TypographyReadme })
  .add('Typography Showcase', () => (
    <TypographyShowcase />
  ), { notes: TypographyReadme });
