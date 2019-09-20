import React from 'react';
import Button from '../../components/Button/Button.component';
import './button-view.css';

const TextButtonView = () => {
  
  return (
    <div className="background manor-rich-text">
      <p>On light backgrounds:</p>
      <div className='lightbg'>
        <Button id="text-btn01" btnType="text" content={'Compare the Market'} disabled={false} icon={'info'} href={'#'} target={'_blank'} /> 
      </div>
      <div className='lightbg'>
      <Button id="text-btn01" btnType="text" content={'Compare the Market'} disabled={false} icon={'info'} iconAlignRight={true} href={'#'} target={'_blank'} />   
      </div>
      <p>On dark backgrounds:</p>
      <div className='darkbg'>
        <Button id="text-btn02" btnType="text" btnMode={'onDark'} content={'Compare the Market'} disabled={false} icon={'info'} href={'#'} target={'_blank'} /> 
      </div>
      <div className='darkbg'>
        <Button id="text-btn02" btnType="text" btnMode={'onDark'} content={'Compare the Market'} disabled={false} icon={'info'} iconAlignRight={true} href={'#'} target={'_blank'} /> 
      </div>
    </div>
  );
};

export default TextButtonView;
