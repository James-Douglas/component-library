import 'custom-event-polyfill';

const addToast = (toast) => {
  const addToastEvent = new CustomEvent(
    'addToastNotification',
    {
      detail: toast,
    },
  );
  window.dispatchEvent(addToastEvent);
};

const removeToast = (id) => {
  const removeToastEvent = new CustomEvent(
    'removeToastNotification',
    {
      detail: id,
    },
  );
  window.dispatchEvent(removeToastEvent);
};

export { addToast, removeToast };
