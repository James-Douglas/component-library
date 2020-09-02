import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import SegmentedButtons, {
  generateButtons,
  formatEvenOrOddButtons,
} from '../SegmentedButtons.component';
import 'jest-styled-components';

describe('SegmentedButtons', () => {
  const groupId = 'test';
  const name = 'test';
  const selectedButtonValue = 'test';
  const handleToggle = jest.fn();
  const handleClick = jest.fn();
  const validationMessage = 'test';

  let buttonsContent;
  let fixed;
  let contentWidth;
  describe('generateButtons()', () => {
    it('generateButtons', () => {
      buttonsContent = [
        {
          label: 'button1',
          value: 1,
          id: 'a',
        },
        {
          label: 'button2',
          value: 2,
          id: 'b',
        },
        {
          label: 'button3',
          value: 3,
          id: 'c',
        },
        {
          label: 'button4',
          value: 4,
          id: 'd',
        },
      ];

      fixed = false;

      const buttonArray = generateButtons(
        groupId,
        name,
        selectedButtonValue,
        handleToggle,
        handleClick,
        validationMessage,
        buttonsContent,
        fixed,
        contentWidth,
      );

      const button1 = buttonArray[0];
      const button2 = buttonArray[1];
      const button3 = buttonArray[2];
      const button4 = buttonArray[3];

      expect(button1.props.title).toEqual('button1');
      expect(button1.props.value).toEqual(1);
      expect(button1.props.id).toEqual('a');

      expect(button2.props.title).toEqual('button2');
      expect(button2.props.value).toEqual(2);
      expect(button2.props.id).toEqual('b');

      expect(button3.props.title).toEqual('button3');
      expect(button3.props.value).toEqual(3);
      expect(button3.props.id).toEqual('c');

      expect(button4.props.title).toEqual('button4');
      expect(button4.props.value).toEqual(4);
      expect(button4.props.id).toEqual('d');
    });
  });

  describe('formatEvenOrOddButtons()', () => {
    it('formatEvenOrOddButtons even', () => {
      buttonsContent = [
        {
          label: 'button1',
          value: 1,
          id: 'a',
        },
        {
          label: 'button2',
          value: 2,
          id: 'b',
        },
      ];

      fixed = false;

      const buttonArray = generateButtons(
        groupId,
        name,
        selectedButtonValue,
        handleToggle,
        handleClick,
        validationMessage,
        buttonsContent,
        fixed,
        contentWidth,
      );

      const formattedButtons = formatEvenOrOddButtons(
        buttonArray,
        fixed,
        contentWidth,
      );

      const evenContainerDiv = formattedButtons[0];
      expect(evenContainerDiv.props.children.length).toEqual(2);

      const button1 = evenContainerDiv.props.children[0];
      const button2 = evenContainerDiv.props.children[1];

      expect(button1.props.title).toEqual('button1');
      expect(button1.props.value).toEqual(1);
      expect(button1.props.id).toEqual('a');

      expect(button2.props.title).toEqual('button2');
      expect(button2.props.value).toEqual(2);
      expect(button2.props.id).toEqual('b');

      const { container } = render(evenContainerDiv);
      expect(container).toBeDefined();
    });

    it('formatEvenOrOddButtons odd', () => {
      buttonsContent = [
        {
          label: 'button1',
          value: 1,
          id: 'a',
        },
        {
          label: 'button2',
          value: 2,
          id: 'b',
        },
        {
          label: 'button3',
          value: 3,
          id: 'c',
        },
      ];

      fixed = false;

      const buttonArray = generateButtons(
        groupId,
        name,
        selectedButtonValue,
        handleToggle,
        handleClick,
        validationMessage,
        buttonsContent,
        fixed,
        contentWidth,
      );

      const formattedButtons = formatEvenOrOddButtons(
        buttonArray,
        fixed,
        contentWidth,
      );

      const button1 = formattedButtons[0];
      const button2 = formattedButtons[1];
      const button3 = formattedButtons[2];

      expect(button1.props.title).toEqual('button1');
      expect(button1.props.value).toEqual(1);
      expect(button1.props.id).toEqual('a');

      expect(button2.props.title).toEqual('button2');
      expect(button2.props.value).toEqual(2);
      expect(button2.props.id).toEqual('b');

      expect(button3.props.title).toEqual('button3');
      expect(button3.props.value).toEqual(3);
      expect(button3.props.id).toEqual('c');
    });

    it('formatEvenOrOddButtons even fixed', () => {
      buttonsContent = [
        {
          label: 'button1',
          value: 1,
          id: 'a',
        },
        {
          label: 'button2',
          value: 2,
          id: 'b',
        },
      ];

      fixed = true;

      const buttonArray = generateButtons(
        groupId,
        name,
        selectedButtonValue,
        handleToggle,
        handleClick,
        validationMessage,
        buttonsContent,
        fixed,
        contentWidth,
      );

      const formattedButtons = formatEvenOrOddButtons(
        buttonArray,
        fixed,
        contentWidth,
      );

      const evenContainerDiv = formattedButtons[0];
      expect(evenContainerDiv.props.children.length).toEqual(2);

      const button1 = evenContainerDiv.props.children[0];
      const button2 = evenContainerDiv.props.children[1];

      expect(button1.props.title).toEqual('button1');
      expect(button1.props.value).toEqual(1);
      expect(button1.props.id).toEqual('a');

      expect(button2.props.title).toEqual('button2');
      expect(button2.props.value).toEqual(2);
      expect(button2.props.id).toEqual('b');

      const { container } = render(evenContainerDiv);
      expect(container).toBeDefined();
      expect(evenContainerDiv.props.divWidth).toEqual('41.4rem');
    });

    it('formatEvenOrOddButtons even fixed with contentWidth', () => {
      buttonsContent = [
        {
          label: 'button1',
          value: 1,
          id: 'a',
        },
        {
          label: 'button2',
          value: 2,
          id: 'b',
        },
      ];

      fixed = true;
      contentWidth = '100px';

      const buttonArray = generateButtons(
        groupId,
        name,
        selectedButtonValue,
        handleToggle,
        handleClick,
        validationMessage,
        buttonsContent,
        fixed,
        contentWidth,
      );

      const formattedButtons = formatEvenOrOddButtons(
        buttonArray,
        fixed,
        contentWidth,
      );

      const evenContainerDiv = formattedButtons[0];
      expect(evenContainerDiv.props.children.length).toEqual(2);

      const button1 = evenContainerDiv.props.children[0];
      const button2 = evenContainerDiv.props.children[1];

      expect(button1.props.title).toEqual('button1');
      expect(button1.props.value).toEqual(1);
      expect(button1.props.id).toEqual('a');

      expect(button2.props.title).toEqual('button2');
      expect(button2.props.value).toEqual(2);
      expect(button2.props.id).toEqual('b');

      const { container } = render(evenContainerDiv);
      expect(container).toBeDefined();
      expect(evenContainerDiv.props.divWidth).toEqual('26.4rem');
    });
  });

  it('renders with minimal props', () => {
    const { container } = render(
      <SegmentedButtons
        id="toggle-group"
        name="test-toggle-group"
        handleToggle={() => {}}
        buttonsContent={[
          {
            label: 'button1',
            value: 1,
            id: 'a',
          },
          {
            label: 'button2',
            value: 2,
            id: 'b',
          },
          {
            label: 'button3',
            value: 3,
            id: 'c',
          },
          {
            label: 'button4',
            value: 4,
            id: 'd',
          },
        ]}
      />,
    );
    expect(container.innerHTML).toBeDefined();
  });

  it('calls handleToggle on toggle selection', () => {
    const onToggleCb = jest.fn();
    const { container } = render(
      <SegmentedButtons
        name="test-toggle-group-b"
        handleToggle={onToggleCb}
        buttonsContent={[
          {
            label: 'button1',
            value: 1,
            id: 'a',
          },
          {
            label: 'button2',
            value: 2,
            id: 'b',
          },
        ]}
      />,
    );
    const buttonA = container.querySelector('#a');
    fireEvent.click(buttonA);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual(1);

    const buttonB = container.querySelector('#b');
    fireEvent.click(buttonB);
    expect(onToggleCb).toHaveBeenCalled();
    expect(onToggleCb.mock.calls[0][0]).toEqual(1);
  });

  it('calls handleClick on toggle click', () => {
    const onToggleCb = jest.fn();
    const onClickCb = jest.fn();
    const { container } = render(
      <SegmentedButtons
        name="test-toggle-group-b"
        handleToggle={onToggleCb}
        handleClick={onClickCb}
        buttonsContent={[
          {
            label: 'button1',
            value: 1,
            id: 'a',
          },
          {
            label: 'button2',
            value: 2,
            id: 'b',
          },
        ]}
      />,
    );
    const toggleA = container.querySelector('#a');
    fireEvent.click(toggleA);
    fireEvent.click(toggleA);
    expect(onToggleCb).toHaveBeenCalledTimes(1);
    expect(onClickCb).toHaveBeenCalledTimes(2);
  });

  it('renders with tooltip', () => {
    const handleChangeCb = jest.fn();
    const tooltip = { title: 'test' };
    const { container } = render(
      <SegmentedButtons
        name="test-toggle-group-b"
        handleToggle={handleChangeCb}
        tooltip={tooltip}
        buttonsContent={[
          {
            label: 'button1',
            value: 1,
            id: 'a',
          },
          {
            label: 'button2',
            value: 2,
            id: 'b',
          },
        ]}
      />,
    );
    const tooltipWrapper = container.querySelector('[role="tooltip"]');
    expect(tooltipWrapper).toBeInTheDocument();
  });
});
