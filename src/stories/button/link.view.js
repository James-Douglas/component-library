import React from 'react';
import Button from '../../components/Button/Button.component';
import styles from './styles';

const LinkButtonView = () => (
  <>
    <style jsx>{styles}</style>
    <div className="background manor-rich-text">
      <p>On light backgrounds:</p>
      <div className="lightbg centered">
        <Button id="text-btn01" type="link" content="Compare the Market" disabled={false} href="#" target="_blank" />
      </div>

      <p>On dark backgrounds:</p>
      <div className="darkbg centered">
        <Button id="text-btn02" type="link" onDark content="Compare the Market" disabled={false} href="#" target="_blank" />
      </div>
      <div className="lightbg">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &nbsp;
          <Button id="text-btn02" type="link" content="Compare the Market" disabled={false} href="#" target="_blank" />
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. &nbsp;
          <Button id="text-btn02" type="link" content="Compare the Market" disabled={false} href="#" target="_blank" />
          . Duis aute irure dolor in reprehenderit.
        </p>
      </div>
    </div>
  </>
);

export default LinkButtonView;
