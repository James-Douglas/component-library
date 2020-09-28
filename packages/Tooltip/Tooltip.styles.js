import React from 'react';
import styled, { css } from 'styled-components';
import Tippy from '@tippy.js/react';

export const StyledTooltipIcon = styled.div`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.base};
  height: ${({ theme }) => theme.spacing[16]};
  ${({ theme, children }) => !children && css`
    width: ${theme.spacing[16]};
  `};
  color: ${(props) => props.theme.tooltip.iconColor};
  fill: currentColor;
  ${({ theme, tippyVisible }) => tippyVisible
    && css`
      fill: currentColor;
      color: ${theme.tooltip.iconColorVisible};
    `}
`;

export const StyledTooltipContent = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.spacing[12]};
  letter-spacing: 0.02rem;
`;

export const StyledTooltipTitle = styled.div`
  span {
    color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.titleTextColor
    : theme.tooltip.titleTextColorDark)};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    line-height: ${({ theme }) => theme.lineHeight.snug};
    padding: 0;
  }
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const StyledTooltipBody = styled.div`
  span {
    color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.bodyTextColor
    : theme.tooltip.bodyTextColorDark)};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: ${({ theme }) => theme.lineHeight.snug};
  }
`;

// eslint-disable-next-line react/jsx-props-no-spreading,react/display-name,react/prop-types
export const StyledTippy = styled(({ variant, ...props }) => (<Tippy {...props} />))`
  &.tippy-content {
    padding: 0;
  }
  &.tippy-tooltip {
    background-color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.background
    : theme.tooltip.backgroundLight)};
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);
  }
  &.tippy-tooltip[data-placement^='right'] > .tippy-arrow {
    border-right-color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.background
    : theme.tooltip.backgroundLight)};
  }
  &.tippy-tooltip[data-placement^='left'] > .tippy-arrow {
    border-left-color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.background
    : theme.tooltip.backgroundLight)};
  }
  &.tippy-tooltip[data-placement^='bottom'] > .tippy-arrow {
    border-bottom-color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.background
    : theme.tooltip.backgroundLight)};
  }
  &.tippy-tooltip[data-placement^='top'] > .tippy-arrow {
    border-top-color: ${({ theme, variant }) => (variant === 'dark'
    ? theme.tooltip.background
    : theme.tooltip.backgroundLight)};
  }

  @media screen and (min-width: 769px) {
    .tippy-tooltip {
      max-width: ${({ theme }) => theme.spacing[280]};
    }
  }

  @media screen and (max-width: 768px) {
    :global(.tippy-popper) {
      right: 0;
      left: 0;
    }

    :global(.tippy-tooltip) {
      max-width: none !important;
    }
  }
`;
