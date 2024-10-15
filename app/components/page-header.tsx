import type { FC } from 'react';
import Link from 'next/link';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './page-header.module.css';

const PageHeader: FC = function PageHeader() {
  return (
    <Navbar as="header" className="bg-body-tertiary p-2">
      <Container className="justify-content-between" fluid>
        <div className={styles.navLeft}>
          <Link className={styles.navbarBrand} href="/">
            <h1 className="navbar-brand">Casinobuddy</h1>
          </Link>

          <Nav as="nav">
            <ul className={styles.navList}>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </Nav>
        </div>

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
