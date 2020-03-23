import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../Checkbox/Checkbox.component';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  margin-top: 0.6rem;
  margin-left: ${({ theme }) => theme.spacing[12]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Disclaimer = ({
  id, isSelected, children, handleChange, handleFocus, handleBlur,
}) => {
  const content = createRef();
  const [checked, setChecked] = useState(isSelected);

  useEffect(() => {
    setChecked(isSelected);
  }, [isSelected]);

  const changeHandler = () => {
    setChecked(!checked);
    if (handleChange) {
      handleChange(id);
    }
  };

  const handleContentClick = (e) => {
    if (e.target === content.current) {
      const newChecked = !checked;
      setChecked(newChecked);
      if (handleChange) {
        handleChange(newChecked);
      }
    }
  };

  return (
    <StyledWrapper>
      <Checkbox id={id} handleChange={changeHandler} isSelected={checked} handleFocus={handleFocus} handleBlur={handleBlur} />
      <StyledContent ref={content} onClick={handleContentClick}>
        {children}
      </StyledContent>
    </StyledWrapper>
  );
};

Disclaimer.propTypes = {
  /**
   * Applied to the disclaimers' checkbox
   */
  id: PropTypes.string.isRequired,
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
  children: [],
  isSelected: false,
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
};

export default Disclaimer;
