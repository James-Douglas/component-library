import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

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

const AccordionGroupChildren = (children) => {
  // null if all Accordions are closed or index of opened Accordion
  const [childIndex, setChildIndex] = useState(() => getInitialChildIndex(children));
  return React.Children.map(children, ((child, index) => React.cloneElement(child, {
    show: childIndex === index,
    onClickGroup: (isVisible) => {
      setChildIndex(isVisible ? index : null);
    },
  })));
};

const AccordionGroup = ({
  children,
}) => (
  <div className="accordion-group">
    <style jsx>{styles}</style>
    { AccordionGroupChildren(children) }
  </div>
);

AccordionGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default AccordionGroup;
