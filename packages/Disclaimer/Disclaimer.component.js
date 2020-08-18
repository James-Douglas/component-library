import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { useId } from '@comparethemarketau/manor-hooks';
import { Checkbox } from '@comparethemarketau/manor-checkbox';
import { StyledContent, StyledWrapper } from './Disclaimer.styles';

const Disclaimer = ({
  id: propsId, isSelected, children, handleChange, handleFocus, handleBlur,
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
    <StyledWrapper>
      <Checkbox id={id} handleChange={changeHandler} isSelected={checked} handleFocus={handleFocus} handleBlur={handleBlur} />
      <StyledContent ref={content} onClick={handleContentClick}>
        <Typography variant="body1">
          {children}
        </Typography>
      </StyledContent>
    </StyledWrapper>
  );
};

Disclaimer.propTypes = {
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
};

Disclaimer.defaultProps = {
  id: null,
  children: [],
  isSelected: false,
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
};

export default Disclaimer;
