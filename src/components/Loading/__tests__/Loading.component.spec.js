import React from 'react';
import { render, wait } from '@testing-library/react';
import 'jest-styled-components';
import Loading from '../Loading';


describe('Loading', () => {
  jest.setTimeout(10000);
  it('render Loading component', () => {
    const { getByText, container } = render(<Loading />);
    const inputField = container.querySelector('.loading-message');
    expect(getByText('Loading...')).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });
  test('Loading call done function at the end', async () => {
    // element is initially not present...
    const LoadingDone = jest.fn();
    const messages = [
      'Checking your details',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
    ];
    const { getByText } = render(
      <Loading messages={messages} isDelayMessages onLoaded={LoadingDone} />,
    );
    await wait(() => {
      expect(getByText('Checking your details')).toBeInTheDocument();
    });
    await wait(() => {
      expect(getByText('Finding great transaction accounts')).toBeInTheDocument();
    });
    await wait(() => {
      expect(getByText('Sorting by lowest fees')).toBeInTheDocument();
    });
    await wait(() => {
      expect(getByText('Finding great transaction accounts')).toBeInTheDocument();
    });
    await wait(() => {
      expect(getByText('Sorting by lowest fees')).toBeInTheDocument();
      expect(LoadingDone).toHaveBeenCalled();
    });
  });
  test('Loading check force to stop prop', async () => {
    // element is initially not present...
    const messages = [
      'Checking your details',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
    ];
    let loadVar = false;
    const { getByText, container } = render(<Loading messages={messages} forceStop={loadVar} />);
    const progressDOM = container.querySelector('progress');
    expect(progressDOM).toHaveAttribute('value', '0');
    // wait for appearance
    await wait(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      expect(getByText('Sorting by lowest fees')).toBeInTheDocument();
    });
    await wait(() => {
      loadVar = true;
      // eslint-disable-next-line react/jsx-props-no-spreading
      expect(progressDOM).toHaveAttribute('value', '101');
    });
  });
});
