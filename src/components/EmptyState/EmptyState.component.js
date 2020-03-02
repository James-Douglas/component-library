import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Picture, { picturePropTypes } from '../Picture/Picture.component';
import placeholder from '../../images/sergei.png';
import useIsDesktop from '../../hooks/useIsDesktop';

const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledEmptyStateWrap = styled.div`
  max-height: 350px;
  max-width: 350px;
  text-align: center;
  & > * {
    margin-bottom: ${({ theme, desktop }) => (desktop ? theme.spacing[32] : theme.spacing[16])};
  }
`;

const StyledPictureContainer = styled.div`
   margin-bottom: ${({ theme }) => theme.spacing[32]};
   height: 100%;
   
`;


const EmptyState = ({
  children,
  picture,
  className,
  heading,
}) => {
  const desktop = useIsDesktop();
  const pictureProps = {
    src: picture ? picture.src : placeholder,
    srcsets: picture ? picture.srcsets : [{ srcset: placeholder }],
    alt: picture ? picture.alt : 'no results found',
    title: 'no results found',
  };

  return (
    <StyledEmptyState className={className}>
      <StyledEmptyStateWrap desktop={desktop} className={className}>
        <StyledPictureContainer>
          <Picture src={pictureProps.src} srcsets={pictureProps.srcsets} alt={pictureProps.alt} title={pictureProps.title} />
        </StyledPictureContainer>
        <h2>{heading}</h2>
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
