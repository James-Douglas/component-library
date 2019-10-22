import React from 'react';
import Button from '../../components/Button/Button.component';
import styles from './styles';

const TextButtonView = () => (
  <>
    <style jsx>{styles}</style>
    <div className="background manor-rich-text">
      <p>On light backgrounds:</p>
      <div className="lightbg centered">
        <Button id="text-btn01" type="text" content="Compare the Market" disabled={false} icon="info" href="#" target="_blank" />
      </div>
      <div className="lightbg centered">
        <Button id="text-btn01" type="text" content="Compare the Market" disabled={false} icon="info" iconAlignRight href="#" target="_blank" />
      </div>
      <p>On dark backgrounds:</p>
      <div className="darkbg centered">
        <Button id="text-btn02" type="text" onDark content="Compare the Market" disabled={false} icon="info" href="#" target="_blank" />
      </div>
      <div className="darkbg centered">
        <Button id="text-btn02" type="text" onDark content="Compare the Market" disabled={false} icon="info" iconAlignRight href="#" target="_blank" />
      </div>
    </div>
  </>
);

export default TextButtonView;
