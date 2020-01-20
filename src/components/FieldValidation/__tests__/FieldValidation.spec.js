import React from 'react';
import { render } from '@testing-library/react';
import FieldValidation from '../FieldValidation.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('FieldValidation', () => {
  it('does not render when message is not provided', () => {
    const { container } = render(<FieldValidation />);
    expect(container).toBeEmpty();
  });
  it('renders with validation message', () => {
    const { getByText, container } = render(<FieldValidation message="Test" />);
    const validationContainer = container.querySelector('div');
    expect(validationContainer).toHaveStyle(`color: ${theme.colors.invalid}`);
    expect(validationContainer).toHaveStyle(`background: ${theme.colors.validationBackground}`);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
