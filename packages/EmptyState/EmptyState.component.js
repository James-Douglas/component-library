import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Picture, picturePropTypes } from '@comparethemarketau/manor-picture';
import {
  StyledEmptyState, StyledEmptyStateWrap, StyledPictureContainer, StyledFlexContainer, StyledHeadingContainer, StyledContentContainer,
} from './EmptyState.styles';

const EmptyState = ({
  children,
  picture,
  textPosition,
  className,
  heading,
}) => {
  const { isDesktop } = useContext(ManorContext);
  const pictureProps = {
    src: picture?.src,
    srcsets: picture?.srcsets,
    alt: picture?.alt,
    title: 'no results found',
  };

  return (
    <StyledEmptyState className={className}>
      <StyledEmptyStateWrap desktop={isDesktop} className={className}>
        <StyledFlexContainer>
          {picture && <StyledPictureContainer><Picture src={pictureProps.src} srcsets={pictureProps.srcsets} alt={pictureProps.alt} title={pictureProps.title} /></StyledPictureContainer>}
        </StyledFlexContainer>
        <StyledHeadingContainer>
          <Typography align={textPosition} color="inherit" variant="h3">{heading}</Typography>
        </StyledHeadingContainer>
        <StyledContentContainer>
          <Typography align={textPosition} variant="body1">{children}</Typography>
        </StyledContentContainer>
      </StyledEmptyStateWrap>
    </StyledEmptyState>
  );
};

EmptyState.propTypes = {
  /**
   * The text content beneath the heading.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Classes to be applied to the EmptyState component
   */
  className: PropTypes.string,
  /**
   *  Picture props (see the Picture component documentation)
   */
  picture: PropTypes.shape(picturePropTypes),
  /**
   * The heading text underneath the image
   */
  heading: PropTypes.string,
  /**
   * The position of the heading text
   */
  textPosition: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
};

EmptyState.defaultProps = {
  children: '',
  picture: null,
  className: '',
  heading: 'Sorry, no results found',
  textPosition: 'left',
};

export default EmptyState;
