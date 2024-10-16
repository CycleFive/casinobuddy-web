import { useEffect, useState } from 'react';

interface Casino {
  readonly id: string;
  name: string;
  url: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

export default function useCasinos() {
  const [isLoading, setIsLoading] = useState(true);
  const [casinos, setCasinos] = useState<Casino[] | null>(null);

  return {
    casinos,
    isCasinosLoading: isLoading,
  };
}
