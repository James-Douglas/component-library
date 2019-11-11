import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Overlay from '../../components/Overlay/Overlay.component';
import SliderLeft from './sliderLeftView';
import SliderBottom from './sliderBottomView';
import SliderRight from './sliderRightView';
import SliderTop from './sliderTopView';


storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .add('Overlay', () => (
    <>
      <Overlay />
    </>
  ))
  .add('Slider Right', () => (
    <>
      <SliderRight />
    </>
  ))
  .add('Slider Bottom closed on Overlay', () => (
    <>
      <SliderBottom />
    </>
  ))
  .add('Slider Top', () => (
    <>
      <SliderTop />
    </>
  ))
  .add('Slider Left', () => (
    <>
      <SliderLeft />
    </>
  ));
