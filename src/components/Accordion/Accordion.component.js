import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../Icon/Icon.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import FluidContainer from '../Grid/Container/Fluid.component';

const Accordion = ({
  title,
  children,
  show,
  iconSize,
  onClickGroup,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isFocus, setIsFocus] = useState(false);
  const visibleClass = isVisible ? '' : 'hide';
  const arrowName = isVisible ? 'Top' : 'Bottom';


  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (onClickGroup) {
        onClickGroup(!isVisible);
      }
      return setIsVisible(!isVisible);
    }, 1);
  };

  const toggleTrueFalseOnKey = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      toggleTrueFalse();
    }
  };

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={`accordion ${visibleClass} ${isFocus ? 'on-focus' : 'on-blur'} manor-rich-text `} role="tablist" aria-label="Information tabs">
      <style jsx>{styles}</style>
      <div
        onClick={toggleTrueFalse}
        onKeyDown={toggleTrueFalseOnKey}
        className={`accordion-head ${visibleClass ? 'manor-h5' : 'manor-h4'}`}
        role="tab"
        aria-selected="true"
        tabIndex="0"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <FluidContainer>
          <Row>
            <Column col="9" lg="11">{title}</Column>
            <Column col="3" lg="1">
              <div className="accordion-caret">
                <Icon name={`arrow${arrowName}`} size={iconSize} />
              </div>
            </Column>
          </Row>
        </FluidContainer>
      </div>
      <div className="accordion-body" role="tabpanel">
        <FluidContainer>
          <Row className="row-view">
            <Column col="12">{children}</Column>
          </Row>
        </FluidContainer>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.node,
  show: PropTypes.bool,
  iconSize: PropTypes.number,
  onClickGroup: PropTypes.func,
};

Accordion.defaultProps = {
  children: '',
  title: '',
  show: false,
  iconSize: 1.5,
  onClickGroup: null,
};

export default Accordion;
