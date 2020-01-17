import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import ProgressIcon from '../ProgressIcon';
import getTheme from '../../../../utils/getTheme';

const theme = getTheme();

describe('ProgressIcon', () => {
  it('renders correctly without props', () => {
    const { getByText } = render(<ProgressIcon />);
    expect(getByText('1')).toBeInTheDocument();
  });
  it('renders correctly for disabled prop', () => {
    const { getByText } = render(<ProgressIcon index={4} disabled />);
    expect(getByText('4')).toHaveStyleRule('border', theme.progress.icon.borderDisabled);
  });
  it('renders correctly for active prop', () => {
    const { getByText } = render(<ProgressIcon index={4} active />);
    expect(getByText('4')).toHaveStyleRule('border', 'none');
  });
  it('renders correctly for mobile prop', () => {
    const { getByText } = render(<ProgressIcon index={4} mobile />);
    expect(getByText('4')).toHaveStyleRule('border', theme.progress.icon.border);
  });
});
