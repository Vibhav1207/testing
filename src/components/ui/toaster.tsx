import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

type ToastContextType = {
  toast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToasterProvider");
  return context;
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      <div className="fixed bottom-0 right-0 p-4 space-y-4 z-50">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-lg backdrop-blur-lg border ${
                toast.variant === "destructive"
                  ? "bg-red-500/10 border-red-500/30 text-red-400"
                  : "bg-blue-500/10 border-blue-500/30 text-blue-400"
              }`}
            >
              <h3 className="font-semibold">{toast.title}</h3>
              {toast.description && (
                <p className="text-sm opacity-80">{toast.description}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
