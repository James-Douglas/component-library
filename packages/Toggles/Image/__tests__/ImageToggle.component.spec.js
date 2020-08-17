import React from 'react';
import { render } from '@testing-library/react';
import ImageToggle, { getImageToggleContent } from '../ImageToggle.component';

describe('getImageToggleContent()', () => {
  const PictureToggleContentContainer = ({
    // eslint-disable-next-line react/prop-types
    src, srcsets, alt, pictureTitle, id, toggleTitle, description,
  }) => (
    <>
      {getImageToggleContent(src, srcsets, alt, pictureTitle, id, toggleTitle, description)}
    </>
  );

  it('renders with props', () => {
    const { getByText, container } = render(
      <PictureToggleContentContainer
        src="/test/test.jpg"
        alt="test alt"
        pictureTitle="test title"
        id="test-picture-toggle"
        toggleTitle="test title"
        description="test description"
      />,
    );
    expect(getByText('test title')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/test/test.jpg');
    expect(img).toHaveAttribute('alt', 'test alt');
    expect(img).toHaveAttribute('title', 'test title');
  });
});

describe('ImageToggle', () => {
  it('renders with props', () => {
    const { container, getByText } = render(
      <ImageToggle
        id="test-picture-toggle"
        title="toggle title"
        description="test description"
        value="test"
        selectedValue="test"
        name="toggles"
        src="/test/test.jpg"
        alt="test alt"
        pictureTitle="test title"
        toggleTitle="test title"
      />,
    );
    expect(container.innerHTML).toMatchSnapshot();
    expect(getByText('toggle title')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
    const input = container.querySelector('input');
    expect(input.value).toEqual('test');
    expect(input.name).toEqual('toggles');
    expect(input.checked).toBeTruthy();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/test/test.jpg');
    expect(img).toHaveAttribute('alt', 'test alt');
    expect(img).toHaveAttribute('title', 'test title');
  });
});
