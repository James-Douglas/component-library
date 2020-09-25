import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Tag from '../Tag.component';

describe('Combo', () => {
  it('renders a tag', () => {
    const { container } = render(
      <Tag value={"I'm a tag"} onClickDelete={() => {}} />,
    );

    const tag = container.querySelector('div');
    const tagP = tag.querySelector('p');
    const tagButton = tag.querySelector('button');

    expect(tag).toHaveStyleRule('background', `${ctmTheme.colors.primary50}`);
    expect(tagP.textContent).toBe("I'm a tag");
    expect(tagP).toHaveStyleRule('color', `${ctmTheme.colors.primary500}`);
    expect(tagButton).toHaveStyleRule('color', `${ctmTheme.colors.primary500}`);
  });

  it('renders an alert tag', () => {
    const { container } = render(
      <Tag value={"I'm an alert tag"} alert onClickDelete={() => {}} />,
    );

    const tag = container.querySelector('div');
    const tagP = tag.querySelector('p');
    const tagButton = tag.querySelector('button');

    expect(tag).toHaveStyleRule('background', `${ctmTheme.colors.warning50}`);
    expect(tagP.textContent).toBe("I'm an alert tag");
    expect(tagP).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
    expect(tagButton).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
  });

  it('renders multiple tags', () => {
    const { container } = render(
      <>
        <Tag value={"I'm a tag"} onClickDelete={() => {}} />
        <Tag value={"I'm also tag"} onClickDelete={() => {}} />
        <Tag value={"I'm another tag"} onClickDelete={() => {}} />
      </>,
    );

    const tags = container.querySelectorAll('div');
    expect(tags[0].querySelector('p').textContent).toBe("I'm a tag");
    expect(tags[1].querySelector('p').textContent).toBe("I'm also tag");
    expect(tags[2].querySelector('p').textContent).toBe("I'm another tag");
  });

  it('accepts an onDelete function', () => {
    const onDeleteCb = jest.fn();
    const { container } = render(
      <Tag value={"I'm a tag"} onClickDelete={onDeleteCb} />,
    );

    const tag = container.querySelector('div');
    const tagButton = tag.querySelector('button');
    fireEvent.focus(tagButton);
    fireEvent.click(tagButton, { button: 0 });
    expect(onDeleteCb.mock.calls.length).toBe(1);
  });
});
