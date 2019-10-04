import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const greyBackgroundView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Grey background input view',
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grey-background">
        <Input
          id="default-id"
          placeholder="Placeholder one"
          type="text"
          bordered={false}
          required={false}
          autofill={false}
          disabled={false}
          prefixContent={'fsdfs'}
          invalid={false}
          label="[Fieldset label] With tooltip"
          tooltip={tooltip}
        />
        <Input
          id="input-two"
          placeholder="Placeholder two"
          type="text"
          bordered={false}
          required={false}
          autofill={false}
          disabled={false}
          invalid={false}
          label="[Fieldset label] Without tooltip"
        />
      </div>
    </>
  );
};

export default greyBackgroundView;
