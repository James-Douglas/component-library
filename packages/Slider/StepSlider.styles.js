import styled, { css } from 'styled-components';
import { Slider as MUISlider } from '@material-ui/core';
import React from 'react';
import {
  makeStyles as MUIMakeStyles,
  createMuiTheme,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles';

const rtlTheme = createMuiTheme({
  direction: 'rtl',
});

const useMUIStyles = MUIMakeStyles(() => ({
  rtlRoot: {
    '& .MuiSlider-thumb': {
      marginRight: -11,
    },
    '& .MuiSlider-rail': {
      color: '#0b60b7',
    },
    '& .MuiSlider-track': {
      color: '#d4d4d4',
      backgroundColor: '#d4d4d4',
    },
  },
}));

const ManorStyledSliderRtl = styled(({ last, first, ...otherProps }) => {
  const muiClasses = useMUIStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={`${muiClasses.rtlRoot}`}><MUIThemeProvider theme={rtlTheme}><MUISlider {...otherProps} /></MUIThemeProvider></div>
  );
})`
  padding-top: ${({ theme }) => `${theme.spacing[4]} !important`};
  & .MuiSlider-markLabel {
    top: ${({ theme }) => theme.spacing[20]};
    height: ${({ theme }) => theme.spacing[4]};
    width: ${({ theme }) => theme.spacing[4]};
    background-color: ${({ theme }) => theme.colors.primary500};
    border-radius: 50%;
    display: inline-block;
  }
  & .MuiSlider-mark {
    height: ${({ theme }) => theme.spacing[8]};
    width: 1px;
  }
  & .MuiSlider-mark:last-child {
    display: none;
  }
  & .MuiSlider-rail {
    color: ${({ theme }) => theme.slider.rail.color};
    height: ${({ theme }) => theme.spacing[8]};;
  }
  & .MuiSlider-track {
    border-radius: ${({ theme }) => theme.slider.track.borderRadius};
    color: ${({ theme, disabled }) => (disabled ? theme.slider.disabled : theme.slider.track.color)};
    height: ${({ theme }) => theme.spacing[8]};;
  }
  & .MuiSlider-thumb {
    top: .2rem;
    height: ${({ theme }) => theme.spacing[20]};
    width: ${({ theme }) => theme.spacing[20]};
    border: ${({ theme }) => theme.slider.thumb.border};
    box-shadow: ${({ theme }) => theme.slider.thumb.boxShadow};
  }
   & .MuiSlider-valueLabel {
     left: auto;
     white-space: nowrap;
     color: ${({ theme }) => theme.colors.primary500};
   }
  & .MuiSlider-thumb {
    display: flex;
    margin-left: -9px;
    > span {
      transform: scale(1) translateY(5px) !important;
      ${({ first }) => first && css`
        right: 0;
      `};
      ${({ last }) => last && css`
        left: 0;
      `};
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

const ManorStyledSlider = styled(({ last, first, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MUISlider {...otherProps} />
))`
  padding-top: ${({ theme }) => `${theme.spacing[4]} !important`};
  & .MuiSlider-markLabel {
    top: ${({ theme }) => theme.spacing[20]};
    height: ${({ theme }) => theme.spacing[4]};
    width: ${({ theme }) => theme.spacing[4]};
    background-color: ${({ theme }) => theme.colors.primary500};
    border-radius: 50%;
    display: inline-block;
  }
  & .MuiSlider-mark {
    height: ${({ theme }) => theme.spacing[8]};
    width: 1px;
  }
  & .MuiSlider-mark:last-child {
    display: none;
  }
  & .MuiSlider-rail {
    color: ${({ theme }) => theme.slider.rail.color};
    height: ${({ theme }) => theme.spacing[8]};;
  }
  & .MuiSlider-track {
    border-radius: ${({ theme }) => theme.slider.track.borderRadius};
    color: ${({ theme, disabled }) => (disabled ? theme.slider.disabled : theme.slider.track.color)};
    height: ${({ theme }) => theme.spacing[8]};;
  }
  & .MuiSlider-thumb {
    top: .2rem;
    height: ${({ theme }) => theme.spacing[20]};
    width: ${({ theme }) => theme.spacing[20]};
    border: ${({ theme }) => theme.slider.thumb.border};
    box-shadow: ${({ theme }) => theme.slider.thumb.boxShadow};
  }
   & .MuiSlider-valueLabel {
     left: auto;
     white-space: nowrap;
     color: ${({ theme }) => theme.colors.primary500};
   }
  & .MuiSlider-thumb {
    display: flex;
    margin-left: -9px;
    > span {
      transform: scale(1) translateY(5px) !important;
      ${({ first }) => first && css`
        left: 0;
      `};
      ${({ last }) => last && css`
        right: 0;
      `};
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

const StyledSliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const StyledWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[60]};
`;

export {
  ManorStyledSliderRtl, ManorStyledSlider, StyledSliderLabels, StyledWrapper,
};
