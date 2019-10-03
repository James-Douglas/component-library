import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Container from '../components/Grid/Container/Container.component';

const styles = css`
  .grey {
    @apply bg-grey-lighter;
  }
  .centered {
    @apply w-full h-full flex justify-center items-center flex-col;
  }
`;

const StoryTemplate = ({ background, children }) => (
  <div className={`centered ${background}`}>
    <style jsx>{styles}</style>
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
