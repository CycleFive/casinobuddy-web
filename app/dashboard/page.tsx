import type { FC } from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { Container } from 'react-bootstrap';
import { fetchDashboard } from './actions';

const DashboardPage: FC = async function DashboardPage() {
  const user = (await currentUser())!;
  const dashboard = await fetchDashboard(user.id);

  console.log(user, dashboard);

  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Casinos</h2>
    </Container>
  );
};

export default DashboardPage;
