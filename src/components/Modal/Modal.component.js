import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import getTheme from 'utils/getTheme';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';

const StyledAlignment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

const animateIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledModal = styled.div`
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.boxShadow.lg};
  z-index: ${(props) => props.theme.zIndex[50]};
  width: ${(props) => {
    const { size } = props;
    if (size === 'lg') {
      return '66.666667%';
    } if (size === 'md') {
      return '50%';
    }
    return '33.333333%';
  }};
  min-height: 30rem;
  height: auto;
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: .3s;
`;

const StyledCloseIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  cursor: pointer;
  z-index: ${(props) => (props.theme.zIndex[50])}; 
  opacity: 0.5;
`;

const StyledContent = styled.div`
  padding: 4rem;
`;

/* Workaround for storybook not rendering props when ReactDOM.createPortal is used https://github.com/storybookjs/storybook/issues/8435 */
const RenderedModal = ({
  visible, id, classNames, size, close, handleClose, children,
}) => (
  ReactDOM.createPortal(
    <>
      {visible
      && (
        <>
          <ThemeProvider theme={getTheme()}>
            <StyledAlignment>
              <StyledModal id={id} className={classNames} size={size}>
                <StyledCloseIcon className="icon-close" onClick={close} onKeyPress={handleClose} aria-label="Close Modal" tabIndex="0" role="button" aria-pressed="false">
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </StyledCloseIcon>
                <StyledContent className="content">
                  {children}
                </StyledContent>
              </StyledModal>
            </StyledAlignment>
          </ThemeProvider>
        </>
      )}
    </>,
    document.body,
  )
);

const Modal = ({
  id, visible, handleClose, size, className, children,
}) => {
  const close = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const classNames = `
    ${size}
    ${className}
  `;

  return (
    <RenderedModal visible={visible} id={id} classNames={classNames} size={size} close={close} handleClose={handleClose}>
      {children}
    </RenderedModal>
  );
};

Modal.propTypes = {
  /**
   * The id of the modal
   */
  id: PropTypes.string,
  /**
   * Bool for modal opening/closing. Handled via state in the parent component
   */
  visible: PropTypes.bool,
  /**
   * Method for closing the modal. Handled via state in the parent component. Pass to an overlay (if included) to
   * close the modal on click of the overlay
   */
  handleClose: PropTypes.func,
  /**
   * Sizing of the modal. `lg`, `md` or `sm`
   */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /**
   * Extend styles with additional classNames
   */
  className: PropTypes.string,
  /**
   * The child content of the Modal
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Modal.defaultProps = {
  id: '',
  visible: false,
  handleClose: null,
  size: 'md',
  className: '',
  children: '',
};

export default Modal;
