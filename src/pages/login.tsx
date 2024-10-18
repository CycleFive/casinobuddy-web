import React, { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import type { AxiosResponse } from 'axios';
import apiClient from '../api-client';
import useCurrentUser from '../providers/current-user';
import useToast from '../providers/toast';
import Loading from '../components/loading';

const LoginPage: FC = function LoginPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const { setUserId } = useCurrentUser();
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      apiClient.post<{ id: string }, AxiosResponse<{ id: string }>, { oauthId: string }>(
        '/login',
        { oauthId: user!.id },
      )
        .then((res) => {
          setUserId(res.data.id);
          navigate('/dashboard');
        })
        .catch((ex: Error) => {
          console.error(ex);
          toast.error(ex.message, { title: 'Unable to authenticate with API server.' });
        });
    }
  }, [isSignedIn, isLoaded]);

  return (
    <Loading />
  );
};

export default LoginPage;
