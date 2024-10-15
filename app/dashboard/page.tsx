import type { FC } from 'react';
import { currentUser } from '@clerk/nextjs/server';

const DashboardPage: FC = async function DashboardPage() {
  const user = await currentUser();
  console.log(user);
  return <div />;
};

export default DashboardPage;
