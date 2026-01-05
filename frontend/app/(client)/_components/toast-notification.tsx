interface ToastNotificationProps {
  show: boolean;
  message: string;
}

export function ToastNotification({ show, message }: ToastNotificationProps) {
  if (!show) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 z-50 animate-in fade-in slide-in-from-top-5 border border-gray-200">
      <div className="bg-green-500 rounded-full p-0.5">
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}
