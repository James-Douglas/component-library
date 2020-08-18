import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import {
  StyledFeatureList, StyledFeatureListItemIcon, StyledFeatureListItemText, StyledListItem,
} from './FeatureList.styles';

const FeatureList = ({ features, className }) => (
  <StyledFeatureList>
    {features.map((feature) => (
      <StyledListItem key={feature} className={className}>
        <StyledFeatureListItemIcon><FontAwesomeIcon icon={faCheck} /></StyledFeatureListItemIcon>
        <StyledFeatureListItemText>
          <Typography variant="body1">
            {feature}
          </Typography>
        </StyledFeatureListItemText>
      </StyledListItem>
    ))}
  </StyledFeatureList>
);

FeatureList.propTypes = {
  /**
   * The features/benefits to be listed
   */
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Classes to be applied to the FeatureList component
   */
  className: PropTypes.string,
};

FeatureList.defaultProps = {
  className: '',
};

export default FeatureList;
