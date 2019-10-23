import React from 'react';
import useIsDesktop from 'hooks/useIsDesktop';
import Button from 'components/Button/Button.component';
import styles from './styles';

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
    <>
      <style jsx>{styles}</style>
      <div className="background">
        <div className="container">
          <Button id="secondary-btn01" type="secondary" size="md" content={btn01Content} disabled={false} />
          <Button id="secondary-btn02" type="secondary" onDark size="md" content={btn01Content} disabled={false} />
          <Button id="secondary-btn03" type="secondary" size="sm" content={btn02Content} disabled={false} />
          <Button id="secondary-btn04" type="secondary" onDark size="sm" content={btn02Content} disabled={false} />
          <Button id="secondary-icon01" type="secondary" size="sm" content={btn03Content} icon={icon} disabled={false} />
          <Button id="secondary-icon02" type="secondary" onDark size="sm" content={btn03Content} icon={icon} disabled={false} />
        </div>
      </div>
    </>
  );
};

export default SecondaryButtonView;
