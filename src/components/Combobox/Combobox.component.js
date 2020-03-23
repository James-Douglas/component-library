import React, {
  useState, useMemo, useCallback, useEffect, useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Input from '../Input/Input.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import Overlay from '../Overlay/Overlay.component';
import LayerEventManager from '../../LayerEventManager';
import { picturePropTypes } from '../Picture/Picture.component';
import EmptyState from '../EmptyState/EmptyState.component';

const StyledDropdownList = styled.div`
  position: ${({ position }) => (position === 'absolute' ? 'absolute' : 'relative')};
  width: ${({ theme }) => (theme.maxWidth.full)};
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')};
  background: ${({ theme }) => (theme.combo.list.background)};
  box-shadow: ${({ theme, desktop }) => (desktop ? theme.combo.list.shadow : '')};
  margin-top: ${({ theme }) => (theme.spacing[8])};
  &:focus {
    outline: none;
  }
  ${({ desktop }) => !desktop && css`
    height: 100%;
    max-height: ${({ theme }) => (theme.minHeight.full)};;
    margin: 0;
  `}
  
  z-index: ${({ theme }) => (theme.zIndex[40])};
`;

const StyledList = styled.ul`
  margin: 0;
  width: ${({ theme }) => (theme.maxWidth.full)};
  padding: 0;
  color: ${({ theme }) => (theme.combo.list.color)};
  
  z-index: ${({ theme }) => (theme.zIndex[30])};
`;

const StyledDefault = styled.div`
  width: ${({ theme }) => (theme.maxWidth.full)};
`;

const StyledListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${({ theme }) => theme.spacing[52]};
  border: ${({ theme }) => theme.borders.transparent};
  padding:  ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[40]}`};
  font-size: ${({ theme }) => (theme.fontSize.base)};
  color: ${({ theme }) => (theme.combo.list.item.color)};
  transition: background-color 0.4s ease;
  &:nth-last-child(1) {
    padding-bottom:  ${({ theme }) => theme.spacing[20]};
  }
  &:hover {
    background: ${({ theme }) => theme.combo.list.item.backgroundHover};
  }
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.list.item.borderFocus};
  }
`;

const StyledIconWrap = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing[16]};
  margin-right: ${({ theme }) => theme.spacing[16]};
  color: ${({ theme }) => theme.colors.grey400};
`;

const StyledButtonWrap = styled.div`
  justify-content: space-around;
  text-align: center;
  border: ${({ theme }) => theme.combo.list.border};
  padding:  ${({ theme }) => `${theme.spacing[8]} 0`};
  background: ${({ theme }) => (theme.combo.button.background)};
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.button.borderFocus};
    border-width: ${({ theme }) => theme.spacing.px}; /* IE 11 specific fix */
  }
  &:hover {
    background: ${({ theme }) => (theme.combo.button.backgroundHover)};
  }
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledDiv = styled.div`
  ${({ desktop }) => !desktop && css`
    width: ${({ theme }) => (theme.maxWidth.full)};
    top: ${({ theme }) => theme.spacing[136]};
    position: fixed;
    right: ${({ theme }) => theme.spacing[16]};
    left: ${({ theme }) => theme.spacing[16]};
    max-width: ${({ theme }) => `calc(100% - ${theme.spacing[8]})`};
    .label {
      visibility: hidden;
    }
    .input-wrap {
      width: auto;
      right: ${({ theme }) => theme.spacing[16]};
      left: ${({ theme }) => theme.spacing[16]};
      position: fixed;
      top: ${({ theme }) => theme.spacing[162]};
      p {
        display: none;
      }
    }
    z-index: ${({ theme }) => (theme.zIndex[40])};
  `}
`;

const WrapList = styled.div`
  ${({ desktop }) => !desktop && css`
    width: auto;
    right: ${({ theme }) => theme.spacing[8]};
    left: ${({ theme }) => theme.spacing[8]};
    position: fixed;
    bottom: ${({ theme }) => theme.spacing[32]};
    top: ${({ theme }) => theme.spacing[148]};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding-top: ${({ theme }) => theme.spacing[72]};
    max-height: initial;
    overflow: hidden;
    &:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: ${({ theme }) => (theme.maxWidth.full)};
      height: ${({ theme }) => (theme.spacing[72])};
      background: ${({ theme }) => theme.combo.button.background};
    }
    z-index: ${({ theme }) => (theme.zIndex.entry)};
  `}
`;

const StyledComboListWrap = styled.div`
  ${({ desktop }) => !desktop && css`
    display: flex;
    flex-direction: column;
    width: ${({ theme }) => (theme.maxWidth.full)};
    max-width: ${({ theme }) => (theme.maxWidth.full)};
    height: ${({ theme }) => (theme.minHeight.full)};
  `}
`;

