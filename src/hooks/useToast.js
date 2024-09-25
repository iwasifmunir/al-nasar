import { useState } from 'react';

function useToast() {
  const [toasts, setToasts] = useState([]);
  const addToast = (type = 'info', message) => {
    const id = Math.random().toString(36).substring(7);
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    }, 3000);
  };
  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };
  return { toasts, addToast, removeToast };
}

export default useToast;
