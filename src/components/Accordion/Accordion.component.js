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
  size,
  onClickGroup,
}) => {
  const [isVisible, setIsVisible] = useState(show);
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

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  return (
    <div className={`accordion ${visibleClass}  manor-rich-text `}>
      <style jsx>{styles}</style>
      <div onClick={toggleTrueFalse} onKeyUp={toggleTrueFalse} role="button" tabIndex={0} className={`accordion-head ${visibleClass ? 'manor-h5' : 'manor-h4'}`}>
        <FluidContainer>
          <Row>
            <Column col="9" lg="11">{title}</Column>
            <Column col="3" lg="1">
              <div className="accordion-caret">
                <Icon name={`arrow${arrowName}`} size={size} />
              </div>
            </Column>
          </Row>
        </FluidContainer>
      </div>
      <div className="accordion-body">
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
  size: PropTypes.number,
  onClickGroup: PropTypes.func,
};

Accordion.defaultProps = {
  children: '',
  title: '',
  show: false,
  size: 1.5,
  onClickGroup: null,
};

export default Accordion;
