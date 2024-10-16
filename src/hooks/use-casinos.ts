import { useEffect, useState } from 'react';
import axios from 'axios';
import useToast from '../providers/toast';
import apiClient from '../api-client';

interface Casino {
  readonly id: string;
  name: string;
  url: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

interface Response {
  casinos: Casino[];
}

// TODO: Cache in localStorage
export default function useCasinos() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [casinos, setCasinos] = useState<Casino[] | null>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    apiClient.get<Response>('/casino', { cancelToken: source.token })
      .then((res) => setCasinos(res.data.casinos))
      .catch((ex) => {
        if (!axios.isCancel(ex)) {
          toast.error(ex.message, { title: 'Failed to fetch casino list' });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    casinos,
    isCasinosLoading: isLoading,
  };
}
