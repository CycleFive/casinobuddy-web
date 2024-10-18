import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

interface Context {
  userId?: string;
  setUserId: Dispatch<SetStateAction<string | undefined>>;
}

const CurrentUserContext = createContext<Context | null>(null);

export default function useCurrentUser() {
  const ctx = useContext(CurrentUserContext);
  if (!ctx) throw new Error('Must be a child of <CurrentUserProvider />');
  return ctx;
}

interface Props {
  children: ReactNode;
}

export const CurrentUserProvider: FC<Props> = function CurrentUserProvider({ children }) {
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    const lsUserId = localStorage.getItem('userId');
    if (lsUserId) setUserId(userId);
  }, []);

  return (
    <CurrentUserContext.Provider value={useMemo(() => ({ userId, setUserId }), [userId])}>
      {children}
    </CurrentUserContext.Provider>
  );
};
