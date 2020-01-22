import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Picture, { picturePropTypes } from '../Picture/Picture.component';
import placeholder from '../../images/sergei.png';
import useIsDesktop from '../../hooks/useIsDesktop';

const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledEmptyStateWrap = styled.div`
  max-height: 375px;
  max-width: 375px;
  text-align: center;
  & > * {
    margin-bottom: ${({ theme, desktop }) => (desktop ? theme.spacing[32] : theme.spacing[16])};
  }
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
    <ThemeProvider theme={getTheme()}>
      <StyledEmptyState className={className}>
        <StyledEmptyStateWrap desktop={desktop}>
          <Picture src={pictureProps.src} srcsets={pictureProps.srcsets} alt={pictureProps.alt} title={pictureProps.title} />
          <h3>{heading}</h3>
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
  picture: '',
  className: '',
  heading: 'Sorry, no results found',
};

export default EmptyState;
