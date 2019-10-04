import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">

        <Input
          id="input-invalid"
          placeholder="Invalid input example"
          type="text"
          bordered
          autofill={false}
          disabled={false}
          invalid
          label="An invalid input"
        />

        <Input
          id="input-disabled"
          placeholder="Disabled input example"
          type="text"
          bordered
          autofill={false}
          disabled
          invalid={false}
          label="A disabled input"
        />

        <Input
          id="input-autofill"
          placeholder="Autofill example"
          type="text"
          prefillValue="autofilled value"
          bordered
          autofill
          disabled={false}
          invalid={false}
          label="Autofill styling example"
        />

        <Input
          id="input-autofill-with-affix"
          placeholder="Autofill example"
          type="text"
          prefillValue="autofilled value"
          bordered
          autofill
          disabled={false}
          invalid={false}
          prefixContent={'$'}
          suffixContent={'?'}
          label="Autofill styling example with affixes"
        />    
      </div>
    </>
  );
};

export default prefixSuffixView;
