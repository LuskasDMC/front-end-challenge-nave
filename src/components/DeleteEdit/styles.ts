import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  
  i:nth-child(1) {
    margin-right:10px;
  }

  i {
      cursor:pointer;
    :hover {
        color:black;
    }
  }
`;
