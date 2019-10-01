import React from 'react';
import Button from '../../components/Button/Button.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import styles from './styles';

const logClick = (e) => {
  // eslint-disable-next-line no-console
  console.log(e.target);
};
const PrimaryButtonView = () => {
  const desktop = useIsDesktop();
  let content;

  content = !desktop ? 'compare' : content = 'compare the market';

  return (
    <>
      <style jsx>{styles}</style>
      <div className="background">
        <div className="container">
          <Button id="primary-btn01" btnType="primary" btnSize="md" content={content} disabled={false} handleClick={logClick} />
          <Button id="primary-btn02" btnType="primary" btnSize="md" content={content} icon="info" disabled={false} handleClick={logClick} />
          <Button id="primary-btn03" btnType="primary" btnSize="md" content={content} icon="info" iconAlignRight disabled={false} handleClick={logClick} />
        </div>
      </div>
    </>
  );
};

export default PrimaryButtonView;
