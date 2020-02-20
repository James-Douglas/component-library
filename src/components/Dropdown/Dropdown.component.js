import React, {
  useState,
  useRef,
  useLayoutEffect, useEffect, useCallback,
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


const StyledDropdownMainWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledLabel = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  height: ${({ theme }) => theme.spacing[44]};
  padding: ${({ theme }) => (`${theme.spacing['8']} ${theme.spacing['12']}`)};
  .svgArrowWrap {
    position: absolute;
    right: ${({ theme }) => theme.spacing[12]};
    top: ${({ theme }) => theme.spacing[12]};
    fill: ${({ theme }) => theme.colors.greyDarkest};
  }
`;

const StyledDropdownButton = styled.div`
  border: ${({ theme }) => theme.borders.component};
  &:hover,
  &:focus {
    border: ${({ theme }) => theme.combo.list.item.borderFocus};
    outline: none;
  }
  &:hover {
    cursor: pointer;
    .svgArrowWrap {
      path {
        fill: ${({ theme }) => theme.colors.blueLight};
      }
    }
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
    background: ${({ theme }) => theme.colors.greyLight};
    border: ${({ theme }) => theme.borders.disabled};
    &:hover,
    &:focus {
       border: ${({ theme }) => theme.borders.disabled};
       cursor: default;
       .svgArrowWrap {
        path {
          fill: ${({ theme }) => theme.colors.black};
        }
      }
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
    padding: ${({ theme }) => (`${theme.spacing['8']} ${theme.spacing['32']}`)};
    &:hover {
      cursor: pointer;
      background: ${({ theme }) => (theme.colors.greyLight)};
    }
    ${({ desktop }) => !desktop && css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      padding: ${({ theme }) => (`${theme.spacing['16']} ${theme.spacing['16']} ${theme.spacing['20']}`)};
    `}
    &:focus {
      outline: none;
      border: ${({ theme }) => theme.combo.list.item.borderFocus};
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
  ${({ desktop, isDropdownOpen }) => (isDropdownOpen && !desktop) && css`
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
  `}
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
`;

const Dropdown = ({
  id,
  options,
  label,
  tooltip,
  children,
  validationMessage,
  disabled,
  prefixContent,
  handleClick,
  handleFocus,
  handleBlur,
}) => {
  const node = useRef();
  const desktop = useIsDesktop();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileModalView, setIsMobileModalView] = useState(false);
  const [focusedRef, setFocusedRef] = useState(null);
  const mobileOverlay = !desktop && isMobileModalView;
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

  const modalClose = () => {
    toggleDropdown(false);
    setIsMobileModalView(false);
    setFocusedRef(null);
  };
  const toggleDropdown = (bool) => {
    setDropdownOpen(bool);
    !bool && setFocusedRef(null);
  };
  const result = options.filter((option) => option.selected);
  const selectedValueResult = result && result[0] ? result[0].title : options[0].title;
  const [selectedValue, setSelectedValue] = useState(selectedValueResult);
  const [optionsArray, modifyOptionsArray] = useState(options);
  const onItemClick = (event, index) => {
    const currenPosition = options && options[index] ? options[index] : options[0];
    setSelectedValue(currenPosition.title);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    optionsArray.map((option, i) => option.selected = i === index);
    modifyOptionsArray(optionsArray);

    // call parent
    handleClick && handleClick(event, index);
  };
  const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, {
    onClick: (event) => {
      onItemClick(event, child.props.index);
      modalClose();
    },
    onKeyDown: (event) => {
      if (event.keyCode === 13) {
        onItemClick(event, child.props.index);
        modalClose();
      }
    },
    ref: React.createRef(),
  }));

  const handleClickOutside = useCallback((e) => {
    if (!node.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }, [node, setDropdownOpen]);

  const closeFieldModal = () => {
    setIsMobileModalView(false);
  };

  const keyboardArrowsAccessibility = (event) => {
    setDropdownOpen(true);
    // eslint-disable-next-line no-shadow
    const selectedIndex = childrenWithProps.findIndex((event) => event.props.option.selected);
    if (selectedIndex > -1) {
      setFocusedRef(selectedIndex);
    } else {
      setFocusedRef(null);
    }
  };
  const keyboardAccessibility = (event) => {
    if (!disabled) {
      switch (event.key) {
        case 'Tab':
          break;
        case 'Escape':
          toggleDropdown(false);
          break;
        case 'Enter':
          setDropdownOpen(!isDropdownOpen);
          break;
        case 'ArrowUp':
          if (!isDropdownOpen) {
            keyboardArrowsAccessibility(event);
            return false;
          }
          if (focusedRef === null || focusedRef === 0) {
            setFocusedRef(childrenWithProps.length - 1);
          } else {
            setFocusedRef(focusedRef - 1);
          }
          break;
        case 'ArrowDown':
          if (!isDropdownOpen) {
            keyboardArrowsAccessibility(event);
            return false;
          }
          if (focusedRef === null || focusedRef === childrenWithProps.length - 1) {
            setFocusedRef(0);
          } else {
            setFocusedRef(focusedRef + 1);
          }
          break;
        default:
          break;
      }
    }
    return false;
  };

  useEffect(() => {
    focusedRef !== null && childrenWithProps[focusedRef].ref && childrenWithProps[focusedRef].ref.current && childrenWithProps[focusedRef].ref.current.focus();
  }, [childrenWithProps, focusedRef]);

  useLayoutEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

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
  return (
    <LayerEventManager id={`LayerEventManagerDropdown${id}`} visible={mobileOverlay && isDropdownOpen}>
      {(mobileOverlay && isDropdownOpen) && (
        <Overlay opacityLevel={0.3} visible={mobileOverlay && isDropdownOpen} onClose={closeFieldModal} handleClick={closeFieldModal} />
      )}
      <>
        <StyledDropdownMainWrap ref={node} onKeyDown={keyboardAccessibility}>
          <Label forId={id} text={label} tooltip={tooltip} />
          <StyledDropdownButton
            role="button"
            onClick={handleDropdownButton}
            onFocus={handleFocusDropdownButton}
            onBlur={handleBlurDropdownButton}
            tabIndex={0}
            invalid={validationMessage && validationMessage.length > 0}
            disabled={disabled}
          >
            <StyledLabel>
              {prefixContent && <StyledAffix>{prefixContent}</StyledAffix>}
              <span>{selectedValue}</span>
              <span className="svgArrowWrap"><FontAwesomeIcon icon={faChevronDown} size="sm" flip={isDropdownOpen ? 'vertical' : null} /></span>
            </StyledLabel>
          </StyledDropdownButton>
          {Boolean(isDropdownOpen) && (
            <StyledList isDropdownOpen={isDropdownOpen} desktop={desktop}>
              <StyledListul desktop={desktop}>
                {childrenWithProps}
              </StyledListul>
            </StyledList>
          )}
        </StyledDropdownMainWrap>
        <FieldValidation message={validationMessage} />
      </>
    </LayerEventManager>
  );
};

Dropdown.propTypes = {
  /**
   * Unique id for the component. Required.
   */
  id: PropTypes.string.isRequired,
  /**
   * The options to display within the Dropdown
   */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * Label for the dropdown
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * The items to be rendered (should be `<li>` tags)
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Disables the button via a class on its wrapper, and an attribute on the dropdown.
   */
  disabled: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the dropdown
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Called on click of the dropdown's item
   */
  handleClick: PropTypes.func,
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
  options: [],
  label: '',
  tooltip: {},
  children: '',
  validationMessage: '',
  disabled: false,
  prefixContent: '',
  handleClick: null,
  handleFocus: null,
  handleBlur: null,
};

export default Dropdown;
