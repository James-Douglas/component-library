import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import IconToggle, { getToggleContent } from '../IconToggle.component';

describe('getToggleContent()', () => {
  const IconToggleContentContainer = ({
    // eslint-disable-next-line react/prop-types
    id, icon, title, description,
  }) => (
    <>
      {getToggleContent(id, icon, title, description)}
    </>
  );

  it('renders with props', () => {
    const { getByText, container } = render(<IconToggleContentContainer id="testing" icon={faCheck} title="test" description="test description" />);
    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    expect(container.querySelector('.fa-check')).toBeInTheDocument();
  });
});

describe('IconToggle', () => {
  it('renders with props', () => {
    const { container } = render(<IconToggle id="test" value="test" title="test icon toggle" icon={faCheck} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
