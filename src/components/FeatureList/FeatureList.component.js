import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import Icon from '../Icon/Icon.component';

const styles = css`
  .manor-feature-list {
    @apply ml-0;
  }
  
  .feature-list-item {
    @apply flex mb-4;
  }
  
  .feature-list-item-icon {
    @apply flex flex-col justify-center text-green-aa fill-current;
  }
  
  .feature-list-item-text {
    @apply ml-8;
  }
`;

const FeatureList = ({ features }) => (
  <ul className="manor-feature-list">
    <style jsx>{styles}</style>
    {features.map((feature) => (
      <li key={feature} className="feature-list-item">
        <span className="feature-list-item-icon"><Icon name="check" size={1} /></span>
        <span className="feature-list-item-text manor-body1">{feature}</span>
      </li>
    ))}
  </ul>
);

FeatureList.propTypes = {
  /**
   * The features/benefits to be listed
   */
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureList;
