import React, {
  useState, useMemo, useCallback, useEffect, useLayoutEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Typography } from '@comparethemarketau/manor-typography';
import { Input } from '@comparethemarketau/manor-input';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { picturePropTypes } from '@comparethemarketau/manor-picture';
import { EmptyState } from '@comparethemarketau/manor-empty-state';

import {
  StyledButtonWrap,
  StyledComboList,
  StyledComboListWrap,
  StyledDefault,
  StyledDiv,
  StyledDropdownList,
  StyledEmptyStateMessage,
  StyledIconWrap,
  StyledList,
  StyledListItem,
  WrapList,
  StyledIconCloseModal,
} from './Combobox.styles';

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
  renderView,
) {
  const positionDesktop = !desktop ? 'relative' : 'absolute';
  const emptyState = !listVisible || currentPrefillValue.length < characterMinimum;
  const positionConst = emptyState ? 'hidden' : positionDesktop;

  return (
    <WrapList desktop={desktop}>
      <StyledDropdownList position={positionConst} role="listwrap" desktop={desktop}>
        <StyledComboListWrap desktop={desktop} renderView={renderView}>
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
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {listIcon && (
            <StyledIconWrap>
              <FontAwesomeIcon icon={listIcon} size="lg" />
            </StyledIconWrap>
          )}
          <Typography variant="body2" component="span" noMargins>{filteredValue}</Typography>
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
          <Typography variant="body1" align="center" noMargins>
            { listInfoBoxContent }
          </Typography>
        </StyledButtonWrap>
      )}
    </>
  );
}

