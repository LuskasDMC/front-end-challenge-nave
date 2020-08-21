import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-flow: column nowrap;
`;

export const Input = styled.input`
    outline:none;
    border: 1px solid var(--tertiary);
    background: inherit;
    padding:10px;
    width: 100%;

    @media (max-width: 600px) {
    }
`

export const Label = styled.label`
    font-weight: 500;
    margin-bottom: 3px;
    font-size: .9rem;
`
