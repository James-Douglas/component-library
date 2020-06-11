import React from 'react';
import 'jest-styled-components';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '../../../testUtils';
import Notification from '../Notification.component';

describe('Notification()', () => {
  it('Notification renders with minimal props', () => {
    const { getByText } = render(
      <Notification
        content="The insurance provider"
      />,
    );
    expect(getByText('The insurance provider')).toBeInTheDocument();
  });

  it('Notification variant general, type inline - renders by default', () => {
    const { container } = render(
      <Notification
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

  it('renders the title with the same color as the border', () => {
    const { container } = render(
      <Notification
        type="hint"
        variant="error"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const heading = container.querySelector('p');
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.error500}`);
    expect(heading).toHaveStyleRule('color', `${ctmTheme.colors.error500}`);
  });

  it('does not render the title as the same color as the border if its variant={"warning"}', () => {
    const { container } = render(
      <Notification
        type="hint"
        variant="warning"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
    const heading = container.querySelector('p');
    expect(childDiv).toHaveStyleRule('border-left', `0.4rem solid ${ctmTheme.colors.warning500}`);
    expect(heading).toHaveStyleRule('color', `${ctmTheme.colors.grey800}`);
  });

  it('Notification variant error', () => {
    const setIsVisibleNotification = jest.fn();
    const { container } = render(
      <Notification
        variant="error"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
        closeButton
        handleClose={setIsVisibleNotification}
      />,
    );
    const childDiv = container.firstChild;
    const closeBtn = container.firstChild.firstChild;
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
      <Notification
        type="toast"
        position="bottom"
        variant="general"
        title="Notification title goes here"
        content="Provider will capture the full description."
        icon
      />,
    );
    const childDiv = container.firstChild;
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
});
