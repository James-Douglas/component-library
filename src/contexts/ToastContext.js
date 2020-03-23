import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const ToastContext = createContext();

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

export default ToastProvider;

export const useToasts = () => useContext(ToastContext);


ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
