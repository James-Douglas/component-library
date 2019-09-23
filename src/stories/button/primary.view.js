import React from 'react';
import Button from '../../components/Button/Button.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import './button-view.css';

const PrimaryButtonView = () => {
  const desktop = useIsDesktop();
  let content;

  content = !desktop ? 'compare' : content = 'compare the market';

  return (
    <div className="background">
      <div className="container">
        <Button id="primary-btn01" btnType="primary" btnSize="md" content={content} disabled={false} />
        <Button id="primary-btn02" btnType="primary" btnSize="md" content={content} icon="info" disabled={false} />
        <Button id="primary-btn03" btnType="primary" btnSize="md" content={content} icon="info" iconAlignRight disabled={false} />
      </div>
    </div>
  );
};

export default PrimaryButtonView;
