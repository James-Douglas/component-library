import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import userEvent from '@testing-library/user-event';
import { render } from '../../../../../../testUtils';
import 'jest-styled-components';
import TabButton from '../TabButton.component';

describe('TabButton', () => {
  it('renders with props', () => {
    const onClick = jest.fn();
    const handleOnClick = jest.fn();
    const onRef = jest.fn();

    const { container } = render(
      <TabButton selected={false} href="#" label="test" onClick={onClick} onRef={onRef} handleOnClick={handleOnClick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('add focus visible styles ', () => {
    const onClick = jest.fn();
    const handleOnClick = jest.fn();
    const onRef = jest.fn();

    const { container } = render(
      <TabButton selected href="#" label="test" onClick={onClick} onRef={onRef} handleOnClick={handleOnClick} />,
    );

    userEvent.tab();
    const anchorTag = container.querySelector('a');
    const listElement = container.querySelector('li');

    expect(anchorTag).toHaveFocus();
    expect(listElement).toHaveStyleRule({
      'a:focus-visible': {
        outline: `${ctmTheme.colors.primary500} auto 1px`,
        outlineOffset: '-1px',
      },
    });
  });

  it('add hover styles ', () => {
    const onClick = jest.fn();
    const handleOnClick = jest.fn();
    const onRef = jest.fn();

    const { container } = render(
      <TabButton selected={false} href="#" label="test" onClick={onClick} onRef={onRef} handleOnClick={handleOnClick} />,
    );

    const listElement = container.querySelector('li');
    expect(listElement).toHaveStyleRule({
      ':hover': {
        background: `${ctmTheme.button.tertiary.backgroundHover}`,
      },
    });
  });
});
