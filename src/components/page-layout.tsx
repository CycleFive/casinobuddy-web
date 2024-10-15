import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex-grow: 1;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

const MainNav = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;

    > li:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = function PageLayout({ children }) {
  return (
    <Wrapper>
      <Navbar as="header">
        <Container className="justify-content-between" fluid>
          <LeftHeader>
            <Navbar.Brand as={Link} to="/">Casinobuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <MainNav as="nav">
                <ul>
                  <Nav.Item as="li">
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                  </Nav.Item>
                </ul>
              </MainNav>
            </Navbar.Collapse>
          </LeftHeader>

          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Container>
      </Navbar>

      <main>{children}</main>
    </Wrapper>
  );
};

export default PageLayout;
