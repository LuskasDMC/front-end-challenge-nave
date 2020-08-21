import React from 'react';

import { Button } from './styles';

export enum ColorTypes {
    light = 'light',
    dark = 'dark'
}

interface IProps {
    onClick?() : void;
    color?: string;
}

const ButtonComponent: React.FC<IProps> = ({color,onClick,children}) => <Button type="submit" color={color}  onClick={onClick}>{children}</Button>

export default ButtonComponent;