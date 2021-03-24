import React, {
  useState, useMemo, useCallback, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Input } from '@comparethemarketau/manor-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsDesktop, useId, useMountEffect } from '@comparethemarketau/manor-hooks';
import { picturePropTypes } from '@comparethemarketau/manor-picture';
import { Tag } from '@comparethemarketau/manor-tag';
import { Tooltip } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import comboDropDownList from './comboDropdownList';

import {
  StyledPresentationLayer,
  StyledContainer,
  StyledInputWrap,
  StyledTagContainer,
  StyledTagHolder,
  StyledPrefixContainer,
  StyledPrefix,
  StyledErrorToolTip,
  StyledComboListContainer,
  StyledOuterWrapper,
} from './ComboTag.styles';

const ComboTag = ({
  id: propsId,
  apiData,
  prefix,
  prefixClickHandler,
  listIcon,
  value,
  label: componentLabel,
  description,
  autocomplete,
  disabled,
  disableClearIcon,
  characterMinimum,
  placeholder,
  validationMessage,
  className,
  handleChange,
  handleInput,
  handleFocus,
  handleBlur,
  emptyStateChildren,
  emptyStatePicture,
  emptyStateClassName,
  emptyStateHeading,
  renderView,
  errorTooltip,
  tagAlertIcon,
  selectedTags,
  invalidTagCondition,
  type,
  mask,
  guide,
  bordered,
  gtmPidAnonymous,
  comboListSpacing,
}) => {
  const id = useId(propsId);
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState((value && value.length) && value);
  const [tags, setTags] = useState(selectedTags);
  const [tagElements, setTagElements] = useState([]);
  const [focusedRef, setFocusedRef] = useState(null);
  const desktop = useIsDesktop();
  const tagHolderRef = useRef(null);
  const comboInputRef = useRef(null);
  const [inlineTooltipActive, setInlineTooltipActive] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [componentFocused, setComponentFocused] = useState(false);
  const hasList = !!apiData;

  const filteredValuesRefs = useMemo(
    () => apiData && apiData.map((item) => React.createRef()),
    [apiData],
  );

  const tagKeyUp = (e) => {
    if (!hasList) {
      // Older browsers may return e.key === "Spacebar" instead of " " for the Space Bar key. Firefox did so until
      // version 37, as did Internet Explorer 9, 10, and 11.
      // also note issue with space and comma detection in android: https://github.com/comparethemarketau/manor-react/issues/585
      if (currentValue !== '' && (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.key === ',')) {
        setCurrentValue('');
        setEditMode(false);
        setTags((prevTagArray) => {
          const lastTag = prevTagArray[prevTagArray.length - 1];
          if (lastTag) {
            prevTagArray.pop();
          }
          return [...prevTagArray, { ...lastTag, visible: true }];
        });
        return;
      }

      if (e.target.value.length === 0) {
        setEditMode(false);
        setCurrentValue('');
      }

      if (e.target.value.length >= 1) {
        setEditMode(true);
      }

      setTags((prevTagArray) => {
        let alertState = false;
        const lastTag = prevTagArray[prevTagArray.length - 1];
        // prevent unwanted values from being set as a tag or set an alert
        if (invalidTagCondition) {
          alertState = invalidTagCondition(currentValue);
        }
        if (lastTag && editMode) {
          prevTagArray.pop();
        }
        // prevent empty tags
        if (currentValue.trim() === '') {
          return [...prevTagArray];
        }
        return [...prevTagArray, { label: currentValue.trim(), alert: alertState, visible: false }];
      });
    }
  };

  const tagKeyDown = (e) => {
    if (e.key === 'Backspace' && e.target.value.length === 0 && tags.length) {
      const lastTag = tagElements[tagElements.length - 1].ref.current;
      lastTag && lastTag.focus();
    }
  };

  // used if we have a list (expected with an api)
  const handleSelectItem = (tag) => {
    setInlineTooltipActive(false);
    if (!tags.some((t) => tag.label === t.label)) {
      setTags([...tags, tag]);
    } else {
      setInlineTooltipActive(true);
    }
    setListVisible(false);
    setFocusedRef(null);
    setCurrentValue('');
    if (comboInputRef.current) {
      const storedRef = comboInputRef.current.inputElement;
      setTimeout(() => {
        storedRef.focus();
      }, 100);
    }
  };

  const comboHandleChange = useCallback((valueInput) => {
    setCurrentValue(valueInput);
    setInlineTooltipActive(false);
    if (hasList) {
      setListVisible(!!valueInput.length);
    }
    scrollAndFocusInput(false);
  }, [setCurrentValue, setListVisible, hasList]);

  const handleOnFocus = (event) => {
    setComponentFocused(true);
    if (event.target.tagName === 'BUTTON') {
      return;
    }
    if (hasList) {
      setListVisible(!!currentValue.length);
    }
    if (handleFocus) {
      handleFocus(event);
    }
  };

  const handleOnBlur = (event) => {
    setComponentFocused(false);
    if (handleBlur) {
      handleBlur(event);
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
            setFocusedRef(apiData.length - 1);
            filteredValuesRefs[apiData.length - 1].current.focus();
          } else if (focusedRef === 0) {
            setFocusedRef(apiData.length - 1);
            filteredValuesRefs[apiData.length - 1].current.focus();
          } else {
            setFocusedRef(focusedRef - 1);
            filteredValuesRefs[focusedRef - 1].current.focus();
          }
        }
        break;
      case 'ArrowDown':
        if (currentValue.length >= characterMinimum) {
          event.preventDefault();
          if (focusedRef === apiData.length - 1) {
            setFocusedRef(0);
            filteredValuesRefs[0].current.focus();
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

  const deleteTagHandler = useCallback((i) => {
    setTags(tags.filter((_, index) => index !== i));
  }, [tags]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (handleInput && !firstUpdate.current) {
      handleInput(currentValue);
    }
  }, [currentValue, handleInput]);

  // block the handleToggle from firing on initial render
  useMountEffect(() => {
    firstUpdate.current = false;
  });

  // store the refs, the jsx and the alert state of the tag
  useEffect(() => {
    const temp = tags.map((tag, i) => {
      const tagRef = React.createRef();
      const {
        label, alert, shortName, visible,
      } = tag;

      return {
        ref: tagRef,
        tagJsx: <Tag
          visible={visible}
          icon={alert ? tagAlertIcon : null}
          key={`item-${label + i}`}
          value={shortName || label}
          alert={alert}
          ref={tagRef}
          onClickDelete={() => deleteTagHandler(i)}
          onKeyDown={() => deleteTagHandler(i)}
          elementRef={comboInputRef.current.inputElement}
        />,
        alert,
      };
    });
    setTagElements(temp);
  }, [tags, deleteTagHandler, hasList, tagAlertIcon]);

  // if the selected tags prop updates, add tags to state
  useEffect(() => {
    setTags(selectedTags);
  }, [selectedTags]);

  // fire handleChange func (if passed) with the current tags
  useEffect(() => {
    if (handleChange) {
      handleChange(tags);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  const { title, body } = errorTooltip;

  const scrollAndFocusInput = (focus = true) => {
    // ensure container is fully scrolled
    if (tagHolderRef.current) {
      if (tagHolderRef.current.scrollTop !== tagHolderRef.current.scrollHeight) {
        tagHolderRef.current.scrollTop = tagHolderRef.current.scrollHeight;
      }
    }
    if (comboInputRef.current && focus) {
      comboInputRef.current.inputElement.focus();
    }
  };

  const memoizedTagElements = useMemo(
    () => tagElements.map(({ tagJsx }) => tagJsx), [tagElements],
  );

  return (
    <>
      {componentLabel
      && <Label htmlFor={id} text={componentLabel} />}
      {description
      && <Label htmlFor={id} text={description} variant="description" />}
      <StyledOuterWrapper hasList={hasList}>
        <StyledContainer componentFocused={componentFocused} hasList={hasList}>
          <StyledPresentationLayer
            role="presentation"
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            onKeyDown={keyboardAccessibility}
            hasList={hasList}
          >

            {prefix
            && (
              <StyledPrefixContainer>
                <StyledPrefix onClick={prefixClickHandler} hasList={hasList}>
                  <FontAwesomeIcon icon={prefix} size="lg" />
                </StyledPrefix>
              </StyledPrefixContainer>

            )}
            <StyledTagContainer hasList={hasList} bordered={bordered}>
              <StyledTagHolder ref={tagHolderRef} tags={tags} hasList={hasList} onClick={() => { hasList && scrollAndFocusInput(); }}>
                {memoizedTagElements}
                <StyledInputWrap hasList={hasList}>
                  {inlineTooltipActive
                && (
                <StyledErrorToolTip tabIndex="-1">
                  <Tooltip
                    active={inlineTooltipActive}
                    title={title}
                    body={body}
                    placement="top-end"
                    screenReaderLabel={body}
                  >&nbsp;
                  </Tooltip>
                </StyledErrorToolTip>
                )}
                  <Input
                    id={id}
                    placeholder={tags.length === 0 ? placeholder : ''}
                    value={currentValue}
                    disabled={disabled}
                    disableClearIcon={disableClearIcon}
                    autocomplete={autocomplete}
                    handleChange={comboHandleChange}
                    handleKeyUp={tagKeyUp}
                    handleKeyDown={tagKeyDown}
                    className={className}
                    bordered={false}
                    tabIndex="0"
                    role={hasList ? 'combobox' : null}
                    removeGutters
                    ref={comboInputRef}
                    disableFocusStyles
                    type={type}
                    mask={mask}
                    guide={guide}
                    gtmPidAnonymous={gtmPidAnonymous}
                  />
                </StyledInputWrap>
              </StyledTagHolder>
            </StyledTagContainer>

            {validationMessage
          && <FieldValidation message={validationMessage} />}

            {hasList
          && (
          <StyledComboListContainer>
            {comboDropDownList(
              desktop,
              listIcon,
              characterMinimum,
              apiData,
              handleSelectItem,
              filteredValuesRefs,
              listVisible,
              currentValue,
              emptyStateChildren,
              emptyStatePicture,
              emptyStateClassName,
              emptyStateHeading,
              renderView,
              comboListSpacing,
            )}
          </StyledComboListContainer>
          )}
          </StyledPresentationLayer>
        </StyledContainer>
      </StyledOuterWrapper>
    </>
  );
};

ComboTag.displayName = 'ComboTag';

ComboTag.propTypes = {
  /**
   * Unique identifier for the Combobox
   */
  id: PropTypes.string,
  /**
   * Label for the Combotag.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Description for the ComboTag.
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Custom handler to attach to the combo field - used to get the value of the selected combo item.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Custom handler to attach to the combo field - used to get the value of the combo on each input.
   */
  handleInput: PropTypes.func,
  /**
   * Called on focus of the combo tag
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the combo tag
   */
  handleBlur: PropTypes.func,
  /**
   * The supplied data to populate a datalist. Only accepts formatted data - logic would be provided for this in its
   * context. See the Combo component story for a rough and ready example.
   */
  apiData: PropTypes.arrayOf(PropTypes.object),
  /**
   * Renders the given FontAwesome icon next to options in the list
   */
  listIcon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Renders the given (FontAwesome) as a prefix
   */
  prefix: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Custom click handler to be fired on prefix click
   */
  prefixClickHandler: PropTypes.func,
  /**
   * Renders the given (FontAwesome) icon for a tag in its alert state
   */
  tagAlertIcon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
    PropTypes.string,
  ]),
  /**
   * Placeholder value to be displayed in the Combo component.
   */
  placeholder: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Sets the autocomplete attribute on the input element
   */
  autocomplete: PropTypes.string,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Disables the clear icon when true
   */
  disableClearIcon: PropTypes.bool,
  /**
   * Define a minimum number of characters to be typed before showing the list
   */
  characterMinimum: PropTypes.number,
  /**
   * Defines a limit for the viewable items in the list before scrolling
   */
  renderView: PropTypes.number,
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
   * The text to display as an error tooltip
   */
  errorTooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  /**
   * Update the tags via prop
   */
  selectedTags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  /**
   * Custom function to check if the tag is valid
   */
  invalidTagCondition: PropTypes.func,
  /**
   * Mask to be applied to the input, see https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
   * Supported input types Please note that Text Mask supports input type of text, tel, url, password, and search.
   * Due to a limitation in browser API, other input types, such as email or number, cannot be supported.
   * However, it is normal to let the user enter an email or a number in an input type text combined the appropriate input mask.
   */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  /**
   * Sets the guide mode
   */
  guide: PropTypes.bool,
  /**
   * Sets the type of the input
   */
  type: PropTypes.string,
  /**
   * Sets the border of the combo tag
   */
  bordered: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Used to indicate if a field contains personally identifying data which needs to remain anonymous from google analytics
   */
  gtmPidAnonymous: PropTypes.bool,
  /**
   * Define if there's margin top of the list (a gap between the input and the list)
   */
  comboListSpacing: PropTypes.bool,
};

ComboTag.defaultProps = {
  id: null,
  listIcon: null,
  placeholder: '',
  label: '',
  description: '',
  apiData: null,
  disabled: false,
  disableClearIcon: false,
  value: '',
  autocomplete: 'off',
  characterMinimum: 1,
  renderView: 10,
  className: '',
  handleInput: null,
  handleFocus: null,
  handleBlur: null,
  emptyStateChildren: 'No results found',
  emptyStatePicture: null,
  emptyStateClassName: '',
  emptyStateHeading: 'No results found',
  errorTooltip: {},
  tagAlertIcon: null,
  selectedTags: [],
  prefix: null,
  prefixClickHandler: null,
  invalidTagCondition: null,
  // there is a bug in text-mask where disabling the mask (setting to false) causes the input value to not
  // reset when the clear icon is clicked (PR:https://github.com/text-mask/text-mask/pull/831)
  mask: (value) => Array(value.length).fill(/./),
  guide: false,
  type: 'text',
  bordered: false,
  validationMessage: null,
  gtmPidAnonymous: false,
  comboListSpacing: true,
};

export default ComboTag;
