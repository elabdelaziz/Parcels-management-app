import Toast from "@/components/Toast";
import { useEffect, useState, ReactNode } from "react";

type ToastMessage = string | null;

export const useToast = () => {
  const [toast, setToast] = useState<ToastMessage>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  const hideToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  const toastComponent = toast && <Toast message={toast} onClose={hideToast} />;

  return {
    showToast,
    toastComponent,
  };
};
