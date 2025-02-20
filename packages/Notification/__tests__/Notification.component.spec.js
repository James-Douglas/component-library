import React from 'react';
import 'jest-styled-components';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render, fireEvent } from '../../../testUtils';
import Notification from '../Notification.component';
import ToastManager from '../ToastManager.component';

describe('Notification()', () => {
  it('Notification renders with minimal props', () => {
    const { getByText } = render(
      <Notification
        trackingLabel="test"
        content="The insurance provider"
      />,
    );
    expect(getByText('The insurance provider')).toBeInTheDocument();
  });

  it('Notification variant general, type inline - renders by default', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const infoIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.primary500}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(childDiv).toHaveStyleRule('position', 'relative');
    expect(infoIcon).toBeInTheDocument();
  });

  it('renders a background on hint notification if prop is supplied', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        type="hint"
        variant="warning"
        background
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.warning500}`);
    expect(childDiv).toHaveStyleRule('background', `${ctmTheme.colors.warning50}`);
  });

  it('renders a background on alertBanner notification if prop is supplied', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        type="alertBanner"
        variant="warning"
        background
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    expect(childDiv).not.toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.warning500}`);
    expect(childDiv).toHaveStyleRule('background', `${ctmTheme.colors.warning50}`);
  });

  it('renders the title with the same color as the border', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        type="hint"
        variant="error"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const heading = container.firstChild.firstChild.firstChild;
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.error500}`);
    expect(heading).toHaveStyleRule('color', `${ctmTheme.colors.error500}`);
  });

  it('does not render the title as the same color as the border if its variant={"warning"}', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        type="hint"
        variant="warning"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const heading = container.firstChild.firstChild.firstChild;
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.warning500}`);
    expect(heading).toHaveStyleRule('color', `${ctmTheme.colors.grey800}`);
  });

  it('Notification variant error', () => {
    const setIsVisibleNotification = jest.fn();
    const { container } = render(
      <Notification
        trackingLabel="test"
        variant="error"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
        closeButton
        handleClose={setIsVisibleNotification}
      />,
    );
    const childDiv = container.lastChild;
    const closeBtn = container.lastChild.lastChild;
    const errorIcon = container.getElementsByClassName('fa-engine-warning')[0];
    closeBtn.click();
    expect(setIsVisibleNotification).toBeCalled();
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.error500}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(errorIcon).toBeInTheDocument();
  });

  it('Notification variant warning', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        title="Notification title goes here"
        content="Provider will capture the full description."
        variant="warning"
        icon
      />,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-exclamation-triangle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.warning500}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(dangerIcon).toBeInTheDocument();
  });

  it('Notification variant success', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        variant="success"
        icon
        title="Notification title goes here"
        content="Provider will capture the full description."
      />,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-check-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.success500}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(dangerIcon).toBeInTheDocument();
  });

  it('Notification variant general', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const infoIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.primary500}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(infoIcon).toBeInTheDocument();
  });

  it('Notification with primary and secondary actions', () => {
    const { container, getByText } = render(
      <Notification
        trackingLabel="test"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
        primaryAction={
          {
            content: 'primary action',
            link: '#',
          }
        }
        secondaryAction={
          {
            content: 'secondary action',
            link: '#/',
          }
        }
      />,
    );
    const links = container.querySelectorAll('a');
    expect(links[0].getAttribute('href')).toBe('#');
    expect(links[1].getAttribute('href')).toBe('#/');
    expect(getByText('primary action')).toBeInTheDocument();
    expect(getByText('secondary action')).toBeInTheDocument();
  });

  it('renders a toast notification', () => {
    const { container } = render(
      <>
        <ToastManager />
        <div id="test-wrap">
          <Notification
            trackingLabel="test"
            type="toast"
            position="bottom"
            variant="general"
            title="Notification title goes here"
            content="Provider will capture the full description."
            icon
          />
        </div>
      </>,
    );
    const childDiv = container.querySelector('#test-wrap').firstChild;
    const infoIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).toHaveStyleRule('position', 'relative');
    expect(childDiv).toHaveStyleRule('width', `${ctmTheme.minWidth.xs}`);
    expect(childDiv).toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.primary500}`);
    expect(infoIcon).toBeInTheDocument();
  });

  it('renders a hint notification', () => {
    const { container } = render(
      <Notification
        trackingLabel="test"
        type="hint"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const infoIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).not.toHaveStyleRule('position', 'absolute');
    expect(childDiv).not.toHaveStyleRule('bottom', '0');
    expect(childDiv).not.toHaveStyleRule('min-width', `${ctmTheme.minWidth.xs}`);
    expect(childDiv).not.toHaveStyleRule('box-shadow', ctmTheme.notification.shadow);
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.primary500}`);
    expect(infoIcon).toBe(undefined);
  });

  it('renders a hint notification with action callback', () => {
    const primaryAction = jest.fn();
    const action = {
      content: 'Test',
      handleClick: primaryAction,
    };
    const { getByText } = render(
      <Notification
        trackingLabel="test"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
        primaryAction={action}
      />,
    );
    const actionItem = getByText('Test');

    fireEvent.click(actionItem);
    expect(primaryAction).toHaveBeenCalledTimes(1);
  });

  it('renders a alertBanner notification with action callback when action has no icon', () => {
    const primaryAction = jest.fn();
    const action = {
      content: 'Test',
      handleClick: primaryAction,
    };
    const { getByText } = render(
      <Notification
        trackingLabel="test"
        type="alertBanner"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        hideActionIcons
        primaryAction={action}
      />,
    );
    const actionItem = getByText('Test');

    fireEvent.click(actionItem);
    expect(primaryAction).toHaveBeenCalledTimes(1);
  });

  it('alertBanner Notification with primary and secondary actions when action has no icon', () => {
    const { container, getByText } = render(
      <Notification
        trackingLabel="test"
        type="alertBanner"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        hideActionIcons
        primaryAction={
          {
            content: 'primary action',
            link: '#',
          }
        }
        secondaryAction={
          {
            content: 'secondary action',
            link: '#/',
          }
        }
      />,
    );
    const links = container.querySelectorAll('a');
    expect(links[0].getAttribute('href')).toBe('#');
    expect(links[1].getAttribute('href')).toBe('#/');
    expect(getByText('primary action')).toBeInTheDocument();
    expect(getByText('secondary action')).toBeInTheDocument();
  });

  describe('interaction tracking', () => {
    it('tracks dismiss events', () => {
      const { trackEvent } = useTracking();
      const { container } = render(
        <Notification
          trackingLabel="test"
          content="The insurance provider"
          closeButton
        />,
      );
      const closeBtn = container.lastChild.lastChild;
      closeBtn.click();
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Dismiss',
          ixn_label: 'test',
          ixn_object: 'Notification',
          ixn_type: 'Inline',
          ixn_value: '',
        },
      });
    });
  });
});
