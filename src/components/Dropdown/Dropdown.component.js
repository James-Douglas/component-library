import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import Overlay from '../Overlay/Overlay.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import FieldValidation from '../FieldValidation/FieldValidation.component';
import LayerEventManager from '../../LayerEventManager';
import SupportingElements from '../SupportingElements/SupportingElements';

const StyledDropdownMainWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[20]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledSvgArrow = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[16]};
  top: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.inputDisabledTextOnGray : theme.dropdown.caretFill)};
`;

const StyledDropdownContent = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  height: ${({ theme }) => theme.dropdown.height};
  padding: ${({ theme }) => (`${theme.spacing['8']} ${theme.spacing['12']}`)};
  color: ${({ theme }) => theme.dropdown.color};
`;

const StyledDropdownButton = styled.div`
  background: ${({ theme }) => theme.dropdown.background};
  ${({ theme, bordered }) => bordered && css`
    border: ${theme.borders.component};
  `}
  &:hover,
  &:focus {
    border: ${({ theme }) => theme.combo.list.item.borderFocus};
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  ${({ invalid }) => invalid && css`
    border: ${({ theme }) => theme.borders.invalid};
    &:hover,
    &:focus {
       border: ${({ theme }) => theme.borders.invalid};
       cursor: default;
    }
  `}
  ${({ disabled }) => disabled && css`
    background: ${({ theme }) => theme.dropdown.backgroundDisabled};
    border: ${({ theme }) => theme.borders.disabled};
    &:hover,
    &:focus {
       border: ${({ theme }) => theme.borders.disabled};
       cursor: default;
    }
  `}
`;

const StyledListul = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  ${({ desktop }) => desktop && css`
    max-height: ${({ theme }) => (theme.spacing[252])};
    overflow: auto;
  `}
  li {
    list-style-type: none;
    position: relative;
    border: ${({ theme }) => theme.borders.transparent};
    font-size: ${({ theme }) => theme.fontSize.base};
    padding: ${({ theme }) => `${theme.spacing['8']} ${theme.spacing['36']}`};
    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.dropdown.list.hoverBackground};
    }
    ${({ desktop }) => !desktop && css`
      font-size: ${({ theme }) => theme.fontSize.base};
      line-height: ${({ theme }) => theme.lineHeight.tight};
      padding: ${({ theme }) => `${theme.spacing['16']} ${theme.spacing['16']} ${theme.spacing['20']}`};
    `}
    &:focus {
      outline: none;
      border: ${({ theme }) => theme.dropdown.list.item.borderFocus};
    }
  }
`;

const StyledList = styled.div`
  position: absolute;
  display: inline-flex;
  width: 100%;
  box-shadow: ${({ theme }) => theme.dropdown.shadow};
  z-index: ${({ theme }) => theme.zIndex[40]};
  background: ${({ theme }) => theme.colors.white};
  top: ${({ theme }) => `calc(100% + ${theme.spacing[8]})`};
  ${({ desktop }) => (!desktop) && css`
    max-height: initial;
    overflow: auto;
    right: ${({ theme }) => theme.spacing[8]};
    left: ${({ theme }) => theme.spacing[8]};
    width: ${({ theme }) => `calc(100% - ${theme.spacing[16]})`};
    position: fixed;
    bottom: ${({ theme }) => theme.spacing[32]};
    top: ${({ theme }) => theme.spacing[152]};
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    z-index: ${({ theme }) => theme.zIndex[40]};
  `};
`;

const StyledAffix = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: ${({ theme }) => `0 ${theme.spacing[8]} 0 0`};
  padding-right: ${({ affixType }) => (affixType === 'prefix' ? '2rem' : '')};
  padding-left: ${({ affixType }) => (affixType === 'suffix' ? '2rem' : '')};
  background: ${({ theme }) => theme.input.background};
  color: ${({ theme }) => theme.dropdown.prefixColor};
`;

const StyledDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledPlaceholder = styled.span`
  ${({ theme }) => ({ ...theme.placeholder })};
`;

