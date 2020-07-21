import React from 'react';
import { waitForElementToBeRemoved } from '@testing-library/react';
import { render, act } from '../../../testUtils';
import ToastNotification from '../ToastNotification.component';
import ToastManager from '../ToastManager.component';
import { addToast, removeToast } from '../events';
import 'jest-styled-components';

describe('ToastManager()', () => {
  it('renders a container ', () => {
    const { container } = render(
      <ToastManager />,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('adds a toast', () => {
    const { getByText } = render(<ToastManager />);

    act(() => {
      addToast(<ToastNotification
        variant="general"
        title="General Toast Message"
        content="This will auto dismiss in 5 seconds"
        primaryAction={{
          content: 'Action goes here',
          link: '#',
        }}
        icon
        closeButton
        autoClose={5000}
      />);
    });

    expect(getByText('General Toast Message')).toBeInTheDocument();
  });

  it('removes a toast from the toasts state', async () => {
    const { queryByText } = render(<ToastManager />);

    act(() => {
      addToast(<ToastNotification
        variant="general"
        title="General Toast Message"
        content="This will auto dismiss in 5 seconds"
        primaryAction={{
          content: 'Action goes here',
          link: '#',
        }}
        icon
        closeButton
        autoClose={5000}
        id="testtoast"
      />);
    });

    setTimeout(() => {
      act(() => {
        removeToast('testtoast');
      });
    }, 1);
    await waitForElementToBeRemoved(() => queryByText('General Toast Message'));
  });
});
