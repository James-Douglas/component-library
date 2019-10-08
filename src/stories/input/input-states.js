import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const logValue = (value) => {
  // eslint-disable-next-line no-console
  console.log(value);
};

const prefixSuffixView = () => (
  <>
    <style jsx>{styles}</style>
    <div className="white-background">

      <Input
        id="input-invalid"
        placeholder="Invalid input example"
        type="text"
        bordered
        disabled={false}
        invalid
        label="An invalid input"
        handleChange={(value) => logValue(value)}
      />

      <Input
        id="input-disabled"
        placeholder="Disabled input example"
        type="text"
        bordered
        disabled
        invalid={false}
        label="A disabled input"
        handleChange={(value) => logValue(value)}
      />

      <Input
        id="input-autofill"
        placeholder="Autofill example"
        type="text"
        prefillValue="autofilled value"
        bordered
        disabled={false}
        invalid={false}
        label="Autofill styling example"
        handleChange={(value) => logValue(value)}
      />

      <Input
        id="input-autofill-with-affix"
        placeholder="Autofill example"
        type="text"
        prefillValue="autofilled value"
        bordered
        disabled={false}
        invalid={false}
        prefixContent="$"
        suffixContent="?"
        label="Autofill styling example with affixes"
        handleChange={(value) => logValue(value)}
      />
    </div>
  </>
);

export default prefixSuffixView;
