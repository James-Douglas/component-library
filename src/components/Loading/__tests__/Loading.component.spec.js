import React from 'react';
import { render, wait } from '../../../testUtils';
import 'jest-styled-components';
import LoadingComponent from '../Loading.component';


describe('Loading', () => {
  jest.setTimeout(10000);
  it('render Loading component', () => {
    const { getByText, container } = render(<LoadingComponent />);
    const inputField = container.querySelector('.loading-message');
    expect(getByText('Loading...')).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it('calls done function when complete', async () => {
    // element is initially not present...
    const loadingDone = jest.fn();
    const messages = [
      'Checking your details',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
    ];
    const { getByText } = render(
      <LoadingComponent messages={messages} isDelayMessages handleLoaded={loadingDone} />,
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
      expect(loadingDone).toHaveBeenCalled();
    });
  });

  it('completes when forceStop is true', async () => {
    const messages = [
      'Checking your details',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
    ];
    let loadVar = false;
    const { getByText, container } = render(<LoadingComponent messages={messages} forceStop={loadVar} />);
    const progressDOM = container.querySelector('progress');
    expect(progressDOM).toHaveAttribute('value', '0');
    // wait for appearance
    await wait(() => {
      expect(getByText('Sorting by lowest fees')).toBeInTheDocument();
    });
    await wait(() => {
      loadVar = true;
      expect(progressDOM).toHaveAttribute('value', '101');
    });
  });

  it('stops at maxProgress when given', async () => {
    const loadingDone = jest.fn();
    const messages = [
      'Checking your details',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
      'Finding great transaction accounts',
      'Sorting by lowest fees',
    ];
    const { getByText, container } = render(<LoadingComponent messages={messages} maxProgress={80} handleLoaded={loadingDone} />);

    await wait(() => getByText('Sorting by lowest fees'));

    const progressDOM = container.querySelector('progress');
    await wait(() => {
      expect(loadingDone).toHaveBeenCalled();
      expect(progressDOM).toHaveAttribute('value', '81');
    });
  });
});
