import styled, { css } from 'styled-components';
import { Slider as MUISlider } from '@material-ui/core';
import React from 'react';

const ManorStyledSlider = styled(({ last, first, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MUISlider {...otherProps} />
))`
  & {
    margin: ${({ theme }) => theme.slider.margin};
    > span {
      color: ${({ theme, disabled }) => (disabled ? theme.slider.disabled : theme.colors.primary500)};
    }
  }
  & .MuiSlider-markLabel {
    top: ${({ theme }) => `-${theme.spacing[12]}`};
    p {
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: ${({ theme }) => theme.slider.mark.fontSize};
      color: ${({ theme, disabled }) => (disabled ? theme.slider.disabled : theme.slider.mark.color)};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
  }
  & .MuiSlider-markActive {
    display: none;
  }
  & .MuiSlider-mark {
    display: none;
  }
  & .MuiSlider-rail {
    color: ${({ theme }) => theme.slider.rail.color};
    height: ${({ theme }) => theme.slider.rail.height};
    border-radius: ${({ theme }) => theme.slider.rail.borderRadius};
  }
  & .MuiSlider-track {
    border-radius: ${({ theme }) => theme.slider.track.borderRadius};
    color: ${({ theme, disabled }) => (disabled ? theme.slider.disabled : theme.slider.track.color)};
    height: ${({ theme }) => theme.slider.track.height};
  }
  & .MuiSlider-thumb {
    height: ${({ theme }) => theme.slider.thumb.height};
    width: ${({ theme }) => theme.slider.thumb.width};
    border: ${({ theme }) => theme.slider.thumb.border};
    box-shadow: ${({ theme }) => theme.slider.thumb.boxShadow};
  }
  & .MuiSlider-valueLabel {
    left: auto;
  }
  & .MuiSlider-thumb {
    display: flex;
    > span {
      transform: scale(1) translateY(1px) !important;
       > span {
        transform: none;
        border-radius: ${({ theme }) => theme.slider.label.borderRadius};
        height: auto;
        width: auto;
        > span {
          transform: none;
          padding: ${({ theme }) => theme.slider.label.padding};
          p {
            margin: 0;
          }
        }
      }
    }
  }
`;

const StyledNotch = styled.div`
  position: relative;
  top: ${({ defaultIndicator }) => (defaultIndicator ? '.5rem' : '.6rem')};
  width: ${({ theme, defaultIndicator }) => (defaultIndicator ? theme.slider.notch.defaultIndicator.height : theme.slider.notch.height)};
  border: ${({ theme, defaultIndicator }) => (defaultIndicator ? theme.slider.notch.defaultIndicator.border : theme.slider.notch.border)};
  transform: rotate(90deg);
`;

export {
  ManorStyledSlider, StyledNotch,
};
