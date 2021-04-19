import React from 'react';
import { useTracking } from 'react-tracking';
import { fireEvent, render } from '../../../../../testUtils';
import ImageToggle, { getImageToggleContent } from '../ImageToggle.component';

/* eslint-disable react/prop-types */
describe('getImageToggleContent()', () => {
  const PictureToggleContentContainer = ({
    src,
    srcsets,
    alt,
    pictureTitle,
    id,
    toggleTitle,
    description,
  }) => (
    <>
      {getImageToggleContent(
        src,
        srcsets,
        alt,
        pictureTitle,
        id,
        toggleTitle,
        description,
      )}
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
        trackingLabel="test-tracking-label"
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

  describe('interaction tracking', () => {
    it('tracks clicks', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <ImageToggle
          trackingLabel="test-tracking-label"
          id="test-picture-toggle"
          title="toggle title"
          description="test description"
          value="test"
          name="toggles"
          src="/test/test.jpg"
          alt="test alt"
          pictureTitle="test title"
          toggleTitle="test title"
          handleToggle={() => {}}
        />,
      );
      const input = container.querySelector('input');
      fireEvent.click(input);
      expect(trackEvent.mock.calls[0][0]).toStrictEqual({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Toggle Buttons',
          ixn_type: 'ImageToggle',
          ixn_value: 'test-tracking-label',
        },
      });
    });
  });
});
