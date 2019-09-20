import React from 'react';
import Button from '../../components/Button/Button.component';
import './button-view.css';

const LinkButtonView = () => {
  
  return (
    <>
      <div className="background manor-rich-text">
        <p>On light backgrounds:</p>
        <div className='lightbg'>
          <Button id="text-btn01" btnType="link" content={'Compare the Market'} disabled={false} href={'#'} target={'_blank'} /> 
        </div>
        
        <p>On dark backgrounds:</p>
        <div className='darkbg'>
          <Button id="text-btn02" btnType="link" btnMode={'onDark'} content={'Compare the Market'} disabled={false} href={'#'} target={'_blank'} /> 
        </div>
        <div className='lightbg'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &nbsp;
          <Button id="text-btn02" btnType="link" content={'Compare the Market'} disabled={false} href={'#'} target={'_blank'} />
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. &nbsp;
          <Button id="text-btn02" btnType="link" content={'Compare the Market'} disabled={false} href={'#'} target={'_blank'} /> 
          . Duis aute irure dolor in reprehenderit.</p>
        </div>
      </div>
    </>
  );
};

export default LinkButtonView;
