import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  display:flex;
  flex-flow: column nowrap;
`;

export const Input = styled(InputMask)`
  outline:none;
  border: 1px solid var(--tertiary);
  background: inherit;
  padding:10px;
  width: 100%;
`

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 3px;
  font-size: .9rem;
`