const Combobox = ({
  id: propsId,
  label,
  apiData,
  listIcon,
  placeholder,
  validationMessage,
  value,
  prefillValue,
  prefixContent,
  suffixContent,
  autocomplete,
  required,
  disabled,
  characterMinimum,
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
  disableClearIcon,
  gtmPidAnonymous,
  renderView,
}) => {
  const id = useId(propsId);
  const [listVisible, setListVisible] = useState(false);
  const [isMobileModalView, setIsMobileModalView] = useState(false);
  const [currentValue, setCurrentValue] = useState(value && value.length ? value : prefillValue);
  const [focusedRef, setFocusedRef] = useState(null);
  const bottomButton = React.createRef();
  const mobileModalRef = React.createRef();
  const { isDesktop } = useContext(ManorContext);
  const mobileOverlay = !isDesktop && isMobileModalView;

  const dataRefs = useMemo(
    () => apiData.map((item) => React.createRef()),
    [apiData],
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
    if (isMobileModalView && mobileModalRef) {
      mobileModalRef.current.inputElement.focus();
    }
  }, [isMobileModalView, mobileModalRef]);

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
        if (closestLink) {
          closestLink.focus();
          closestLink.click();
        }
        break;
      case 'ArrowUp':
        if (currentValue.length >= characterMinimum) {
          event.preventDefault();
          if (focusedRef === null) {
            if (listInfoBoxContent) {
              if (document.activeElement === bottomButton.current) {
                setFocusedRef(apiData.length - 1);
                dataRefs[apiData.length - 1].current.focus();
              } else {
                setFocusedRef(null);
                bottomButton.current.focus();
              }
            } else {
              setFocusedRef(apiData.length - 1);
              dataRefs[apiData.length - 1].current.focus();
            }
          } else if (focusedRef === 0) {
            if (listInfoBoxContent) {
              setFocusedRef(null);
              bottomButton.current.focus();
            } else {
              setFocusedRef(apiData.length - 1);
              dataRefs[apiData.length - 1].current.focus();
            }
          } else {
            setFocusedRef(focusedRef - 1);
            dataRefs[focusedRef - 1].current.focus();
          }
        }
        break;
      case 'ArrowDown':
        if (currentValue.length >= characterMinimum) {
          event.preventDefault();
          if (focusedRef === apiData.length - 1) {
            if (listInfoBoxContent) {
              setFocusedRef(null);
              bottomButton.current.focus();
            } else {
              setFocusedRef(0);
              dataRefs[0].current.focus();
            }
          } else if (focusedRef === null) {
            setFocusedRef(0);
            dataRefs[0].current.focus();
          } else {
            setFocusedRef(focusedRef + 1);
            dataRefs[focusedRef + 1].current.focus();
          }
        }
        break;
      default:
        break;
    }
  };

  const emptyStateCondition = currentValue.length < characterMinimum;
  const noResultCondition = apiData.length === 0 && currentValue.length >= characterMinimum;

  return (
    <>
      {(mobileOverlay || isDesktop) && (
        <>
          <StyledDiv
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={keyboardAccessibility}
            desktop={isDesktop}
          >
            {emptyStateCondition && mobileOverlay && <StyledEmptyStateMessage><Typography variant="body1">{helperMessage}</Typography></StyledEmptyStateMessage>}
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
              tooltip={!mobileOverlay && tooltip}
              placeholder={placeholder}
              label={!mobileOverlay && label}
              value={currentValue}
              prefillValue={prefillValue}
              required
              disabled={disabled}
              validationMessage={validationMessage}
              prefixContent={prefixContent}
              suffixContent={suffixContent}
              autocomplete={autocomplete}
              handleChange={comboHandleChange}
              className={className}
              tabIndex="0"
              ref={mobileModalRef}
              role="comboField"
              dataList={() => comboDropdownList(
                isDesktop,
                listInfoBoxContent,
                listIcon,
                bottomButton,
                currentValue,
                characterMinimum,
                apiData,
                handleSelectItem,
                dataRefs,
                listVisible,
                renderView,
              )}
              disableClearIcon={disableClearIcon}
              gtmPidAnonymous={gtmPidAnonymous}
            />
            {!isDesktop && <StyledIconCloseModal icon={faTimes} variant="tertiary" handleClick={() => { setIsMobileModalView(false); }} />}
          </StyledDiv>
        </>
      )}
      {!isDesktop && (
        <StyledDefault>
          <Input
            id={`mobile${id}`}
            tooltip={tooltip}
            placeholder={placeholder}
            label={label}
            value={currentValue}
            prefillValue={prefillValue}
            required={required}
            disabled={disabled}
            validationMessage={validationMessage}
            prefixContent={prefixContent}
            suffixContent={suffixContent}
            handleOnClick={setMobileFocus}
            handleChange={() => {}}
            handleFocus={setMobileFocus}
            tabIndex="0"
            role="comboMobileField"
            disableClearIcon={disableClearIcon}
          />
        </StyledDefault>
      )}
    </>
  );
};

Combobox.displayName = 'Combo';

Combobox.propTypes = {
  /**
   * Unique identifier for the Combobox
   */
  id: PropTypes.string,
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The supplied data to populate a datalist. Only accepts formatted data - logic would be provided for this in its
   * context. See the Combo component story for a rough and ready example.
   */
  apiData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Renders the given FontAwesome icon next to options in the list
   */
  listIcon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Placeholder value to be displayed in the Combo component.
   */
  placeholder: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Prefill a value and apply prefill styles (this is used to emulate browser autocomplete styles)
   */
  prefillValue: PropTypes.string,
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
   * Defines a limit for the viewable items in the list before scrolling
   */
  renderView: PropTypes.number,
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
  emptyStateHeading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Message for empty state
   */
  emptyStateChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Message to help user start typing
   */
  helperMessage: PropTypes.string,
  /**
   * Disables the clear icon when true
   */
  disableClearIcon: PropTypes.bool,
  /**
   * Used to indicate if a field contains personally identifying data which needs to remain anonymous from google analytics
  */
  gtmPidAnonymous: PropTypes.bool,
};

Combobox.defaultProps = {
  id: null,
  label: '',
  apiData: [],
  listIcon: null,
  placeholder: '',
  validationMessage: null,
  required: false,
  disabled: false,
  value: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  characterMinimum: 3,
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
  disableClearIcon: false,
  gtmPidAnonymous: false,
  renderView: 10,
};

export default Combobox;
