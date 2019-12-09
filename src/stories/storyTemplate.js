import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Grid/Container/Container.component';

const StoryTemplate = ({ background, children }) => (
  <div className={`${background} wrapper manor-rich-text`}>
    <Container>
      {children}
    </Container>
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
