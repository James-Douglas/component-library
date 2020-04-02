import styled, { css } from 'styled-components';
import screens from '../../../../config/screens';

// for cols='sm' or cols='md' etc
const colDefault = css`
  flex-basis: 0%;
  flex-grow: 1;
  max-width: 100%;
`;
// for sm='auto' or md='auto' etc
const colAuto = css`
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

const getPercentage = (value) => {
  const parsed = parseInt(value, 10);
  return `${(100 / 12) * parsed}%`;
};

const media = [
  { col: 'sm', minWidth: screens.sm },
  { col: 'md', minWidth: screens.md },
  { col: 'lg', minWidth: screens.lg },
  { col: 'xl', minWidth: screens.xl },
  { col: 'xxl', minWidth: screens.xxl },
];

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  align-items: ${(props) => props.valign};
  justify-content: ${(props) => props.halign};

  ${({ cols, baseOffset }) => {
    let colStyles = '';
    if (parseInt(cols, 10) > 0) {
      colStyles += `
        flex: ${getPercentage(cols)};
        max-width: ${getPercentage(cols)};
      `;
    }

    if (baseOffset) {
      colStyles += `
        margin-left: ${getPercentage(baseOffset)};
      `;
    }

    media.forEach((oneMedia) => {
      if (cols === oneMedia.col) {
        colStyles += `@media (min-width: ${oneMedia.minWidth}) {
          ${colDefault}
        }`;
      }
    });

    return colStyles;
  }}

  @media (min-width: ${screens.xs}) {
    ${({ sm, offsetSm }) => {
    let colStyles = '';

    if (sm === 'auto') {
      return colAuto;
    }

    if (sm) {
      colStyles += `
          flex: ${getPercentage(sm)};
          max-width: ${getPercentage(sm)};
        `;
    }

    if (offsetSm) {
      colStyles += `margin-left: ${getPercentage(offsetSm)}`;
    }

    return colStyles;
  }}
  }

  @media (min-width: ${screens.sm}) {
    ${({ md, offsetMd }) => {
    let colStyles = '';

    if (md === 'auto') {
      return colAuto;
    }

    if (md) {
      colStyles += `
          flex: ${getPercentage(md)};
          max-width: ${getPercentage(md)};
        `;
    }

    if (offsetMd) {
      colStyles += `margin-left: ${getPercentage(offsetMd)}`;
    }

    return colStyles;
  }}
  }

  @media (min-width: ${screens.md}) {
    ${({ lg, offsetLg }) => {
    let colStyles = '';

    if (lg === 'auto') {
      return colAuto;
    }

    if (lg) {
      colStyles += `
          flex: ${getPercentage(lg)};
          max-width: ${getPercentage(lg)};
        `;
    }

    if (offsetLg) {
      colStyles += `margin-left: ${getPercentage(offsetLg)}`;
    }

    return colStyles;
  }}
  }

  @media (min-width: ${screens.lg}) {
    ${({ xl, offsetXl }) => {
    let colStyles = '';

    if (xl === 'auto') {
      return colAuto;
    }

    if (xl) {
      colStyles += `
          flex: ${getPercentage(xl)};
          max-width: ${getPercentage(xl)};
        `;
    }

    if (offsetXl) {
      colStyles += `margin-left: ${getPercentage(offsetXl)}`;
    }

    return colStyles;
  }}
  }

  @media (min-width: ${screens.xl}) {
    ${({ xxl, offsetXxl }) => {
    let colStyles = '';

    if (xxl === 'auto') {
      return colAuto;
    }

    if (xxl) {
      colStyles += `
          flex: ${getPercentage(xxl)};
          max-width: ${getPercentage(xxl)};
        `;
    }

    if (offsetXxl) {
      colStyles += `margin-left: ${getPercentage(offsetXxl)}`;
    }

    return colStyles;
  }}
  }

  ${(props) => !props.cols
    && !props.sm
    && !props.md
    && !props.lg
    && !props.xl
    && !props.xxl
    && css`
      -ms-flex-preferred-size: 0;
      flex-basis: 0%;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    `}
`;

export default StyledColumn;
