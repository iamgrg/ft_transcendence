import { toast, ToastOptions } from 'react-toastify';

export function useToast(defaultOptions: ToastOptions<{}> = { theme: 'dark', autoClose: 3000, pauseOnFocusLoss: false, position: "bottom-right" }) {
	const success = (data: string) =>
		toast(data, { ...defaultOptions, type: 'success' });

	const error = (data: string, options?: ToastOptions<{}>) =>
		toast(data, { ...defaultOptions, ...options, type: 'error' });

	const info = (data: string, options?: ToastOptions<{}>) =>
		toast(data, { ...defaultOptions, ...options, type: 'info' });
	return { success, error, info };
}