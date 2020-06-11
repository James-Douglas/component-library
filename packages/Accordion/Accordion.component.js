import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionPanel from './AccordionPanel.component';

export const getInitialChildIndex = (children) => {
  let initialChildIndex = null;
  // find first accordion to show
  const childrenArray = React.Children.toArray(children);
  // eslint-disable-next-line no-unused-vars
  for (const [index, child] of childrenArray.entries()) {
    if (child.props.show === true) {
      initialChildIndex = index;
      break;
    }
  }
  return initialChildIndex;
};

const AccordionGroupChildren = (children, className, collapse) => {
  // null if all Accordions are closed or index of opened Accordion
  const [childIndex, setChildIndex] = useState(() => getInitialChildIndex(children));
  if (collapse) {
    return React.Children.map(children, ((child, index) => React.cloneElement(child, {
      show: childIndex === index,
      className,
      handleClickGroup: (isVisible) => {
        setChildIndex(isVisible ? index : null);
      },
    })));
  }
  return children;
};

const Accordion = ({
  children,
  className,
  collapse,
}) => (
  <>
    { AccordionGroupChildren(children, className, collapse) }
  </>
);

Accordion.propTypes = {
  /**
   * Accordion components to be added to the AccordionGroup
   */
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([AccordionPanel]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([AccordionPanel]),
      }),
    ),
  ]).isRequired,
  /**
   * Classes to be applied to the AccordionGroup
   */
  className: PropTypes.string,
  /**
   * To add accordion-like group management to a collapsible area
   */
  collapse: PropTypes.bool,
};

Accordion.defaultProps = {
  className: '',
  collapse: true,
};


export default Accordion;
