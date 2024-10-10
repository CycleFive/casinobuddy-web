import type { FC } from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Navbar, Container } from 'react-bootstrap';

const PageHeader: FC = function PageHeader() {
  return (
    <Navbar as="header">
      <Container fluid>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Container>
    </Navbar>
  );
};

export default PageHeader;
