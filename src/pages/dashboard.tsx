import React, { FC } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Container } from 'react-bootstrap';

interface Casino {
  readonly id: string;
  name: string;
  url: string;
  description: string;
  updatedAt: Date;
  readonly createdAt: Date;
}

const DashboardPage: FC = function DashboardPage() {
  const {
    isPending,
    error,
    data,
    isFetching,
  } = useCasinoList();

  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Casinos</h2>

    </Container>
  );
};

export default DashboardPage;
