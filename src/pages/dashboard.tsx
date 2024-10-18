import React, { useEffect, useState, FC } from 'react';
import { Container } from 'react-bootstrap';
import apiClient from '../api-client';
import useToast from '../providers/toast';
import Loading from '../components/loading';

interface Casino {
  readonly id: string;
  name: string;
  url: string;
  description: string;
  updatedAt: Date;
  readonly createdAt: Date;
}

interface CasinoListRes {
  casinos: Casino[];
}

const DashboardPage: FC = function DashboardPage() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [casinoList, setCasinoList] = useState<Casino[]>();

  useEffect(() => {
    apiClient.get<CasinoListRes>('/casino')
      .then((res) => {
        setCasinoList(res.data.casinos);
      })
      .catch((ex) => {
        toast.error(ex.message, { title: 'Unable to fetch Casino List' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>Casinos</h2>
          <div />
        </>
      )}
    </Container>
  );
};

export default DashboardPage;
