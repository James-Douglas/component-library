import React, {
  useState, useMemo, useCallback, useEffect, useLayoutEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Input } from '@comparethemarketau/manor-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@comparethemarketau/manor-typography';
import { useIsDesktop, useId } from '@comparethemarketau/manor-hooks';
import { picturePropTypes } from '@comparethemarketau/manor-picture';
import { EmptyState } from '@comparethemarketau/manor-empty-state';
import { Tag } from '@comparethemarketau/manor-tag';
import { Tooltip } from '@comparethemarketau/manor-tooltip';

import {
  StyledContainer,
  StyledInputWrap,
  StyledTagContainer,
  StyledTagHolder,
  StyledBorder,
  StyledComboList,
  StyledComboListWrap,
  StyledDropdownList,
  StyledEmptyStateMessage,
  StyledIconWrap,
  StyledList,
  StyledListItem,
  WrapList,
  StyledPrefix,
  StyledFade,
  StyledAlertText,
  StyledLink,
  StyledErrorToolTip,
  StyledAlertIcon,
} from './ComboTag.styles';

export function comboDropdownList(
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
  keys,
) {
  const positionDesktop = !desktop ? 'relative' : 'absolute';
  const emptyState = !listVisible;
  const positionConst = emptyState ? 'hidden' : positionDesktop;
  const noResultCondition = apiData.length === 0 && currentValue.length >= characterMinimum;

  return (
    <WrapList desktop={desktop}>
      <StyledDropdownList position={positionConst} role="listwrap" desktop={desktop}>
        <StyledComboListWrap renderView={renderView}>
          <StyledComboList desktop={desktop}>
            {!emptyState && comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon, currentValue, keys)}
            {noResultCondition && (
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
          </StyledComboList>
        </StyledComboListWrap>
      </StyledDropdownList>
    </WrapList>
  );
}

export function comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon, currentValue, keys) {
  const renderText = (filteredValue) => <Typography variant="body2">{filteredValue.substring(0, 0)}<b>{filteredValue.substring(0, currentValue.length)}</b>{filteredValue.substring(0 + currentValue.length, filteredValue.length)}</Typography>;
  return (
    <StyledList>
      {apiData.map((filteredValue, index) => (
        <StyledListItem
          tabIndex="0"
          key={`option-${filteredValue[keys[0]]}`}
          role="listitem"
          data-type="list"
          onMouseDown={() => handleSelectItem(filteredValue[keys[0]], filteredValue[keys[1]], filteredValue[keys[2]], filteredValue[keys[3]])}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelectItem(filteredValue[keys[0]], filteredValue[keys[1]], filteredValue[keys[2]], filteredValue[keys[3]])}
          ref={filteredValuesRefs[index]}
        >
          {listIcon && (
            <StyledIconWrap>
              <FontAwesomeIcon icon={listIcon} size="sm" />
            </StyledIconWrap>
          )}
          {renderText(filteredValue[keys[0]])}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const ComboTag = ({
  id: propsId,
  apiData,
  listIcon,
  value,
  prefillValue,
  autocomplete,
  disabled,
  characterMinimum,
  placeholder,
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
  keys,
  alertText,
  alertTooltip,
  errorTooltip,
}) => {
  const id = useId(propsId);
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState((value && value.length) && value);
  const [tags, setTags] = useState(prefillValue || []);
  const [tagElements, setTagElements] = useState([]);
  const [alerts, setAlerts] = useState(false);
  const [tagsVisible, setTagsVisible] = useState(true);
  const [focusedRef, setFocusedRef] = useState(null);
  const desktop = useIsDesktop();
  const tagHolderRef = useRef(null);
  const comboInputRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [tagsWidth, setTagsWidth] = useState(0);
  const [inlineTooltipActive, setInlineTooltipActive] = useState(false);

  const filteredValuesRefs = useMemo(
    () => apiData.map((item) => React.createRef()),
    [apiData],
  );

  const handleSelectItem = (selectedValue, code, alert, shortName) => {
    setInlineTooltipActive(false);
    const tagExists = tags.filter((tag) => tag.selectedValue === selectedValue);
    if (!tagExists.length) {
      setTags([...tags, {
        selectedValue, code, alert, shortName,
      }]);
    } else {
      setInlineTooltipActive(true);
    }

    setListVisible(false);
    setFocusedRef(null);
    if (handleChange) {
      handleChange(selectedValue);
    }
    setCurrentValue('');
  };

  const comboHandleChange = useCallback((valueInput) => {
    setCurrentValue(valueInput);
    setInlineTooltipActive(false);
    setListVisible(!!valueInput.length);
    if (handleInput) {
      handleInput(valueInput);
    }
  }, [setCurrentValue, setListVisible, handleInput]);

  const handleOnFocus = (event) => {
    if (event.target.tagName === 'BUTTON') {
      return;
    }
    setListVisible(!!currentValue.length);
    if (handleFocus) {
      handleFocus();
    }
  };

  const handleOnBlur = (event) => {
    if (handleBlur) {
      handleBlur();
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

  const updateTagsWidth = useCallback(() => {
    let tempWidth = 0;
    tagElements.forEach(({ ref }) => {
      tempWidth += parseInt(ref.current.getBoundingClientRect().width, 10);
    });
    setTagsWidth(tempWidth);
  }, [tagElements]);

  const renderAlert = useCallback(() => {
    // eslint-disable-next-line no-shadow
    const alertTags = tagElements.reduce((result, { tagJsx: { props: { value } }, alert }) => [...result, ...alert ? [value] : []], []);
    const alertStr = alertTags.join(', ').replace(/,(?!.*,)/gmi, ' and');
    const { title, body } = alertTooltip;
    return (
      <>
        <StyledAlertIcon>
          <FontAwesomeIcon icon={faFlag} size="lg" />
        </StyledAlertIcon>
        <StyledAlertText>
          <b>{alertStr}&nbsp;</b>
          {alertText}&nbsp;
          <Tooltip
            title={`${alertStr} ${title}`}
            body={body}
            placement="top"
            variant="light"
            screenReaderLabel={`${alertStr} ${title}`}
          >
            <StyledLink>Learn more</StyledLink>
          </Tooltip>
        </StyledAlertText>
      </>
    );
  }, [alertText, alertTooltip, tagElements]);

  // if tags, show tags
  useEffect(() => {
    if (tags.length && !listVisible) {
      setTagsVisible(true);
    } else {
      setTagsVisible(false);
    }
  }, [tags, listVisible]);

  // if alerts, show alerts
  useEffect(() => {
    setAlerts(tagElements.some(({ alert }) => alert));
  }, [tagElements]);

  // update width of tag holder and trigger the fade effect
  useLayoutEffect(() => {
    if (tagElements.length && tagHolderRef.current) {
      updateTagsWidth();
      if (tagHolderRef.current.getBoundingClientRect().width < tagsWidth) {
        tagHolderRef.current.scrollLeft += 10000;
        setFade(true);
      } else {
        setFade(false);
      }
    }
  }, [tagElements, tagsWidth, updateTagsWidth]);

  // store the refs, the jsx and the alert state of the tag
  useEffect(() => {
    const temp = tags.map((tag, i) => {
      const tagRef = React.createRef();
      const {
        selectedValue, code, alert, shortName,
      } = tag;
      return {
        ref: tagRef,
        tagJsx: <Tag key={`item-${selectedValue + i}`} value={shortName || selectedValue} code={code} alert={alert} ref={tagRef} onClickDelete={() => deleteTagHandler(i)} />,
        alert,
      };
    });
    setTagElements(temp);
  }, [tags, deleteTagHandler]);

  const { title, body } = errorTooltip;

  return (
    <StyledContainer>
      <div
        role="presentation"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onKeyDown={keyboardAccessibility}
      >
        {(alerts && tags.length) && renderAlert()}
        <StyledTagContainer>
          <StyledPrefix>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          </StyledPrefix>
          <StyledFade fade={fade} tagsVisible={tagsVisible} />
          <StyledTagHolder ref={tagHolderRef} tags={tags} tagsVisible={tagsVisible} tagsWidth={tagsWidth}>
            {tagsVisible && tagElements.map(({ tagJsx }) => tagJsx)}
          </StyledTagHolder>
          <StyledInputWrap>
            <StyledErrorToolTip>
              <Tooltip
                active={inlineTooltipActive}
                title={title}
                body={body}
                placement="top-end"
                variant="light"
                screenReaderLabel={body}
              >&nbsp;
              </Tooltip>
            </StyledErrorToolTip>
            <Input
              id={id}
              placeholder={placeholder}
              value={currentValue}
              disabled={disabled}
              autocomplete={autocomplete}
              handleChange={comboHandleChange}
              className={className}
              bordered={false}
              tabIndex="0"
              role="comboField"
              removeGutters
              ref={comboInputRef}
              disableFocusStyles
              dataList={() => comboDropdownList(
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
                keys,
              )}
            />
          </StyledInputWrap>
        </StyledTagContainer>
      </div>
      <StyledBorder />
    </StyledContainer>
  );
};

ComboTag.displayName = 'ComboTag';

ComboTag.propTypes = {
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
  apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Renders the given (FontAwesome) icon next to options in the list
   */
  listIcon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array, // eslint-disable-line
    }),
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
   * Prefill the tags
   */
  prefillValue: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  /**
   * Sets the autocomplete attribute on the input element
   */
  autocomplete: PropTypes.string,
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
   * The keys for accessing the api data
   */
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The text to display as an alert message
   */
  alertText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  alertTooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  errorTooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

ComboTag.defaultProps = {
  id: null,
  listIcon: null,
  placeholder: '',
  disabled: false,
  value: '',
  prefillValue: [],
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
  alertText: '',
  alertTooltip: {},
  errorTooltip: {},
};

export default ComboTag;

/* scrolling func on the combo dropdown */
// more space for the tags in general, min size for the input
//
