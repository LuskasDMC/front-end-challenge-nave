import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-flow: column nowrap;
    padding: 20px 10px;
    img {
        cursor: pointer;
        width:300px;
        height:300px;
        transition: width 1s, height 1s;

        :hover {
            border: 3px solid black;
        }
    }
`;

export const Name = styled.span`
    margin-top:5px;
    padding: 5px 0;
    font-size:1rem;
    font-weight: 600;
`

export const Job = styled.span`
    font-size:1rem;
    padding: 5px 0;

`

