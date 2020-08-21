import styled from 'styled-components';
import { ColorTypes } from './index'

interface IButton {
    color?: string;
}

export const Button = styled.button<IButton>`
    background: ${props => props.color === ColorTypes.light ? "var(--primary)" : "var(--secondary)"};
    color: ${props => props.color === ColorTypes.light ? "var(--secondary)" : "var(--primary)"};
    border: 1px solid var(--secondary);
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    min-width: 176px;

    :hover {
        background:${props => props.color === ColorTypes.light ? "#f5f5f5" : "var(--tertiary)"}; 
    }
`;
