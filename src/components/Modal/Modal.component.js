import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import styles from './styles';

const Modal = ({
  id, visible, handleClose, size, className, children,
}) => {
  const close = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const classNames = `
    modal
    manor-rich-text
    ${size}
    ${className}
  `;

  return ReactDOM.createPortal(
    <>
      {visible
        && (
          <>
            <style jsx>{styles}</style>
            <div className="modal-alignment">
              <div id={id} className={classNames}>
                <div className="icon-close" onClick={close} onKeyPress={handleClose} aria-label="Close Modal" tabIndex="0" role="button" aria-pressed="false"><Icon name="close" size={2} /></div>
                <div className="content">
                  {children}
                </div>
              </div>
            </div>
          </>
        )}
    </>,
    document.body,
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
