import React from 'react';
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
  it('defines label for defaultIndicator', () => {
    const newTestMarks = testMarks;
    newTestMarks[0].defaultIndicator = true;
    const result = formatMarks(newTestMarks, 4);
    expect(result[0].label).toBeDefined();
    expect(result[1].label).not.toBeDefined();
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

describe('Descending StepSlider', () => {
  it('renders descending slider with given value selected', () => {
    const { container } = render(<StepSlider marks={testMarks} value={2} name="test" sortOrderAscending={false} />);
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
        sortOrderAscending={false}
      />,
    );
    const slider = getByRole('slider');
    fireEvent.mouseDown(slider);
    fireEvent.mouseUp(document.body);
    expect(handleChange).toHaveBeenCalled();
    expect(handleChangeCommitted).toHaveBeenCalled();
  });
});
