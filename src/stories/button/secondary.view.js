import React from 'react';
import Button from '../../components/Button/Button.component';
import { useIsDesktop } from '../../utils/breakpoint';
import './button-view.css';

const SecondaryButtonView = () => {
  const desktop = useIsDesktop();
  let btn01Content;
  let btn02Content;
  let btn03Content;
  let icon;

  if (!desktop) {
    btn01Content = 'compare';
    btn02Content = 'Add';
    btn03Content = '';
    icon = 'check';
  } else {
    btn01Content = 'compare the market';
    btn02Content = 'Add bill';
    btn03Content = 'Edit details';
    icon = '';
  }

  return (
    <div className="background">
      <div className="container">
        <Button id="secondary-btn01" btnType="secondary" btnSize="md" content={btn01Content} disabled={false} />
        <Button id="secondary-btn02" btnType="secondary" btnMode="onDark" btnSize="md" content={btn01Content} disabled={false} />
        <Button id="secondary-btn03" btnType="secondary" btnSize="sm" content={btn02Content} disabled={false} />
        <Button id="secondary-btn04" btnType="secondary" btnMode="onDark" btnSize="sm" content={btn02Content} disabled={false} />
        <Button id="secondary-icon01" btnType="secondary" btnSize="sm" content={btn03Content} icon={icon} disabled={false} />
        <Button id="secondary-icon02" btnType="secondary" btnMode="onDark" btnSize="sm" content={btn03Content} icon={icon} disabled={false} />
      </div>
    </div>
  );
};

export default SecondaryButtonView;
