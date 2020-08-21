import React, { memo } from 'react';

import { Container, Input, Label } from './styles';

interface IProps {
    label: string;
    placeholder: string;
    onChange(evt:React.ChangeEvent<HTMLInputElement>) : void;
    name:string;
    defaultValue?:string;
}


const InputComponent: React.FC<IProps> = ({label,...others}) => {
  return (
    <Container>
        <Label>{label}</Label>
        <Input {...others}/>
    </Container>
  );
}

export default memo(InputComponent);