const Dropdown = ({
  id,
  selectedValue,
  label,
  placeholder,
  tooltip,
  children,
  validationMessage,
  required,
  bordered,
  disabled,
  prefixContent,
  handleChange,
  handleFocus,
  handleBlur,
}) => {
  const dropdownWrapper = useRef();
  const button = useRef();
  const desktop = useIsDesktop();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileModalView, setIsMobileModalView] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState();
  const mobileOverlay = !desktop && isMobileModalView;
  const [value, setValue] = useState(selectedValue);

  const handleDropdownButton = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);
      setIsMobileModalView(true);
    }
  };

  const handleFocusDropdownButton = () => {
    if (!desktop) {
      handleDropdownButton();
    }
    if (handleFocus) {
      handleFocus();
    }
  };

  const handleBlurDropdownButton = () => {
    if (handleBlur) {
      handleBlur();
    }
  };

  const modalClose = useCallback(() => {
    setDropdownOpen(false);
    setIsMobileModalView(false);
    setFocusedOptionIndex(null);
  }, [setDropdownOpen, setIsMobileModalView, setFocusedOptionIndex]);

  // click handler for dropdownItems
  const onItemClick = useCallback((event, optionValue, option) => {
    setValue(optionValue);
    setOption(option);
    handleChange && handleChange(event, optionValue, option);
  }, [setValue, handleChange]);

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

  useEffect(() => {
    if (!isDropdownOpen && !value) {
      setFocusedOptionIndex(null);
    }
  }, [value, isDropdownOpen]);

  const keyboardAccessibility = useCallback((event) => {
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
          setFocusedOptionIndex(focusedOptionIndex <= 0 ? childrenWithProps.length - 1 : focusedOptionIndex - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isDropdownOpen) {
            keyboardArrowsAccessibility(event);
            return false;
          }
          setFocusedOptionIndex(focusedOptionIndex === childrenWithProps.length - 1 ? 0 : focusedOptionIndex + 1);
          break;
        default:
          break;
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
      <StyledList desktop={desktop}>
        <StyledListul desktop={desktop}>
          {childrenWithProps}
        </StyledListul>
      </StyledList>
    );

      return (
        <>
          {(mobileOverlay && isDropdownOpen) && (
            <Overlay opacityLevel={0.3} visible={mobileOverlay && isDropdownOpen} onClose={modalClose} handleClick={modalClose} />
          )}
          {renderOptions}
        </>
      );
  };

  return (
    <LayerEventManager id={`LayerEventManagerDropdown${id}`} visible={mobileOverlay && isDropdownOpen}>
      <StyledDropdownMainWrap onKeyDown={keyboardAccessibility}>
        <Label htmlFor={id} text={label} tooltip={tooltip} />
        <StyledDropdownContainer ref={dropdownWrapper}>
          <StyledDropdownButton
            ref={button}
            role="button"
            onClick={handleDropdownButton}
            onFocus={handleFocusDropdownButton}
            onBlur={handleBlurDropdownButton}
            tabIndex={0}
            invalid={validationMessage && validationMessage.length > 0}
            disabled={disabled}
            bordered={bordered}
          >
            <StyledDropdownContent disabled={disabled}>
              {prefixContent && <StyledAffix>{prefixContent}</StyledAffix>}
              {option && <span>{option}</span>}
              {!value && placeholder && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
              <StyledSvgArrow disabled={disabled}><FontAwesomeIcon icon={faChevronDown} size="sm" flip={isDropdownOpen ? 'vertical' : null} /></StyledSvgArrow>
            </StyledDropdownContent>
          </StyledDropdownButton>
          {renderDropdownList()}
        </StyledDropdownContainer>
        <SupportingElements required={required} disabled={disabled} label={label} />
        <FieldValidation message={validationMessage} />
      </StyledDropdownMainWrap>
    </LayerEventManager>
  );
};


Dropdown.propTypes = {
  /**
   * Unique id for the component. Required.
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string,
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
  selectedValue: PropTypes.string,
  /**
   * Label for the Dropdown.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Display a border on the Dropdown
   */
  bordered: PropTypes.bool,
  /**
   * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
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
};

Dropdown.defaultProps = {
  label: '',
  placeholder: '',
  tooltip: {},
  selectedValue: null,
  children: '',
  validationMessage: '',
  disabled: false,
  bordered: true,
  required: true,
  prefixContent: '',
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
};

export default Dropdown;
