import styled,{keyframes} from 'styled-components';

const FadeIn = keyframes`
    from {
        opacity:0;
    }

    to {
        opacity:1;
    }
`


export const Container = styled.div`
`;

export const Header = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    padding:20px 0;
    i {
        cursor: pointer;
        font-size: 1.4rem;
        margin-right: 7px;
    }
`

export const Form = styled.form`
    display:flex;
    flex-flow:column nowrap;
    align-items:flex-end;

    button {
        margin-top: 20px;
    }
`

export const Row = styled.div`
    display:flex;
    justify-content:center;
    padding: 10px 0;
    flex:1;
    flex-flow: row wrap;

    div:nth-child(1) {
        margin-right: 25px;
    }

    > div {
        width: 400px;
    }

    @media (max-width:930px) {
        flex-flow: row column;
        padding: 0;

        > div {
            width: 100%;
            margin-bottom: 15px;
           
        }   
        div:nth-child(1) {
            margin-right: 0px;
        }
    }

`

export const Error = styled.div`
    color:red;
    animation: ${FadeIn} .7s;
`