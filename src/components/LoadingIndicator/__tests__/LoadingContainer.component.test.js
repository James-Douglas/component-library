import React from 'react';
import { render } from '@testing-library/react';
import LoadingContainer from '../LoadingContainer.component';
import LoadingPulse from '../LoadingPulse.component';

describe('LoadingContainer', () => {
  it('renders correctly without props', () => {
    const { container } = render(<LoadingContainer title="Please wait... your results are on their way."><LoadingPulse /></LoadingContainer>);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
