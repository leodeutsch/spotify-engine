import React from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo-green.png';

const Header = () => (
  <Container>
    <div>
      <img src={logoImg} alt="Logo" />
      <h1>Spotify Engine</h1>
    </div>
  </Container>
);

export default Header;
