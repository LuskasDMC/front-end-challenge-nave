import styled,{ keyframes } from 'styled-components';

const FadedIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity:1;
    }
`

export const Container = styled.div`
    height:100%;
    width: 100%;
    background: var(--primary);
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
`;

export const Form = styled.div`
    border: 1px solid var(--secondary);
    padding: 35px;
    display:flex;
    flex-flow:column nowrap;
    animation: ${FadedIn} 2s;
    label {
        margin-top: 25px;
    }

    input {
        width:400px;
    }

    button {
        margin-top: 30px;
    }

    @media (max-width:600px){
        width: 100%;
        input {
            width:100%;
        }
    }
`

export const Logo = styled.div`
    display:flex;
    justify-content:center;
    font-size: 2.7rem;
    font-weight: 800;

    img {
        width:60px;
        height: 60px;
        margin-right: 10px;
    }
`

export const Error = styled.div`
    display:flex;
    justify-content:center;
    color: red;
    margin-top: 7px;
    font-size:.9rem;
    animation: ${FadedIn} .8s;
`
