import React, { memo } from 'react';

import { Container } from './styles';
import Logo from '../../components/Logo'

import { useAuthContext } from '../../contexts/AuthContext'

const Header: React.FC = () => {
    const { handleChangeAuth } = useAuthContext()
    return (
        <Container>
            <Logo/>
            <span onClick={() => handleChangeAuth(false)}>Sair</span>
            <i className="fas fa-sign-out-alt fa-2x" />
        </Container>
    );
}

export default memo(Header);