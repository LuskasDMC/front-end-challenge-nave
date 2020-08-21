import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
`;

export const Content = styled.div`
    padding:60px 0;
`


export const ContentHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-flow:row wrap;
    padding-bottom: 35px;
    span {
        font-size: 3.3rem;
        font-weight: 600;
    }

    button {
        font-size: 1.1rem;
        height:100%;
    }

    @media (max-width:600px) {
        flex-direction:column;
        justify-content:center;
    }
`

export const ContentBody = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;

    @media (max-width:700px) {
        justify-content:center;
    }
`