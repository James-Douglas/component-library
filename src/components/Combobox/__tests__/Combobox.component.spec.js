import React from 'react';
import { fireEvent, render } from '../../../testUtils';
import Combobox from '../Combobox.component';
import 'jest-styled-components';
import theme from '../../../themes/ctm.theme';

const apiData = ['delectus aut autem', 'quis ut nam facilis et officia qui', 'fugiat veniam minus', 'et presentation tempora', 'xfque dfsdf', 'presentation dfsdf que ffgddfg', 'presentation dfsdf que'];


let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Combo', () => {
  it('renders correct number options', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="que"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(3);
  });

  it('renders no options', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="nope"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
      />,
    );
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(0);
  });

  it('renders correct changed characterMinimum', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pres"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const list = container.getElementsByTagName('li')[0];
    expect(list).toBeUndefined();
  });

  it('on input, set value func is called', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'prese' } });
    expect(inputField).toHaveValue('prese');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField).toHaveValue('present');
  });

  it('calls focus and blur handlers when provided', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(
      <Combobox
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={() => {}}
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.focus(inputField);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(inputField);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('renders with value', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        value="presentation dfsdf que ffgddfg"
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const { value } = container.querySelector('#combo-id-first');
    expect(value).toEqual('presentation dfsdf que ffgddfg');
  });

  it('renders correct with link text', () => {
    const { getByText, container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent="Can’t find your address?"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });

  it('renders correct with list info box', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pre"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const link = container.getElementsByTagName('a')[0];
    expect(link).toBeUndefined();
  });

  it('renders correct when click', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
  });

  it('selects an item passed it via callback', () => {
    const onSelectCb = jest.fn();
    const { container } = render(
      <Combobox
        handleChange={onSelectCb}
        label="First Combo label"
        prefillValue="pre"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
    expect(onSelectCb.mock.calls[0][0]).toBe('et presentation tempora');
  });

  it('selects an item passed it via callback', () => {
    const onInputCb = jest.fn();
    const { container } = render(
      <Combobox
        handleInput={onInputCb}
        handleChange={() => {}}
        label="First Combo label"
        prefillValue="pre"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
      />,
    );
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField.value).toBe('present');
  });

  it('renders correct when click', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
  });

  it('renders correct when click on second', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent="Can’t find your address?"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const currentItem = container.getElementsByTagName('li')[1];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('presentation dfsdf que ffgddfg');
  });

  it('renders correct with link', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(getByText('Compare The Market')).toHaveAttribute('href', 'https://www.comparethemarket.com.au');
  });

  it('accessibility - arrow up', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[2];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const nextFocusItem = container.getElementsByTagName('li')[1];
    expect(nextFocusItem).toHaveFocus();
  });

  it('accessibility - default case ', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'e', code: 69 });
    expect(getByText('et presentation tempora')).toBeInTheDocument();
  });

  it('renders correct opposite characterMinimum and visibility list', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    const list = container.getElementsByTagName('li');
    const listwrap = container.querySelector('[role="listwrap"]');
    expect(listwrap).toHaveStyleRule('display', 'block');
    expect(list.length).toBe(3);
    inputField.blur();
    expect(listwrap).toHaveStyleRule('display', 'none');
  });

  it('renders correct with link href', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });

  it('renders correct with link href', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });

  it('renders correct without link', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(container).not.toHaveClass('item-manual-lookup');
  });

  it('check default border property', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputWrap = container.querySelector('input').parentNode;
    expect(inputWrap).toHaveStyleRule(`border: ${theme.borders.component}`);
  });

  it('renders correct when focus and blur', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputWrap = container.querySelector('input').parentNode;
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(inputWrap).toHaveStyleRule(`border: ${theme.combo.list.item.borderFocus}`);
    inputField.blur();
    expect(inputWrap).not.toHaveStyleRule(`border: ${theme.combo.list.item.borderFocus}`);
  });

  it('accessibility - arrow down', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const nextFocusItem = container.getElementsByTagName('li')[1];
    expect(nextFocusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const nextNextFocusItem = container.getElementsByTagName('li')[2];
    expect(nextNextFocusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const optionItem = container.querySelector('[role="buttonOption"]');
    expect(optionItem).toHaveFocus();
  });

  it('accessibility - goes by list and exit', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    const listwrap = container.querySelector('[role="listwrap"]');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusNextItem = container.getElementsByTagName('li')[1];
    expect(focusNextItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusNextNextItem = container.getElementsByTagName('li')[2];
    expect(focusNextNextItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusReturnItem = container.getElementsByTagName('li')[0];
    expect(focusReturnItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'Escape', code: 27 });
    expect(listwrap).toHaveStyleRule('display', 'none');
  });

  it('accessibility - Check arrowDown condition when length more', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pre"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - Check arrowDown condition when length more', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pre"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - goes up by list and exit', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[2];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusNextItem = container.getElementsByTagName('li')[1];
    expect(focusNextItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusFirstItem = container.getElementsByTagName('li')[0];
    expect(focusFirstItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusNItem = container.getElementsByTagName('li')[2];
    expect(focusNItem).toHaveFocus();
  });

  it('accessibility - ArrowUp maxLength condition', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - arrow up and continue focus on blue button', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const optionItem = container.querySelector('[role="buttonOption"]');
    expect(optionItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusLastItem = container.getElementsByTagName('li')[2];
    expect(focusLastItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusBeforeLastItem = container.getElementsByTagName('li')[1];
    expect(focusBeforeLastItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusFirstItem = container.getElementsByTagName('li')[0];
    expect(focusFirstItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    expect(optionItem).toHaveFocus();
    fireEvent.keyDown(optionItem, { key: 'Enter', code: 13 });
  });

  it('accessibility - arrow down then  click enter', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    fireEvent.keyDown(focusItem, { key: 'Enter', code: 13 });
    expect(inputField).toHaveValue('et presentation tempora');
  });

  it('accessibility - click enter', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    const link = container.getElementsByTagName('a')[0];
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const optionItem = container.querySelector('[role="buttonOption"]');
    expect(optionItem).toHaveFocus();
    fireEvent.keyDown(optionItem, { key: 'Enter', keyCode: 13 });
    expect(link).toHaveFocus();
    expect(getByText('Compare The Market')).toHaveAttribute('href', 'https://www.comparethemarket.com.au');
    fireEvent.keyDown(link, { key: 'Enter', code: 13 });
  });

  it('accessibility - click tab', () => {
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="prese"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={5}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('input');
    const clearButton = container.querySelector('.input-clear-button');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'Tab', code: 9 });
    clearButton.focus();
    expect(clearButton).toHaveFocus();
  });

  it('accessibility - default case ', () => {
    const { container, getByText } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'e', code: 69 });
    expect(getByText('et presentation tempora')).toBeInTheDocument();
  });

  it('check mobile version exit on esc', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const overlay = container.querySelector('[role="option"]');
    expect(container.firstChild.firstChild).toHaveClass('overlay');
    const input = container.querySelector('#combo-id-first');
    fireEvent.keyDown(input, { key: 'Escape', keyCode: 27 });
    expect(overlay).not.toBeInTheDocument();
  });

  it('close overlay when choose item', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const inputDefaultField = container.querySelector('#combo-id-first');
    inputDefaultField.focus();
    expect(inputDefaultField).toHaveFocus();
    fireEvent.keyDown(inputDefaultField, { key: 'ArrowDown', keyCode: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    focusItem.focus();
    fireEvent.keyDown(focusItem, { key: 'Enter', keyCode: 13 });
  });
  it('check padding', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const inputDefaultField = container.querySelector('#combo-id-first');
    inputDefaultField.focus();
    expect(inputDefaultField).toHaveFocus();
    const listitem = container.querySelectorAll('[role="listitem"]')[0];
    expect(listitem).toHaveStyleRule('padding', `${theme.spacing[8]} ${theme.spacing[40]}`);
    expect(listitem).toHaveStyleRule('cursor', 'pointer');
  });
  it('check on item close', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="pr"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const inputDefaultField = container.querySelector('#combo-id-first');
    inputDefaultField.focus();
    expect(inputDefaultField).toHaveFocus();
    const listitemSum = container.querySelectorAll('[role="listitem"]');
    expect(listitemSum.length).toBe(3);
    const listitem = listitemSum[1];
    fireEvent.mouseDown(listitem);
    const listitemSumAfterClick = container.querySelectorAll('[role="listitem"]');
    expect(listitemSumAfterClick.length).toBe(0);
  });
  it('empty state check condition ', () => {
    mockUseIsDesktopValue = false;
    const { getByText, container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue=""
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        helperMessage="Please start typing"
        tooltip={{ title: 'Combo component' }}
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const emptyState = getByText('Please start typing');
    expect(emptyState).toBeInTheDocument();
    expect(emptyState).toHaveStyleRule('font-size', `${theme.fontSize.base}`);
    expect(emptyState).toHaveStyleRule('color', `${theme.combo.list.item.color}`);
  });
  it('no results check condition ', () => {
    mockUseIsDesktopValue = false;
    const { getByText, container } = render(
      <Combobox
        handleChange={() => {}}
        prefillValue="random"
        label="First Combo label"
        apiData={apiData}
        id="combo-id-first"
        listInfoBoxContent={(<><span>Can’t find your address?</span> <a href="https://www.comparethemarket.com.au">Compare The Market</a></>)}
        required={false}
        characterMinimum={2}
        tooltip={{ title: 'Combo component' }}
        emptyStateHeading="Sorry, no results found"
      />,
    );
    const inputField = container.querySelector('#mobilecombo-id-first');
    inputField.click();
    const emptyState = getByText('Sorry, no results found');
    expect(emptyState).toBeInTheDocument();
  });
});
