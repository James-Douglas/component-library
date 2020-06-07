import { css, createGlobalStyle } from 'styled-components';

import screens from '../../../config/screens';
import SourceSansProSrc from '../../fonts/sourcesanspro-regular-webfont.woff2';
import SourceSansProUrl from '../../fonts/sourcesanspro-regular-webfont.woff';

import SourceSansProSemiBoldSrc from '../../fonts/sourcesanspro-semibold-webfont.woff2';
import SourceSansProSemiBoldUrl from '../../fonts/sourcesanspro-semibold-webfont.woff';

import SourceSansProBoldSrc from '../../fonts/sourcesanspro-bold-webfont.woff2';
import SourceSansProBoldUrl from '../../fonts/sourcesanspro-bold-webfont.woff';

export const manor = css`
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProSrc}) format('woff2'),
    url(${SourceSansProUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProSemiBoldSrc}) format('woff2'),
    url(${SourceSansProSemiBoldUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProBoldSrc}) format('woff2'),
    url(${SourceSansProBoldUrl}) format('woff');
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-style: normal;
  }
  html {
    position: relative;
    min-height: 100vh;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: SourceSansPro, Helvetica, Arial;
    font-size: ${({ theme }) => theme.fontSize['16']};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, h6, p, ul, ol, ul li, ol li, input, label, button, textarea, .subtitle-primary, .subtitle-secondary, .microcopy, .overline, .subscript, ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-family: SourceSansPro, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.grey900};
  }
  h1 {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['24']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize['6xl']};
    }
  }
  h2 {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['20']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize['5xl']};
    }
  }
  h3 {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['16']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }
  }
  h4 {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: 1.7rem;
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['16']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  h5 {
    line-height: ${({ theme }) => theme.lineHeight.normal};
    font-size: ${({ theme }) => theme.fontSize.base};
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['16']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
  h6 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.tighter};
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin:  ${({ theme }) => css`0 0 ${theme.spacing['12']}`};
    
    @media (min-width: ${screens.md}) {
      line-height: ${({ theme }) => theme.lineHeight.tight};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
  p, a {
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: 0 0 ${({ theme }) => theme.spacing[12]};
  }
  p.body-secondary {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary500};
  }
  ol, ul {
    margin: 0 0 ${({ theme }) => theme.spacing[12]} 0;
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  ul {
    list-style-type: square;
  }
  ul ul, ol ol {
    padding-left: ${({ theme }) => theme.spacing[20]};
  }
  button {
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  ::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })}
  }
  .subtitle-primary {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
  .subtitle-secondary {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  .microcopy {
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeight.normal};
  }
  .overline {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: ${({ theme }) => theme.fontSize['2xs']};
    letter-spacing: 0.02rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.placeholderText};
  }
  .subscript {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    font-size: ${({ theme }) => theme.fontSize['2xs']};
    letter-spacing: 0.02rem;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey600};
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export const ManorGlobalStyles = createGlobalStyle`${manor}`;

export default manor;
