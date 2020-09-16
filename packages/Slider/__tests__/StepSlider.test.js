import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import StepSlider, { formatMarks } from '../StepSlider.component';
import { render, fireEvent } from '../../../testUtils';

const testMarks = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
];
describe('formatMarks', () => {
  it('returns empty array for empty marks', () => {
    expect(formatMarks([], 0)).toEqual([]);
  });
  it('returns label for first and last values, notches for others', () => {
    const result = formatMarks(testMarks, 4);
    const { container: firstContainer } = render(result[0].label);
    expect(firstContainer.querySelector('p')).toBeInTheDocument();
    expect(firstContainer.querySelector('p')).toHaveTextContent('One');
    const { container: secondContainer } = render(result[1].label);
    expect(secondContainer.querySelector('p')).not.toBeInTheDocument();
    expect(secondContainer.querySelector('div')).toHaveStyle(`border: ${ctmTheme.slider.notch.border}`);
    const { container: thirdContainer } = render(result[2].label);
    expect(thirdContainer.querySelector('p')).toBeInTheDocument();
    expect(thirdContainer.querySelector('p')).toHaveTextContent('Three');
  });
  it('returns empty string for currently selected value', () => {
    const result = formatMarks(testMarks, 1);
    expect(result[0].label).toEqual('');
  });
});

describe('StepSlider', () => {
  it('renders with given value selected', () => {
    const { container } = render(<StepSlider marks={testMarks} value={2} name="test" />);
    expect(container.querySelector('input')).toHaveValue('2');
  });
  it('calls change handlers on value change', () => {
    const handleChange = jest.fn();
    const handleChangeCommitted = jest.fn();
    const { getByRole } = render(
      <StepSlider
        marks={testMarks}
        value={1}
        name="test"
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
      />,
    );
    const slider = getByRole('slider');
    fireEvent.mouseDown(slider);
    fireEvent.mouseUp(document.body);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChangeCommitted).toHaveBeenCalled();
  });
});
