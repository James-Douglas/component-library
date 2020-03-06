import React from 'react';
import PropTypes from 'prop-types';

const StoryTemplate = ({ background, children }) => (
  <div style={{ padding: '2%', background: '#f6f6f6' }}>
    <div style={{ background: 'white' }}>
      {children}
    </div>
  </div>
);

StoryTemplate.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
};

StoryTemplate.defaultProps = {
  background: 'white',
  children: [],
};

export default StoryTemplate;
