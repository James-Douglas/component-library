import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Combo from '../Combo.component';

const apiData = ['delectus aut autem', 'quis ut nam facilis et officia qui', 'fugiat veniam minus', 'et presentation tempora', 'xfque dfsdf', 'presentation dfsdf que ffgddfg', 'presentation dfsdf que'];

describe('Combo', () => {
  it('renders correct number options', () => {
    const { container } = render(<Combo prefillValue="que" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(3);
  });
  it('renders no options', () => {
    const { container } = render(<Combo prefillValue="nope" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(0);
  });
  it('renders correct changed characterMinimum', () => {
    const { container } = render(<Combo prefillValue="pres" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const list = container.getElementsByTagName('li')[0];
    expect(list).toBeUndefined();
  });
  it('renders correct opposite characterMinimum and visibility list', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    const list = container.getElementsByTagName('li');
    const wrapList = container.querySelector('.section-wrap-shadow');
    expect(wrapList).toHaveClass('hidden');
    expect(list.length).toBe(3);
    inputField.focus();
    expect(wrapList).not.toHaveClass('hidden');
  });
  it('on input, set value func is called', () => {
    const { container } = render(<Combo label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    fireEvent.change(inputField, { target: { value: 'prese' } });
    expect(inputField).toHaveValue('prese');
    fireEvent.change(inputField, { target: { value: 'present' } });
    expect(inputField).toHaveValue('present');
  });
  it('renders correct with link text', () => {
    const { getByText } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });
  it('renders correct with link href', () => {
    const { getByText, container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const link = container.getElementsByTagName('a')[0];
    expect(link).toHaveClass('manor-button-link');
    expect(getByText('Can’t find your address?')).toBeInTheDocument();
  });
  it('renders correct with blue band', () => {
    const { container } = render(<Combo prefillValue="pre" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const link = container.getElementsByTagName('a')[0];
    expect(link).toBeUndefined();
  });
  it('renders correct when click', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const currentItem = container.getElementsByTagName('li')[0];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('et presentation tempora');
  });
  it('renders correct without link', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    expect(container).not.toHaveClass('item-manual-lookup');
  });
  it('renders correct when click on second', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const currentItem = container.getElementsByTagName('li')[1];
    const input = container.querySelector('input');
    fireEvent.mouseDown(currentItem);
    expect(input.value).toBe('presentation dfsdf que ffgddfg');
  });
  it('renders correct with link', () => {
    const { getByText } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    expect(getByText('Can’t find your address?').closest('a')).toHaveAttribute('href', 'https://www.comparethemarket.com.au/');
  });
  it('check default borderproperty', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputWrap = container.querySelector('.input-wrap');
    expect(inputWrap).toHaveClass('input-border');
  });
  it('renders correct when focus and blur', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputWrap = container.querySelector('.input-wrap');
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    expect(inputWrap).toHaveClass('input-wrap-focus');
    inputField.blur();
    expect(inputWrap).not.toHaveClass('input-wrap-focus');
  });

  it('accessibility - arrow down', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
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
    const BlueButtonFocusItem = container.querySelector('.item-manual-lookup');
    expect(BlueButtonFocusItem).toHaveFocus();
  });
  it('accessibility - arrow up', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const focusItem = container.getElementsByTagName('li')[2];
    expect(focusItem).toHaveFocus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const nextFocusItem = container.getElementsByTagName('li')[1];
    expect(nextFocusItem).toHaveFocus();
  });
  it('accessibility - goes by list and exit', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    const wrapList = container.querySelector('.section-wrap-shadow');
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
    expect(wrapList).toHaveClass('hidden');
  });
  it('accessibility - goes up by list and exit', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" required={false} characterMinimum={5} />);
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
  it('accessibility - arrow up and continue focus on blue button', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('#combo-id-first');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const BlueButtonFocusItem = container.querySelector('.item-manual-lookup');
    expect(BlueButtonFocusItem).toHaveFocus();

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
    const BlueButtonFocusItemAgain = container.querySelector('.item-manual-lookup');
    expect(BlueButtonFocusItemAgain).toHaveFocus();
  });
  it('accessibility - arrow down then  click enter', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowDown', code: 40 });
    const focusItem = container.getElementsByTagName('li')[0];
    fireEvent.keyDown(focusItem, { key: 'Enter', code: 13 });
    expect(inputField).toHaveValue('et presentation tempora');
  });
  it('accessibility - click enter', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} />);
    const inputField = container.querySelector('input');
    inputField.focus();
    fireEvent.keyDown(inputField, { key: 'ArrowUp', code: 38 });
    const BlueButtonFocusItemAgain = container.querySelector('.item-manual-lookup');

    fireEvent.keyDown(BlueButtonFocusItemAgain, { key: 'Enter', code: 13 });
    BlueButtonFocusItemAgain.focus();
  });
  it('accessibility - click tab', () => {
    const { container } = render(<Combo prefillValue="prese" label="First Combo label" apiData={apiData} id="combo-id-first" linkHref="https://www.comparethemarket.com.au/" linkText="Can’t find your address?" required={false} characterMinimum={5} tooltip={{ title: 'Combo component' }} />);
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
});
