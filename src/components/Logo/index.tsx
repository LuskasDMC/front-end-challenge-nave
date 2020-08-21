import React from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo.svg'

const Logo: React.FC = () => {
  return (
      <Container>
          <img src={logoImg} alt="Logo"/>
          nave.rs
      </Container>
  );
}

export default Logo;