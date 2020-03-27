import { useContext } from 'react';
import ToastContext from './toast.context';

const useToasts = () => useContext(ToastContext);

export default useToasts;
