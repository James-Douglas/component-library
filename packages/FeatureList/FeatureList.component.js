import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import {
  StyledFeatureList, StyledFeatureListItemIcon, StyledFeatureListItemText, StyledListItem,
} from './FeatureList.styles';

const FeatureList = ({ features, className, theme }) => (
  <ManorProvider theme={theme}>
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
  </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

FeatureList.defaultProps = {
  className: '',
  theme: undefined,
};

export default FeatureList;
