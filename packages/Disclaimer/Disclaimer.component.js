import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { useId } from '@comparethemarketau/manor-hooks';
import { Checkbox } from '@comparethemarketau/manor-checkbox';
import { StyledContent, StyledWrapper, StyledFieldValidation } from './Disclaimer.styles';

const Disclaimer = ({
  trackingLabel,
  id: propsId,
  isSelected,
  children,
  handleChange,
  handleFocus,
  handleBlur,
  validationMessage,
  topMargin,
  smallText,
}) => {
  const id = useId(propsId);
  const content = createRef();
  const [checked, setChecked] = useState(isSelected);

  useEffect(() => {
    setChecked(isSelected);
  }, [isSelected]);

  const changeHandler = () => {
    setChecked(!checked);
    if (handleChange) {
      handleChange(!checked);
    }
  };

  const handleContentClick = (e) => {
    if (e.target.nodeName.toLowerCase() !== 'a') {
      if (e.target === content.current || content.current.contains(e.target)) {
        const newChecked = !checked;
        setChecked(newChecked);
        if (handleChange) {
          handleChange(newChecked);
        }
      }
    }
  };

  return (
    <>
      <StyledWrapper>
        <Checkbox
          id={id}
          trackingLabel={trackingLabel}
          handleChange={changeHandler}
          isSelected={checked}
          invalid={!!validationMessage && validationMessage.length > 0}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />
        <StyledContent ref={content} onClick={handleContentClick} topMargin={topMargin}>
          <Typography variant={smallText ? 'body2' : 'body1'} component="span">
            {children}
          </Typography>
        </StyledContent>
      </StyledWrapper>
      <StyledFieldValidation>
        <FieldValidation message={validationMessage} />
      </StyledFieldValidation>
    </>
  );
};

Disclaimer.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier for the disclaimers' checkbox
   */
  id: PropTypes.string,
  /**
   * Defines the Disclaimers checked state.
   */
  isSelected: PropTypes.bool,
  /**
   * The content to be displayed next to the Checkbox
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Called on change with the value of the Disclaimers checkbox
   */
  handleChange: PropTypes.func,
  /**
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
  /**
   * Adds top margin to the disclaimer text
   */
  topMargin: PropTypes.bool,
  /**
   * Renders smaller (body2 rather than body1) text
   */
  smallText: PropTypes.bool,
};

Disclaimer.defaultProps = {
  id: null,
  children: [],
  isSelected: false,
  validationMessage: '',
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  topMargin: true,
  smallText: false,
};

export default Disclaimer;
