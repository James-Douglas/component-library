import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {

  const tooltipEmail = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view'
  };

  const tooltipMobile = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view'
  };

  const tooltipAge = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view'
  };

  return (
    <>
    <style jsx>{styles}</style>
      <div className="white-background">
        <Input 
          id={'input-email'} 
          placeholder='Placeholder one' 
          type='email'
          bordered={true} 
          optional={true} 
          autofill={false}
          disabled={false}
          invalid={false}
          label='Your email address'
          tooltip={tooltipEmail}
        />

        <Input 
          id={'input-mobile'} 
          placeholder='Placeholder two' 
          type='tel'
          bordered={true} 
          optional={true} 
          autofill={false}
          disabled={false}
          invalid={false}
          label='Your mobile number'
          tooltip={tooltipMobile}
        />

        <Input 
          id={'input-age'} 
          placeholder='Placeholder three' 
          type='number'
          bordered={true} 
          optional={true} 
          autofill={false}
          disabled={false}
          invalid={false}
          label='Your age'
          tooltip={tooltipAge}
        />

        <Input 
          id={'input-long-label'} 
          placeholder='Placeholder three' 
          type='text'
          bordered={true} 
          optional={true} 
          autofill={false}
          disabled={false}
          invalid={false}
          label='This is an example of a longer question for an input type, to see how it floats on lower screen sizes'
        />
      </div>
    </>
  )
}

export default prefixSuffixView;