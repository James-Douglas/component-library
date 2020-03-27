import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { renderHook, act } from '@testing-library/react-hooks';
import theme from '../../../themes/ctm.theme';
import { render } from '../../../testUtils';
import ToastManager from '../ToastManager.component';
import ToastProvider from '../../../providers/ToastProvider';
import useToasts from '../../../contexts/Toast/useToasts';
import 'jest-styled-components';

describe('ToastManager()', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('renders a container ', () => {
    const { container } = render(
      <ToastManager />,
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('adds a toast to the toasts state', () => {
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <ToastManager />
          {children}
        </ToastProvider>
      </ThemeProvider>
    );
    const { result } = renderHook(() => useToasts(), { wrapper });

    act(() => {
      result.current.addToast(
        {
          type: 'toast',
          variant: 'general',
          title: 'General Toast Message',
          content: 'This will auto dissmiss in 5 seconds',
          primaryAction: {
            content: 'Action goes here',
            link: '#',
          },
          icon: true,
          closeButton: true,
          autoClose: 5000,
        },
      );
    });
    const toastArray = result.current.toasts;

    expect(toastArray).toHaveLength(1);
    expect(result.current.toasts[0].props.type).toBe('toast');
    expect(result.current.toasts[0].props.variant).toBe('general');
    expect(result.current.toasts[0].props.title).toBe('General Toast Message');
  });

  it('removes a toast from the toasts state', () => {
    // eslint-disable-next-line react/prop-types
    const wrapper = ({ children }) => (
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <ToastManager />
          {children}
        </ToastProvider>
      </ThemeProvider>
    );
    const { result } = renderHook(() => useToasts(), { wrapper });

    let toastID = '';
    act(() => {
      toastID = result.current.addToast(
        {
          type: 'toast',
          variant: 'general',
          title: 'General Toast Message',
          content: 'This will auto dissmiss in 5 seconds',
          primaryAction: {
            content: 'Action goes here',
            link: '#',
          },
          icon: true,
          closeButton: true,
          autoClose: 5000,
        },
      );
    });

    act(() => {
      result.current.removeToast(toastID);
    });
    const toastArray = result.current.toasts;
    expect(toastArray).toHaveLength(0);
  });
});
