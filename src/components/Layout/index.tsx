import React from 'react';
import Header from '../Header';
import { LayoutTypes } from './LayoutTypes';
import { Container, Content } from './LayoutStyles';

const Layout = ({ children }: LayoutTypes) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
