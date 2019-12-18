import React from 'react';
import { css, createGlobalStyle, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

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
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProSemiBoldSrc}) format('woff2'),
    url(${SourceSansProSemiBoldUrl}) format('woff');
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${SourceSansProBoldSrc}) format('woff2'),
    url(${SourceSansProBoldUrl}) format('woff');
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-style: normal;
  }
  html {
    font-size: 62.5%; 
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: SourceSansPro, Helvetica, Arial;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, h6, p, ul, ol, ul li, ol l input, label, button, textarea, .subtitle-primary, .subtitle-secondary, .microcopy, .overline, .subscript, ::placeholder {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-family: SourceSansPro, Arial, sans-serif;
  }
  h1 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['4xl']};
    margin:  ${(props) => `0 0 ${props.theme.spacing['24']}`};
  }
  h2 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['4xl']};
    margin:  ${(props) => `0 0 ${props.theme.spacing['20']}`};
  }
  h3 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['2xl']};
    margin:  ${(props) => `0 0 ${props.theme.spacing['16']}`};
  } 
  h4 {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.lg};
    margin:  ${(props) => `0 0 ${props.theme.spacing['16']}`};
  }  
   
  h5 {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.xl};
    margin:  ${(props) => `0 0 ${props.theme.spacing['16']}`};
  }   
  h6 {
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.base};
    margin:  ${(props) => `0 0 ${props.theme.spacing['12']}`};
  }   
  p {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.base};
    margin: 0 0 ${(props) => props.theme.spacing[12]};
  }
  p.body-secondary {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
  ol, ul {
    list-style: none;
    margin: 0;
  }
  ul {
    padding: ${(props) => props.theme.spacing[16]};
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize.sm};
    list-style-type: disc;
  }
  button {
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  ::placeholder {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-style: italic;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: ${(props) => props.theme.lineHeight.snug};
  }
  .subtitle-primary {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  .subtitle-secondary {
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSize.base};
  }
  .microcopy {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.fontSize.xs};
    line-height: ${(props) => props.theme.lineHeight.snug};
  }
  .overline {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize['2xs']};
    letter-spacing: 0.15rem;
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.placeholderText};
  }
  .subscript {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize['2xs']};
    letter-spacing: 0.15rem;
    font-weight: ${(props) => props.theme.fontWeight.normal};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.greyDarkest};
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

const GlobalStyles = createGlobalStyle`${manor}`;

export const ManorGlobalStyles = () => (
  <ThemeProvider theme={getTheme()}>
    <GlobalStyles />
  </ThemeProvider>
);

export default manor;
