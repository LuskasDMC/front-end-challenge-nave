import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

    i {
        display:none;
    }

    span {
        font-size:1.1rem;
        display:flex;
        align-items:center;
        font-weight: 600;
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
    }

    @media (max-width:600px) {
        i {
            display:block
        }

        span {
            display:none;
        }
    }
`;
