import styled, { css } from 'styled-components';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const StyledTypography = styled(({
  component, variant, align, color, display, noWrap, ...otherProps
}) => {
  const Tag = component;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tag {...otherProps} />;
})`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: SourceSansPro, Arial, sans-serif;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  ${({ display }) => display && css`
    display: ${display};
  `};
  ${({ noWrap }) => noWrap && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
  // H1
  ${({ theme, variant }) => variant === 'h1' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize['6xl']};
  `};
  // H2
  ${({ theme, variant }) => variant === 'h2' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize['5xl']};
  `};
  // H3
  ${({ theme, variant }) => variant === 'h3' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize['3xl']};
  `};
  // H4
  ${({ theme, variant }) => variant === 'h4' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize.xl};
  `};
  // H5
  ${({ theme, variant }) => variant === 'h5' && css`
    font-weight: ${theme.fontWeight.semibold};
    font-size: ${theme.fontSize.lg};
    ${`@media only screen and (min-width: ${theme.breakpoints.md}})`}: {
      line-height: ${theme.lineHeight.tight};
    }
  `};
  // H6
  ${({ theme, variant }) => variant === 'h6' && css`
    font-weight: ${theme.fontWeight.semibold};
    font-size: ${theme.fontSize.base};
    ${`@media only screen and (min-width: ${theme.breakpoints.md}})`}: {
      line-height: ${theme.lineHeight.tight};
    }
  `};
  // SUBTITLE1
  ${({ theme, variant }) => variant === 'subtitle1' && css`
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.lineHeight.snug};
    font-size: ${theme.fontSize.lg};
  `};
  // SUBTITLE2
  ${({ theme, variant }) => variant === 'subtitle2' && css`
    font-weight: ${theme.fontWeight.bold};
    line-height: ${theme.lineHeight.snug};
    font-size: ${theme.fontSize.base};
  `};
  // BODY1
  ${({ theme, variant }) => variant === 'body1' && css`
    line-height: ${theme.lineHeight.snug};
    font-size: ${theme.fontSize.base};
  `};
  // BODY2
  ${({ theme, variant }) => variant === 'body2' && css`
    line-height: ${theme.lineHeight.snug};
    font-size: ${theme.fontSize.sm};
  `};
  // CAPTION
  ${({ theme, variant }) => variant === 'caption' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize['2xs']};
    letter-spacing: 0.15rem;
    font-weight: ${theme.fontWeight.normal};
    text-transform: uppercase;
    color: ${theme.colors.grey600};
  `};
  // HELPTEXT
  ${({ theme, variant }) => variant === 'helpText' && css`
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.grey600};
  `};
  // OVERLINE
  ${({ theme, variant }) => variant === 'overline' && css`
    line-height: ${theme.lineHeight.tight};
    font-size: ${theme.fontSize['2xs']};
    letter-spacing: 0.02rem;
    font-weight: ${theme.fontWeight.semibold};
    text-transform: uppercase;
    color: ${theme.colors.placeholderText};
  `};
  // SRONLY
  ${({ variant }) => variant === 'srOnly' && css`
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
  `};
`;
