'use server';

import apiClient from '@/api-client';

export async function fetchDashboard(userId: string) {
  return Promise.all([
    apiClient.get(`/user/${userId}/casinos`),
  ])
    .then((casinos) => ({ casinos }));
}