const StyledComboList = styled.div`
  ${({ desktop }) => !desktop && css`
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    flex-grow: 1;
    overflow: auto;
  `}
`;

const StyledEmptyStateMessage = styled.div`
  position: fixed;
  width: ${({ theme }) => (theme.maxWidth.full)};
  max-width: ${({ theme }) => `calc(100% - ${theme.spacing[32]})`};
  right: ${({ theme }) => theme.spacing[16]};
  left: ${({ theme }) => theme.spacing[16]};
  max-height: ${({ theme }) => (theme.spacing[200])};
  top: ${({ theme }) => theme.spacing[280]};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.combo.list.item.color};
  text-align: center;
  img {
    max-width: ${({ theme }) => (theme.spacing[100])};
    margin-bottom: ${({ theme }) => (theme.spacing[20])};
  }
  .empty-state-wrap {
    max-height: ${({ theme }) => (theme.spacing[100])};
  }
  
   z-index: ${({ theme }) => (theme.zIndex[50])};
`;

export function comboDropdownList(
  desktop,
  listInfoBoxContent,
  listIcon,
  bottomButton,
  currentPrefillValue,
  characterMinimum,
  filteredValues,
  handleSelectItem,
  filteredValuesRefs,
  listVisible,
) {
  const positionDesktop = !desktop ? 'relative' : 'absolute';
  const emptyState = !listVisible || currentPrefillValue.length < characterMinimum;
  const positionConst = emptyState ? 'hidden' : positionDesktop;

  return (
    <WrapList desktop={desktop}>
      <StyledDropdownList position={positionConst} role="listwrap" desktop={desktop}>
        <StyledComboListWrap desktop={desktop}>
          <StyledComboList desktop={desktop}>
            {!emptyState && comboDataList(filteredValues, handleSelectItem, filteredValuesRefs, listIcon)}
          </StyledComboList>
          {!emptyState && <div>{listInfoBox(listInfoBoxContent, currentPrefillValue, characterMinimum, bottomButton)}</div>}
        </StyledComboListWrap>
      </StyledDropdownList>
    </WrapList>
  );
}

