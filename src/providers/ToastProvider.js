import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ToastContext from '../contexts/Toast/toast.context';

const uuidv4 = require('uuid/v4');

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (props) => {
    const id = uuidv4();
    const toast = { props, id };
    setToasts([...toasts, toast]);
    return id;
  };

  const removeToast = (id) => {
    setToasts((prevState) => prevState.filter((n) => n.id !== id));
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
