import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';

const StyledFeatureList = styled.ul`
  margin-left: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}
`;

const StyledFeatureListItemIcon = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondaryDarker};
`;

const StyledFeatureListItemText = styled.span`
  margin-left: ${(props) => props.theme.spacing[8]};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: ${(props) => props.theme.lineHeight.snug};
  font-size: ${(props) => props.theme.fontSize.base};
`;

const FeatureList = ({ features }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledFeatureList>
      {features.map((feature) => (
        <StyledListItem key={feature}>
          <StyledFeatureListItemIcon><Icon name="check" size={1} /></StyledFeatureListItemIcon>
          <StyledFeatureListItemText>{feature}</StyledFeatureListItemText>
        </StyledListItem>
      ))}
    </StyledFeatureList>
  </ThemeProvider>
);

FeatureList.propTypes = {
  /**
   * The features/benefits to be listed
   */
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureList;
