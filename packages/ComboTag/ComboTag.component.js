import React, {
  useState, useMemo, useCallback, useEffect, useLayoutEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Input } from '@comparethemarketau/manor-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@comparethemarketau/manor-typography';
import { useIsDesktop, useId, useMountEffect } from '@comparethemarketau/manor-hooks';
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
            {!emptyState && comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon, currentValue)}
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

export function comboDataList(apiData, handleSelectItem, filteredValuesRefs, listIcon, currentValue) {
  const renderText = (filteredValue) => <Typography variant="body2" noMargins>{filteredValue.substring(0, 0)}<b>{filteredValue.substring(0, currentValue.length)}</b>{filteredValue.substring(0 + currentValue.length, filteredValue.length)}</Typography>;
  return (
    <StyledList>
      {apiData.map((filteredValue, index) => (
        <StyledListItem
          tabIndex="0"
          key={`option-${filteredValue.label}`}
          role="listitem"
          data-type="list"
          onMouseDown={() => handleSelectItem(filteredValue)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {listIcon && (
            <StyledIconWrap>
              <FontAwesomeIcon icon={listIcon} size="sm" />
            </StyledIconWrap>
          )}
          {renderText(filteredValue.label)}
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
  alertText,
  alertTooltip,
  errorTooltip,
  selectedTags,
}) => {
  const id = useId(propsId);
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState((value && value.length) && value);
  const [tags, setTags] = useState([]);
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

  const handleSelectItem = (tag) => {
    setInlineTooltipActive(false);
    const tagExists = tags.filter((t) => tag.label === t.label);
    if (!tagExists.length) {
      setTags([...tags, tag]);
    } else {
      setInlineTooltipActive(true);
    }

    setListVisible(false);
    setFocusedRef(null);
    setCurrentValue('');
  };

  const comboHandleChange = useCallback((valueInput) => {
    setCurrentValue(valueInput);
    setInlineTooltipActive(false);
    setListVisible(!!valueInput.length);
  }, [setCurrentValue, setListVisible]);

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
    let tempWidth = 10;
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
        label, alert, shortName,
      } = tag;
      return {
        ref: tagRef,
        tagJsx: <Tag key={`item-${label + i}`} value={shortName || label} alert={alert} ref={tagRef} onClickDelete={() => deleteTagHandler(i)} />,
        alert,
      };
    });
    setTagElements(temp);
  }, [tags, deleteTagHandler]);

  // fire handleChange func (if passed) with the current tags
  useEffect(() => {
    if (handleChange) {
      handleChange(tags);
    }
  }, [tags, handleChange]);

  const { title, body } = errorTooltip;

  // if the selected tags prop updates, add tags to state
  useEffect(() => {
    if (selectedTags.length !== tags.length) {
      setTags(selectedTags);
    }
  }, [selectedTags, setTags]);

  return (
    <StyledContainer>
      <div
        role="presentation"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onKeyDown={keyboardAccessibility}
      >
        {(alerts && tags.length > 0) && renderAlert()}
        <StyledTagContainer>
          <StyledPrefix>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          </StyledPrefix>
          <StyledFade fade={fade} tagsVisible={tagsVisible} />
          <StyledTagHolder ref={tagHolderRef} tags={tags} tagsVisible={tagsVisible}>
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
   * The text to display as an alert message
   */
  alertText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * The text to display as an alert tooltip
   */
  alertTooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
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
};

ComboTag.defaultProps = {
  id: null,
  listIcon: null,
  placeholder: '',
  disabled: false,
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
  alertText: '',
  alertTooltip: {},
  errorTooltip: {},
  selectedTags: [],
};

export default ComboTag;
