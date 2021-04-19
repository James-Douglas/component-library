import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { ExpressiveInput } from '@comparethemarketau/manor-input';
import StyledBackground from '../../../view-styles';

const prefixSuffixView = () => {
  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StyledBackground color="white">
      <ExpressiveInput
        label="With prefix and suffix"
        id="input-one"
        placeholder="Placeholder"
        type="text"
        required={false}
        disabled={false}
        prefixContent={<FontAwesomeIcon icon={faFolder} />}
        suffixContent={<FontAwesomeIcon icon={faSearch} />}
        handleChange={(value) => logValue(value)}
      />

      <ExpressiveInput
        label="With prefix"
        id="input-two"
        placeholder="Placeholder two"
        type="text"
        required={false}
        disabled={false}
        prefixContent="prefix"
        handleChange={(value) => logValue(value)}
      />

      <ExpressiveInput
        label="With suffix"
        id="input-three"
        placeholder="Placeholder three"
        type="text"
        required={false}
        disabled={false}
        suffixContent="suffix"
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default prefixSuffixView;
