import styled,{keyframes} from 'styled-components';

const zoomIn = keyframes`
    0% {
        width: 0px;
        height: 0px;
        opacity:0;
    }

    100% {
        width: 75vw;
        height: 70vh;
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
    overflow: hidden;
`;

export const Modal = styled.div`
    display:flex;
    background:var(--primary);
    animation: ${zoomIn} .7s forwards ease-in-out;
    position:relative;
    overflow-y:scroll;
    flex-flow: row wrap;
    > div {
        flex: 1 0 300px;
        img {
            width:100%;
            height:100%;
        }

    }

    > i:nth-child(1) {
        cursor: pointer;
        position:absolute;
        top: 17px;
        right: 17px;
        z-index:100;
        :hover {
            color:black;
        }
    }

`

export const Infos = styled.div`
    padding: 25px;
    flex: 1;
    position:relative;
    display:flex;
    flex-flow:column nowrap;
    div:nth-child(2n + 1){
        margin-bottom: 5px;
    }

    div:nth-child(2n){
        margin-bottom: 20px;
    }
   
`

export const Name = styled.div`
    font-size:2rem;
    color:black;
    font-weight:500;
`

export const PersonalInfo = styled.div`
    font-size:1.2rem;

`

export const Label = styled.div`
    font-size:1.2rem;
    font-weight: 500;
`

export const WrapperEditDelete = styled.div `
`