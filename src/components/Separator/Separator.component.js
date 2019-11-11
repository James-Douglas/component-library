import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Separator = ({ type }) => {
  const typeClass = (type === 'vertical') ? 'vertical' : 'horizontal';
  return (
    <>
      <style jsx>{styles}</style>
      <hr className={`separator ${typeClass}`} />
    </>
  );
};

Separator.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
};

Separator.defaultProps = {
  type: 'horizontal',
};

export default Separator;
