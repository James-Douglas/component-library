import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Picture, picturePropTypes } from '@comparethemarketau/manor-picture';
import placeholder from '../../images/sergei.png';
import { StyledEmptyState, StyledEmptyStateWrap, StyledPictureContainer } from './EmptyState.styles';

const EmptyState = ({
  children,
  picture,
  className,
  heading,
}) => {
  const { isDesktop } = useContext(ManorContext);
  const pictureProps = {
    src: picture ? picture.src : placeholder,
    srcsets: picture ? picture.srcsets : [{ srcset: placeholder }],
    alt: picture ? picture.alt : 'no results found',
    title: 'no results found',
  };

  return (
    <StyledEmptyState className={className}>
      <StyledEmptyStateWrap desktop={isDesktop} className={className}>
        <StyledPictureContainer>
          <Picture src={pictureProps.src} srcsets={pictureProps.srcsets} alt={pictureProps.alt} title={pictureProps.title} />
        </StyledPictureContainer>
        <Typography variant="h2">{heading}</Typography>
        <div>
          {children}
        </div>
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
};

EmptyState.defaultProps = {
  children: '',
  picture: null,
  className: '',
  heading: 'Sorry, no results found',
};

export default EmptyState;
