import React, { useEffect, useState, FC } from 'react';
import { Container } from 'react-bootstrap';
import apiClient from '../../api-client';
import useToast from '../../providers/toast';
import Loading from '../../components/loading';
import SelectCasino from './components/select-casino';

export interface Casino {
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
  const [casinoList, setCasinoList] = useState<Casino[]>();

  useEffect(() => {
    apiClient.get<CasinoListRes>('/casino')
      .then((res) => {
        setCasinoList(res.data.casinos);
      })
      .catch((ex) => {
        console.error(ex);
        toast.error(ex.message, { title: 'Unable to fetch Casino List' });
      });
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      {!casinoList ? (
        <Loading />
      ) : (
        <>
          <h2>Casinos</h2>
          <SelectCasino casinos={casinoList} />
        </>
      )}
    </Container>
  );
};

export default DashboardPage;
