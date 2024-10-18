import {
  QueryClient,
  QueryCache,
  MutationCache,
  DefaultError,
} from '@tanstack/react-query';
import useToast from './providers/toast';

interface ResponseError extends DefaultError {
  response?: {
    status: number;
  };
}

function createErrorHandler() {
  const toast = useToast();
  return (error: ResponseError) => {
    if (error.response?.status === 401) {
      toast.error('Login required.', { title: 'Authentication Error' });
    }
  };
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      createErrorHandler()(error);
    },
  }),
  mutationCache: new MutationCache({
    onError(error) {
      createErrorHandler()(error);
    },
  }),
});

export default queryClient;
