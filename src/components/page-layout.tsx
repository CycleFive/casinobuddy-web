import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
    <>
      <Navbar as="header">
        <Container fluid>
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
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
};

export default PageLayout;
