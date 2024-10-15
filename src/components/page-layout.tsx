import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Ul } from './list';

const MainNav = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainNavList = styled(Ul)`
  display: flex;

  > li:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = function PageLayout({ children }) {
  return (
    <>
      <Navbar as="header">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Casinobuddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <MainNav as="nav">
              <MainNavList>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
              </MainNavList>
            </MainNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
};

export default PageLayout;
