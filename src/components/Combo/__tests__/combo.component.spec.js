import React from 'react';
import { fireEvent, render } from '../../../testUtils';
import Combo from '../Combo.component';
import 'jest-styled-components';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();
const apiData = ['delectus aut autem', 'quis ut nam facilis et officia qui', 'fugiat veniam minus', 'et presentation tempora', 'xfque dfsdf', 'presentation dfsdf que ffgddfg', 'presentation dfsdf que'];

describe('Combo', () => {
  it('renders correct number options', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="que" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(3);
  });

  it('renders no options', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="nope" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(0);
  });

  it('renders correct changed characterMinimum', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="pres" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const list = container.getElementsByTagName('li')[0];
    expect(list).toBeUndefined();
  });

  it('on input, set value func is called', () => {
    const { container } = render(<Combo handleChange={() => {}} label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'prese' } });
    expect(inputField).toHaveValue('prese');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField).toHaveValue('present');
  });

  it('renders with value', () => {
    const { container } = render(<Combo handleChange={() => {}} value="presentation dfsdf que ffgddfg" prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const { value } = container.querySelector('#combo-id-first');
    expect(value).toEqual('presentation dfsdf que ffgddfg');
  });

  it('renders correct with link text', () => {
    const { getByText } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });

  it('renders correct with blue band', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="pre" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const link = container.getElementsByTagName('a')[0];
    expect(link).toBeUndefined();
  });

  it('renders correct when click', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
  });

  it('selects an item passed it via callback', () => {
    const onSelectCb = jest.fn();
    const { container } = render(<Combo handleChange={onSelectCb} label="First Combo label" prefillValue="pre" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={2} />);
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
    expect(onSelectCb.mock.calls[0][0]).toBe('et presentation tempora');
  });

  it('selects an item passed it via callback', () => {
    const onInputCb = jest.fn();
    const { container } = render(<Combo handleInput={onInputCb} handleChange={() => {}} label="First Combo label" prefillValue="pre" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={2} />);
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField.value).toBe('present');
  });

  it('renders correct when click', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
  });

  it('renders correct when click on second', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const currentItem = container.getElementsByTagName('li')[1];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('presentation dfsdf que ffgddfg');
  });

  it('renders correct with link', () => {
    const { getByText } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    expect(getByText('Can’t find your address?').closest('a')).toHaveAttribute('href', 'https://www.comparethemarket.com.au/');
  });

  it('accessibility - arrow up', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
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
    const { container, getByText } = render(<Combo handleChange={() => {}} prefillValue="pr" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={2} tooltip={{ title: 'Combo component' }} />);
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'e', code: 69 });
    expect(getByText('et presentation tempora')).toBeInTheDocument();
  });

  it('renders correct opposite characterMinimum and visibility list', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    const list = container.getElementsByTagName('li');
    const listwrap = container.querySelector('[role="listwrap"]');
    expect(listwrap).toHaveStyleRule('display', 'none');
    expect(list.length).toBe(3);
    inputField.focus();
    expect(listwrap).toHaveStyleRule('display', 'block');
  });

  it('renders correct with link href', () => {
    const { getByText } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });

  it('renders correct without link', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    expect(container).not.toHaveClass('item-manual-lookup');
  });

  it('check default border property', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputWrap = container.querySelector('input').parentNode;
    expect(inputWrap).toHaveStyleRule(`border: ${theme.borders.component}`);
  });

  it('renders correct when focus and blur', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputWrap = container.querySelector('input').parentNode;
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(inputWrap).toHaveStyleRule(`border: ${theme.combo.list.item.borderFocus}`);
    inputField.blur();
    expect(inputWrap).not.toHaveStyleRule(`border: ${theme.combo.list.item.borderFocus}`);
  });

  it('accessibility - arrow down', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
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
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
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
    const { container } = render(<Combo handleChange={() => {}} prefillValue="pre" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - Check arrowDown condition when length more', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="pre" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - goes up by list and exit', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
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
    const { container } = render(<Combo handleChange={() => {}} prefillValue="pr" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[0];
    expect(focusItem).not.toBeDefined();
  });

  it('accessibility - arrow up and continue focus on blue button', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
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
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    fireEvent.keyDown(focusItem, { key: 'Enter', code: 13 });
    expect(inputField).toHaveValue('et presentation tempora');
  });

  it('accessibility - click enter', () => {
    const { container, getByText } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    const link = container.getElementsByTagName('a')[0];
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const optionItem = container.querySelector('[role="buttonOption"]');
    expect(optionItem).toHaveFocus();
    fireEvent.keyDown(optionItem, { key: 'Enter', keyCode: 13 });
    expect(link).toHaveFocus();
    expect(getByText('Can’t find your address?').closest('a')).toHaveAttribute('href', 'https://www.comparethemarket.com.au/');
    fireEvent.keyDown(link, { key: 'Enter', code: 13 });
  });

  it('accessibility - click tab', () => {
    const { container } = render(<Combo handleChange={() => {}} prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} tooltip={{ title: 'Combo component' }} />);
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
    const { container, getByText } = render(<Combo handleChange={() => {}} prefillValue="pr" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={2} tooltip={{ title: 'Combo component' }} />);
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'e', code: 69 });
    expect(getByText('et presentation tempora')).toBeInTheDocument();
  });
});
