import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToastContext from './contexts/Toast/toast.context';

const uuidv4 = require('uuid/v4');

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = uuidv4();
    const clonedToast = React.cloneElement(toast, { id });
    setToasts([...toasts, clonedToast]);
    return id;
  };

  const removeToast = (id) => {
    setToasts((prevState) => prevState.filter((n) => n.props.id !== id));
  };

  const toastInfo = { addToast, removeToast, toasts };

  return (
    <ToastContext.Provider value={toastInfo}>
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ToastProvider;
