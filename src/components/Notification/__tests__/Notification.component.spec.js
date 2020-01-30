import React from 'react';
import { render } from '@testing-library/react';
import Notification from '../Notification.component';
import 'jest-styled-components';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

describe('Notification()', () => {
  it('Notification renders without props', () => {
    const { getByText } = render(<Notification>The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.</Notification>);
    expect(getByText('The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.')).toBeInTheDocument();
  });

  it('Notification type danger', () => {
    const setIsVisibleToast = jest.fn();
    const { container } = render(
      <Notification type="danger" icon closeButton handleClose={setIsVisibleToast}>
        <h5>Notification title goes here</h5>
        Provider will capture the full description.
      </Notification>,
    );
    const childDiv = container.firstChild;
    const closeBtn = container.firstChild.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-exclamation-circle')[0];
    closeBtn.click();
    expect(setIsVisibleToast).toBeCalled();
    expect(childDiv).toHaveStyleRule('border-left', `4px solid ${theme.colors.invalid}`);
    expect(dangerIcon).toBeInTheDocument();
  });
  it('Notification type warning', () => {
    const { container } = render(
      <Notification type="warning" icon>
        <h5>Notification title goes here</h5>
        Provider will capture the full description.
      </Notification>,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-exclamation-triangle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `4px solid ${theme.colors.warning}`);
    expect(dangerIcon).toBeInTheDocument();
  });
  it('Notification type success', () => {
    const { container } = render(
      <Notification type="success" icon>
        <h5>Notification title goes here</h5>
        Provider will capture the full description.
      </Notification>,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-check-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `4px solid ${theme.colors.secondaryDarker}`);
    expect(dangerIcon).toBeInTheDocument();
  });
  it('Notification type primary - default', () => {
    const { container } = render(
      <Notification>
        <h5>Notification title goes here</h5>
        Provider will capture the full description.
      </Notification>,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `4px solid ${theme.colors.primaryLight}`);
    expect(dangerIcon).toBeUndefined();
  });
  it('Notification type primary', () => {
    const { container } = render(
      <Notification type="primary" icon>
        <h5>Notification title goes here</h5>
        Provider will capture the full description.
      </Notification>,
    );
    const childDiv = container.firstChild;
    const dangerIcon = container.getElementsByClassName('fa-info-circle')[0];
    expect(childDiv).toHaveStyleRule('border-left', `4px solid ${theme.colors.primaryLight}`);
    expect(dangerIcon).toBeInTheDocument();
  });
});
