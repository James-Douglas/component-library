import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const StyledFeatureList = styled.ul`
  margin-left: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-inline-start: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  margin-left: 0;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const StyledFeatureListItemIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.featureList.color};
`;

const StyledFeatureListItemText = styled.span`
  margin-left: ${({ theme }) => theme.spacing[8]};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const FeatureList = ({ features, className }) => (
  <StyledFeatureList>
    {features.map((feature) => (
      <StyledListItem key={feature} className={className}>
        <StyledFeatureListItemIcon><FontAwesomeIcon icon={faCheck} /></StyledFeatureListItemIcon>
        <StyledFeatureListItemText>{feature}</StyledFeatureListItemText>
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
