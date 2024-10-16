import {
  createContext,
  useContext,
  useEffect,
  FC,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosError } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import useToast from './toast';

const HTTP_STATUS_UNAUTHORIZED = 401;

const apiClient = applyCaseMiddleware(axios.create({
  baseURL: '/api',
}));

type Context = AxiosInstance;

const HttpClientContext = createContext<Context | null>(null);

export default function useApiClient() {
  const ctx = useContext(HttpClientContext);
  if (!ctx) throw new Error('Must be child of <ApiClientProvider>');
  return ctx;
}

export const ApiClientProvider: FC = function ApiClientProvider() {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Handle an HTTP response that indicates the user is not logged in
    // This includes sessions expiring
    const resId = apiClient.interceptors.response.use((res) => res, (error: AxiosError) => {
      console.error(error); // eslint-disable-line
      if (axios.isAxiosError(error) && error.response?.status === HTTP_STATUS_UNAUTHORIZED) {
        toast.error('You must login to continue.', { title: 'Login Required' });
        navigate('/');
      }
    });

    return () => {
      apiClient.interceptors.response.eject(resId);
    };
  }, []);

  return null;
};
