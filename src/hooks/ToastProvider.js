import React, { createContext, useContext } from 'react';
import useToast from './useToast';
const ToastContext = createContext();
export function useToastContext() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const { toasts, addToast } = useToast();

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className='toast-container'>
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            {toast.message}
            <div className='toast-progress'></div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
