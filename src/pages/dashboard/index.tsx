import React, { useEffect, useState, FC } from 'react';
import {
  Card,
  CardGroup,
  Button,
  Container,
} from 'react-bootstrap';

interface Casino {
  id: string;
  name: string;
  url: string;
  description: string;
  isSubscribed: boolean;
  isVip: boolean;
  isVerified: boolean;
  isSelfExcluded: boolean;
}

const DashboardPage: FC = function DashboardPage() {
  const [casinos, setCasinos] = useState<Casino[]>([]);

  useEffect(() => {
    const casinosReq = setTimeout(() => {
      setCasinos([
        {
          id: 'one',
          name: 'Big Ballers',
          url: 'https://example.com/',
          description: 'Only for the big ballers',
          isSubscribed: false,
          isVip: false,
          isVerified: false,
          isSelfExcluded: false,
        },
        {
          id: 'two',
          name: 'Bigger Ballers',
          url: 'https://example.com/',
          description: 'Only the biggest ballers here',
          isSubscribed: true,
          isVip: false,
          isVerified: false,
          isSelfExcluded: false,
        },
      ]);
    }, 1300);

    return () => {
      clearTimeout(casinosReq);
    };
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      <h2>Casinos</h2>
      <CardGroup>
        {casinos.map((casino) => (
          <Card key={casino.id}>
            <Card.Header>{casino.name}</Card.Header>
            <Card.Body>
              <Card.Text>{casino.description}</Card.Text>
              <Button href={casino.url} variant="info">Subscribe</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default DashboardPage;