export function comboDataList(filteredValues, handleSelectItem, filteredValuesRefs, listIcon) {
  return (
    <StyledList>
      {filteredValues.map((filteredValue, index) => (
        <StyledListItem
          tabIndex="0"
          key={`option-${filteredValue}`}
          role="listitem"
          data-type="list"
          onMouseDown={() => handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {listIcon && (
            <StyledIconWrap>
              <FontAwesomeIcon icon={listIcon} size="sm" />
            </StyledIconWrap>
          )}
          {filteredValue}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export function listInfoBox(listInfoBoxContent, currentPrefillValue, characterMinimum, bottomButton) {
  return (
    <>
      {listInfoBoxContent && currentPrefillValue.length >= characterMinimum
      && (
        <StyledButtonWrap ref={bottomButton} tabIndex="0" role="buttonOption" aria-selected={false}>
          { listInfoBoxContent }
        </StyledButtonWrap>
      )}
    </>
  );
}

const Combobox = React.forwardRef(({
  id,
  label,
  apiData,
  listIcon,
  placeholder,
  validationMessage,
  value,
  prefillValue,
  bordered,
  prefixContent,
  suffixContent,
  autocomplete,
  required,
  disabled,
  characterMinimum,
  renderLimit,
  listInfoBoxContent,
  tooltip,
  className,
  handleChange,
  handleInput,
  handleFocus,
  handleBlur,
  emptyStateChildren,
  emptyStatePicture,
  emptyStateClassName,
  emptyStateHeading,
  helperMessage,
}, ref) => {
  const [listVisible, setListVisible] = useState(false);
  const [isMobileModalView, setIsMobileModalView] = useState(false);
  const [currentValue, setCurrentValue] = useState(value && value.length ? value : prefillValue);
  const [focusedRef, setFocusedRef] = useState(null);
  const bottomButton = React.createRef();
  const desktop = useIsDesktop();
  const mobileOverlay = !desktop && isMobileModalView;

  const filteredValues = useMemo(
    () => {
      if (currentValue.length < characterMinimum) {
        return [];
      }
      return apiData.filter((item) => item.toLowerCase().includes(currentValue.toLowerCase())).slice(0, renderLimit);
    },
    [currentValue, characterMinimum, apiData, renderLimit],
  );

  const filteredValuesRefs = useMemo(
    () => filteredValues.map((item) => React.createRef()),
    [filteredValues],
  );

  const setMobileFocus = () => {
    setIsMobileModalView(true);
  };

  const closeFieldModal = () => {
    setIsMobileModalView(false);
  };

  const handleSelectItem = (selectedValue) => {
    setCurrentValue(selectedValue);
    setListVisible(false);
    setFocusedRef(null);
    if (mobileOverlay) {
      closeFieldModal();
    }
    if (handleChange) {
      handleChange(selectedValue);
    }
  };

  const comboHandleChange = useCallback((valueInput) => {
    setCurrentValue(valueInput);
    setListVisible(!!valueInput.length);
    if (handleInput) {
      handleInput(valueInput);
    }
  }, [setCurrentValue, setListVisible, handleInput]);

  const handleUserKeyPress = useCallback((event) => {
    const { keyCode } = event;
    // escape
    if (keyCode === 27) {
      setIsMobileModalView(false);
    }
  }, [setIsMobileModalView]);

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  useEffect(() => {
    isMobileModalView && ref && ref.current && ref.current.focus();
  }, [isMobileModalView, ref]);

  const handleOnFocus = (event) => {
    if (
      // ignore tooltip icon
      event.target.getAttribute('role') === 'tooltip'
      // ignore clear button
      || event.target.tagName === 'BUTTON'
    ) {
      return;
    }
    setListVisible(!!currentValue.length);
    if (handleFocus) {
      handleFocus();
    }
  };
  const handleOnBlur = (event) => {
    if (!(bottomButton.current && bottomButton.current.contains(event.relatedTarget))) {
      setListVisible(false);
      if (handleBlur) {
        handleBlur();
      }
    }
  };

  const keyboardAccessibility = (event) => {
    const closestLink = event.target.getElementsByTagName('a')[0];
    switch (event.key) {
      case 'Tab':
        break;
      case 'Escape':
        setListVisible(false);
        break;
      case 'Enter':
        if (focusedRef !== null) {
          handleSelectItem(event.target.innerHTML);
        } else if (closestLink) {
          closestLink.focus();
          closestLink.click();
        }
        break;
      case 'ArrowUp':
        if (currentValue.length >= characterMinimum) {
          if (focusedRef === null) {
            if (listInfoBoxContent) {
              if (document.activeElement === bottomButton.current) {
                setFocusedRef(filteredValues.length - 1);
                filteredValuesRefs[filteredValues.length - 1].current.focus();
              } else {
                setFocusedRef(null);
                bottomButton.current.focus();
              }
            } else {
              setFocusedRef(filteredValues.length - 1);
              filteredValuesRefs[filteredValues.length - 1].current.focus();
            }
          } else if (focusedRef === 0) {
            if (listInfoBoxContent) {
              setFocusedRef(null);
              bottomButton.current.focus();
            } else {
              setFocusedRef(filteredValues.length - 1);
              filteredValuesRefs[filteredValues.length - 1].current.focus();
            }
          } else {
            setFocusedRef(focusedRef - 1);
            filteredValuesRefs[focusedRef - 1].current.focus();
          }
        }
        break;
      case 'ArrowDown':
        if (currentValue.length >= characterMinimum) {
          if (focusedRef === filteredValues.length - 1) {
            if (listInfoBoxContent) {
              setFocusedRef(null);
              bottomButton.current.focus();
            } else {
              setFocusedRef(0);
              filteredValuesRefs[0].current.focus();
            }
          } else if (focusedRef === null) {
            setFocusedRef(0);
            filteredValuesRefs[0].current.focus();
          } else {
            setFocusedRef(focusedRef + 1);
            filteredValuesRefs[focusedRef + 1].current.focus();
          }
        }
        break;
      default:
        break;
    }
  };

  const emptyStateCondition = currentValue.length < characterMinimum;
  const noResultCondition = filteredValues.length === 0 && currentValue.length >= characterMinimum;

  return (
    <LayerEventManager id={`LayerEventManager${id}`} visible={mobileOverlay && isMobileModalView}>
      {mobileOverlay && isMobileModalView && (<Overlay opacityLevel={0.3} visible={mobileOverlay} onClose={closeFieldModal} handleClick={closeFieldModal} />)}
      {(mobileOverlay || desktop) && (
        <>
          <StyledDiv
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={keyboardAccessibility}
            desktop={desktop}
          >
            {emptyStateCondition && mobileOverlay && <StyledEmptyStateMessage>{helperMessage}</StyledEmptyStateMessage>}
            {noResultCondition && mobileOverlay && (
              <StyledEmptyStateMessage>
                <EmptyState
                  picture={emptyStatePicture}
                  className={`${emptyStateClassName} empty-state-wrap`}
                  heading={emptyStateHeading}
                >
                  {emptyStateChildren}
                </EmptyState>
              </StyledEmptyStateMessage>
            )}
            <Input
              id={id}
              tooltip={tooltip}
              placeholder={placeholder}
              label={label}
              value={currentValue}
              prefillValue={prefillValue}
              bordered={bordered}
              required={required}
              disabled={disabled}
              validationMessage={validationMessage}
              prefixContent={prefixContent}
              suffixContent={suffixContent}
              autocomplete={autocomplete}
              handleChange={comboHandleChange}
              className={className}
              tabIndex="0"
              ref={ref}
              role="comboField"
              dataList={() => comboDropdownList(
                desktop,
                listInfoBoxContent,
                listIcon,
                bottomButton,
                currentValue,
                characterMinimum,
                filteredValues,
                handleSelectItem,
                filteredValuesRefs,
                listVisible,
              )}
            />
          </StyledDiv>
        </>
      )}
      {!desktop && (
        <StyledDefault>
          <Input
            id={`mobile${id}`}
            tooltip={tooltip}
            placeholder={placeholder}
            label={label}
            value={currentValue}
            prefillValue={prefillValue}
            bordered={bordered}
            required={required}
            disabled={disabled}
            validationMessage={validationMessage}
            prefixContent={prefixContent}
            suffixContent={suffixContent}
            handleOnClick={setMobileFocus}
            handleChange={() => {}}
            handleFocus={setMobileFocus}
            disableClearIcon
            tabIndex="0"
            role="comboMobileField"
          />
        </StyledDefault>
      )}
    </LayerEventManager>

  );
});

Combobox.displayName = 'Combo';

Combobox.propTypes = {
  /**
   * The Combo ID. Required as it informs the label and value of the underlying input.
   */
  id: PropTypes.string.isRequired,
  /**
   * Custom handler to attach to the combo field - used to get the value of the selected combo item.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Custom handler to attach to the combo field - used to get the value of the combo on each input.
   */
  handleInput: PropTypes.func,
  /**
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
  /**
   * Label for the Combo.
   */
  label: PropTypes.string,
  /**
   * The supplied data to populate a datalist. Only accepts formatted data - logic would be provided for this in its
   * context. See the Combo component story for a rough and ready example.
   */
  apiData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Renders the given (FontAwesome) icon next to options in the list
   */
  listIcon: PropTypes.node,
  /**
   * Placeholder value to be displayed in the Combo component.
   */
  placeholder: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Prefill a value and apply prefill styles (this is used to emulate browser autocomplete styles)
   */
  prefillValue: PropTypes.string,
  /**
   * Styles the input with a border
   */
  bordered: PropTypes.bool,
  /**
   * Sets the autocomplete attribute on the input element
   */
  autocomplete: PropTypes.string,
  /**
   * Defines content as a prefix for the combo
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Defines content as a suffix for the combo
   */
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Define whether this is a required field
   */
  required: PropTypes.bool,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Define a minimum number of characters to be typed before showing the list
   */
  characterMinimum: PropTypes.number,
  /**
   * Defines a limit for the number of options to display in the dropdown list
   */
  renderLimit: PropTypes.number,
  /**
   * Content to be displayed in the blue bar at the bottom of the options list, if not supplied, the blue bar
   * will not be displayed.
   */
  listInfoBoxContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Define a tooltip to be displayed alongside this component. See Tooltip props for details.
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Classes to be applied to the Combo component
   */
  className: PropTypes.string,
  /**
   * Message for empty state
   */
  emptyStateChildren: PropTypes.string,
  /**
   *  Picture props (see the Picture component documentation)
   */
  emptyStatePicture: PropTypes.shape(picturePropTypes),

  /**
   * Classes to be applied to the EmptyState component
   */
  emptyStateClassName: PropTypes.string,
  /**
   * The heading text underneath the image
   */
  emptyStateHeading: PropTypes.string,
  /**
   * Message to help user start typing
   */
  helperMessage: PropTypes.string,
};

Combobox.defaultProps = {
  label: '',
  apiData: [],
  listIcon: null,
  placeholder: '',
  validationMessage: null,
  bordered: true,
  required: false,
  disabled: false,
  value: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  characterMinimum: 3,
  renderLimit: 10,
  listInfoBoxContent: '',
  tooltip: {},
  className: '',
  handleInput: null,
  handleFocus: null,
  handleBlur: null,
  emptyStateChildren: 'No results found',
  emptyStatePicture: null,
  emptyStateClassName: '',
  emptyStateHeading: 'No results found',
  helperMessage: 'Please start typing',
};

export default Combobox;
