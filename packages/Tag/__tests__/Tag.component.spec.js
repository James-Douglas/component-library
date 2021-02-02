import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { faExclamationCircle } from '@fortawesome/pro-solid-svg-icons';
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

  it('renders an alert tag with its default colors (warning)', () => {
    const { container } = render(
      <Tag value={"I'm an alert tag"} warning alert onClickDelete={() => {}} />,
    );

    const tag = container.querySelector('div');
    const tagP = tag.querySelector('p');
    const tagButton = tag.querySelector('button');

    expect(tag).toHaveStyleRule('background', `${ctmTheme.colors.warning50}`);
    expect(tagP.textContent).toBe("I'm an alert tag");
    expect(tagP).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
    expect(tagButton).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
  });

  it('renders an alert tag with its error colors', () => {
    const { container } = render(
      <Tag value={"I'm an alert tag"} warning={false} alert onClickDelete={() => {}} />,
    );

    const tag = container.querySelector('div');
    const tagP = tag.querySelector('p');
    const tagButton = tag.querySelector('button');

    expect(tag).toHaveStyleRule('background', `${ctmTheme.colors.error50}`);
    expect(tagP.textContent).toBe("I'm an alert tag");
    expect(tagP).toHaveStyleRule('color', `${ctmTheme.colors.error700}`);
    expect(tagButton).toHaveStyleRule('color', `${ctmTheme.colors.error700}`);
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

  it('renders a custom icon if provided and the close icon by default', () => {
    const { container } = render(
      <>
        <Tag value={"I'm a tag"} icon={faExclamationCircle} onClickDelete={() => {}} />
      </>,
    );

    const icon = container.querySelectorAll('svg');

    expect(icon[0].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.primary500}`);
    expect(icon[0]).toBeDefined();
    expect(icon[1].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.primary500}`);
    expect(icon[1]).toBeDefined();
  });

  it('renders a custom icon if provided and has a warning color, and the close icon by default', () => {
    const { container } = render(
      <>
        <Tag value={"I'm a tag"} warning alert icon={faExclamationCircle} onClickDelete={() => {}} />
      </>,
    );

    const icon = container.querySelectorAll('svg');
    expect(icon[0].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
    expect(icon[0]).toBeDefined();
    expect(icon[1].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.warning700}`);
    expect(icon[1]).toBeDefined();
  });

  it('renders a custom icon if provided and has an error color, and the close icon by default', () => {
    const { container } = render(
      <>
        <Tag value={"I'm a tag"} warning={false} alert icon={faExclamationCircle} onClickDelete={() => {}} />
      </>,
    );

    const icon = container.querySelectorAll('svg');
    expect(icon[0].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.error700}`);
    expect(icon[0]).toBeDefined();
    expect(icon[1].parentElement).toHaveStyleRule('color', `${ctmTheme.colors.error700}`);
    expect(icon[1]).toBeDefined();
  });

  it('it does not render a tag if visible is set', () => {
    const { container } = render(
      <Tag value="I should be invisible" onClickDelete={() => {}} visible={false} />,
    );

    const tag = container.querySelector('div');
    expect(tag).toHaveStyleRule('display', 'none');
  });
});
