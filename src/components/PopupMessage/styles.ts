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
    background: rgba(0, 0, 0, 0.5);
    position:fixed;
    top:0;
    left:0%;
    width:100vw;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Popup = styled.div`
    background: var(--primary);
    padding:30px;
    animation: ${FadedIn} .5s;
    position:relative;
    min-width:50vw;
    i {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;

        :hover {
            color: black;
        }
    }
`

export const Title = styled.h3`
    font-weight: 600;
`

export const Text = styled.p`
    margin: 20px 0;
    font-weight: 500;
`
