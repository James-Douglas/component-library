import React from 'react';
import { css, createGlobalStyle, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import screens from '../../../config/screens';

const SourceSansProSrc = require('../../fonts/sourcesanspro-regular-webfont.woff2');
const SourceSansProUrl = require('../../fonts/sourcesanspro-regular-webfont.woff');

const SourceSansProSemiBoldSrc = require('../../fonts/sourcesanspro-semibold-webfont.woff2');
const SourceSansProSemiBoldUrl = require('../../fonts/sourcesanspro-semibold-webfont.woff');

const SourceSansProBoldSrc = require('../../fonts/sourcesanspro-bold-webfont.woff2');
const SourceSansProBoldUrl = require('../../fonts/sourcesanspro-bold-webfont.woff');

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
  h1, h2, h3, h4, h5, h6, p, ul, ol, ul li, ol l input, label, button, textarea, .subtitle-1, .subtitle-2, .microcopy, .overline, .subscript, ::placeholder {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-family: SourceSansPro, Arial, sans-serif;
  }
  h1 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['4xl']};
  }
  h2 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['4xl']};
  }
  h3 {
    line-height: ${(props) => props.theme.lineHeight.tighter};
    font-size: ${(props) => props.theme.fontSize['2xl']};
  } 
  h4 {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.lg};
  }  
   
  h5 {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.xl};
  }   
  h6 {
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.base};
  }   
  p {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.base};
    margin: 0 0 ${(props) => props.theme.spacing[12]};
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
  .subtitle-1 {
    font-weight: ${(props) => props.theme.fontWeight.normal};
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-size: ${(props) => props.theme.fontSize.base};
  }
  .subtitle-2 {
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
  @media all and (min-width: ${screens.lg}){
    html {
      zoom: 110%;
    }
  }
  @media all and (min-width: ${screens.xl}){
    html {
      zoom: 115%;
    }
  }
  @media all and (min-width: ${screens.xxl}){
    html {
      zoom: 120%;
    }
  }
`;

const GlobalStyles = createGlobalStyle`${manor}`;

export const ManorGlobalStyles = () => (
  <ThemeProvider theme={getTheme()}>
    <GlobalStyles />
  </ThemeProvider>
);

export default manor;
