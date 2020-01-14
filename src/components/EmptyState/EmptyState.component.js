import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Picture from '../Picture/Picture.component';
import placeholder from '../../images/sergei.png';

const sharedImageStyles = css`
  max-width: 375px;
  max-height: 375px;
`;

const StyledEmptyState = styled.div`
  display: flex;
`;
const StyledEmptyStateWrap = styled.div`
  margin: auto;
  max-width: 375px;
  text-align: center;
  & > * {
    margin-bottom: ${(props) => props.theme.spacing[32]};
  }
`;
const StyledEmptyStatePicture = styled.div`
 ${sharedImageStyles}
  img {
     ${sharedImageStyles}
  }
`;

const EmptyState = ({
  children,
  picture,
}) => {
  let placeholderImage;
  if (picture) {
    placeholderImage = <Picture src={picture} />;
  } else {
    placeholderImage = <Picture src={placeholder} />;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <StyledEmptyState>
        <StyledEmptyStateWrap>
          <StyledEmptyStatePicture>
            {placeholderImage}
          </StyledEmptyStatePicture>
          <h3>Sorry, no results found</h3>
          <div>
            {children}
          </div>
        </StyledEmptyStateWrap>
      </StyledEmptyState>
    </ThemeProvider>
  );
};

EmptyState.propTypes = {
  /**
   * Label for the Dropdown.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  picture: PropTypes.string,
};

EmptyState.defaultProps = {
  children: '',
  picture: '',
};

export default EmptyState;
