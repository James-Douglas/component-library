import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import PrimaryButtonView from './primary.view';
import SecondaryButtonView from './secondary.view';
import TextButtonView from './text.view';
import LinkButtonView from './link.view';
import FooterLinkButtonView from './footer-link.view';
import buttonReadme from '../../components/Button/button.md';


storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('Primary', () => <PrimaryButtonView />, { notes: buttonReadme })

  .add('Secondary', () => <SecondaryButtonView />, { notes: buttonReadme })

  .add('Text', () => <TextButtonView />, { notes: buttonReadme })

  .add('Link', () => <LinkButtonView />, { notes: buttonReadme })

  .add('Footer-link', () => <FooterLinkButtonView />, { notes: buttonReadme });

/*   .add('All icons', () => <AllIconsView />, { notes: iconReadme }); */
