import { text, select } from '@storybook/addon-knobs';

const getTooltipKnobs = (groupId = null) => {
  const placementOptions = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
    'top-start': 'top-start',
    'top-end': 'top-end',
    'bottom-start': 'bottom-start',
    'bottom-end': 'bottom-end',
    'left-start': 'left-start',
    'left-end': 'left-end',
    'right-start': 'right-start',
    'right-end': 'right-end',
  };
  return {
    title: text('title', 'Tooltip Title', groupId),
    body: text('body', 'This is a an example tooltip', groupId),
    placement: select('placement', placementOptions, 'right', groupId),
    screenReaderLabel: text('screenReaderLabel', 'tooltip screenReaderLabel', groupId),
  };
};

export default getTooltipKnobs;
