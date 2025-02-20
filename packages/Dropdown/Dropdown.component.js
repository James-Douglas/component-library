import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { SupportingElements } from '@comparethemarketau/manor-supporting-elements';
import {
  StyledAffix,
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContent,
  StyledDropdownMainWrap,
  StyledList,
  StyledListul,
  StyledPlaceholder,
  StyledSvgArrow,
} from './Dropdown.styles';

const Dropdown = ({
  trackingLabel,
  id: propsId,
  selectedValue,
  label,
  labelProps,
  placeholder,
  tooltip,
  children,
  validationMessage,
  required,
  disabled,
  prefixContent,
  handleChange,
  handleFocus,
  handleBlur,
  variant,
  className,
}) => {
  const id = useId(propsId);
  const dropdownWrapper = useRef();
  const button = useRef();
  const { trackInteraction } = useContext(ManorContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState();
  const [value, setValue] = useState(selectedValue);

  const handleDropdownButton = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const handleFocusDropdownButton = () => {
    if (handleFocus) {
      handleFocus();
    }
    trackInteraction('Focus', 'Dropdown', 'Dropdown', trackingLabel, value || '');
  };

  const handleBlurDropdownButton = () => {
    if (handleBlur) {
      handleBlur();
    }
  };

  const modalClose = useCallback(() => {
    setDropdownOpen(false);
    setFocusedOptionIndex(null);
  }, [setDropdownOpen, setFocusedOptionIndex]);

  // click handler for dropdownItems
  const onItemClick = useCallback((event, optionValue, option) => {
    setValue(optionValue);
    trackInteraction('Selection', 'Dropdown', 'Dropdown', trackingLabel, optionValue);
    setOption(option);
    handleChange && handleChange(event, optionValue, option);
  }, [trackInteraction, trackingLabel, handleChange]);

  // map dropdownItems with additional props
  const childrenWithProps = useMemo(() => React.Children.map(children, (child) => React.cloneElement(child, {
    selectedValue: value,
    optionValue: child.props.children,
    handleClick: (event, optionValue) => {
      onItemClick(event, optionValue, child.props.children);
      modalClose();
    },
    handleKeyDown: (event, optionValue) => {
      if (event.keyCode === 13) {
        onItemClick(event, optionValue, child.props.children);
        modalClose();
      }
    },
    ref: React.createRef(),
  })), [children, modalClose, onItemClick, value]);

  // preselect an item
  const preSelected = childrenWithProps.find((child) => child.props.value === selectedValue);

  const [option, setOption] = useState(preSelected ? preSelected.props.optionValue : null);

  const handleClickOutside = useCallback((e) => {
    if (!dropdownWrapper.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }, [dropdownWrapper]);

  const keyboardArrowsAccessibility = useCallback((event) => {
    setDropdownOpen(true);
    let selectedIndex = 0;
    if (value) {
      selectedIndex = childrenWithProps.findIndex((child) => child.props.value === value);
    } else if (event.key === 'ArrowUp') {
      selectedIndex = childrenWithProps.length - 1;
    }
    setFocusedOptionIndex(selectedIndex);
  }, [childrenWithProps, value]);

  const isScreenTouch = () => {
    try {
      const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

      const mq = (query) => window.matchMedia(query).matches;

      if (('ontouchstart' in window) || (typeof window.DocumentTouch !== 'undefined' && document instanceof window.DocumentTouch)) {
        return true;
      }
      return mq(['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(''));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('(Touch detect failed)', e);
      return false;
    }
  };

  useEffect(() => {
    if (!isDropdownOpen && !value) {
      setFocusedOptionIndex(null);
    }
  }, [value, isDropdownOpen]);

  const keyboardAccessibility = useCallback((event) => {
    const upFocusedOptionIndex = typeof focusedOptionIndex === 'undefined' ? childrenWithProps.length : focusedOptionIndex;
    const downFocusedOptionIndex = typeof focusedOptionIndex === 'undefined' ? -1 : focusedOptionIndex;

    if (!disabled) {
      switch (event.key) {
        case 'Escape':
          setDropdownOpen(false);
          button.current.focus();
          break;
        case 'Enter':
          setDropdownOpen(!isDropdownOpen);
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (!isDropdownOpen) {
            keyboardArrowsAccessibility(event);
            return false;
          }
          setFocusedOptionIndex(upFocusedOptionIndex <= 0 ? childrenWithProps.length - 1 : upFocusedOptionIndex - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isDropdownOpen) {
            keyboardArrowsAccessibility(event);
            return false;
          }
          setFocusedOptionIndex(downFocusedOptionIndex === childrenWithProps.length - 1 ? 0 : downFocusedOptionIndex + 1);
          break;
        default:
          break;
      }
      if (
        // Alphabet upper case
        (event.keyCode >= 65 && event.keyCode <= 90)
        // Alphabet lower case
        || (event.keyCode >= 97 && event.keyCode <= 122)) {
        event.stopPropagation();
        // search from focused element
        let letterOptionIndex = childrenWithProps.findIndex((child, index) => index > (focusedOptionIndex || 0) && child.props.optionValue.charAt(0).toLowerCase() === event.key.toLowerCase());
        if (letterOptionIndex > -1) {
          setFocusedOptionIndex(letterOptionIndex);
        } else {
          // otherwise search from start
          letterOptionIndex = childrenWithProps.findIndex((child) => child.props.optionValue.charAt(0).toLowerCase() === event.key.toLowerCase());
          if (letterOptionIndex > -1) {
            setFocusedOptionIndex(letterOptionIndex);
          }
        }
      }
    }
    return false;
  }, [disabled, isDropdownOpen, focusedOptionIndex, keyboardArrowsAccessibility, childrenWithProps]);

  useEffect(() => {
    if (focusedOptionIndex !== null) {
      const currentOption = childrenWithProps[focusedOptionIndex];
      currentOption && currentOption.ref && currentOption.ref.current && currentOption.ref.current.focus();
    }
  }, [childrenWithProps, focusedOptionIndex]);

  useLayoutEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const renderDropdownList = () => {
    if (!isDropdownOpen) return null;

    const renderOptions = (
      <StyledList variant={variant}>
        <StyledListul screenTouch={isScreenTouch()}>
          {childrenWithProps}
        </StyledListul>
      </StyledList>
    );

    return (
      <>
        {renderOptions}
      </>
    );
  };
  return (
    <>
      <StyledDropdownMainWrap onKeyDown={keyboardAccessibility} id={id} variant={variant}>
        <Label
          htmlFor={id}
          text={label}
          tooltip={tooltip}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...labelProps}
        />
        <StyledDropdownContainer ref={dropdownWrapper} variant={variant}>
          <StyledDropdownButton
            ref={button}
            role="button"
            onClick={handleDropdownButton}
            onFocus={handleFocusDropdownButton}
            onBlur={handleBlurDropdownButton}
            tabIndex={0}
            invalid={validationMessage && validationMessage.length > 0}
            disabled={disabled}
            variant={variant}
            className={className}
          >
            <StyledDropdownContent disabled={disabled} variant={variant}>
              {prefixContent && <StyledAffix>{prefixContent}</StyledAffix>}
              {option && <span>{option}</span>}
              {!value && placeholder && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
              <StyledSvgArrow disabled={disabled} variant={variant}><FontAwesomeIcon icon={faChevronDown} size="sm" flip={isDropdownOpen ? 'vertical' : null} /></StyledSvgArrow>
            </StyledDropdownContent>
          </StyledDropdownButton>
          {renderDropdownList()}
        </StyledDropdownContainer>
        {variant !== 'text' && <SupportingElements required={required} disabled={disabled} label={label} />}
        <FieldValidation message={validationMessage} />
      </StyledDropdownMainWrap>
    </>
  );
};

Dropdown.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier for the dropdown
   */
  id: PropTypes.string,
  /**
   * Label for the input
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Additional Label props for the dropdown input's label
   */
  labelProps: PropTypes.shape({
    variant: PropTypes.oneOf(['default', 'compact', 'description']),
    className: PropTypes.string,
  }),
  /**
   * The placeholder text for the Dropdown
   */
  placeholder: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * The currently selected value of the Dropdown (use to preselect)
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Label for the Dropdown.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Disables the button via a class on its wrapper, and an attribute on the dropdown
   */
  disabled: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the input
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Called on change of the Dropdowns selected value.
   */
  handleChange: PropTypes.func,
  /**
   * Called on focus of the dropdown
   */
  handleFocus: PropTypes.func,
  /**
   * Function called when dropdown loses focus
   */
  handleBlur: PropTypes.func,
  /**
   * alters the visual style of the dropdown 'default' / null is standard, 'text' replaces the MUI 'TextDropdown' component
   * If using 'text' or 'text-fixed-chevron' please also use the placeholder prop so that the dropdown field is perceptible
   */
  variant: PropTypes.string,
  /**
   * Additional classname props for dropdown text
   */
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  id: null,
  label: '',
  labelProps: {},
  placeholder: '',
  tooltip: {},
  selectedValue: null,
  children: '',
  validationMessage: '',
  disabled: false,
  required: true,
  prefixContent: '',
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  variant: 'default',
  className: '',
};

export default Dropdown;
