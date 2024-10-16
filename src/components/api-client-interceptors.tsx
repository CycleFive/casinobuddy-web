import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import useToast from '../providers/toast';
import apiClient from '../api-client';

const HTTP_STATUS_UNAUTHORIZED = 401;

const ApiClientInterceptors: FC = function ApiClientInterceptors() {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Handle an HTTP response that indicates the user is not logged in
    // This includes sessions expiring
    const resId = apiClient.interceptors.response.use((res) => res, (ex: AxiosError) => {
      console.error(ex); // eslint-disable-line
      if (axios.isAxiosError(ex) && ex.response?.status === HTTP_STATUS_UNAUTHORIZED) {
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

export default ApiClientInterceptors;
