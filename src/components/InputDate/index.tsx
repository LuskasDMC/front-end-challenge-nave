import React, { memo } from 'react';
import { Container, Input, Label } from './styles';

interface IProps {
    label: string;
    placeholder: string;
    onChange(evt:React.ChangeEvent<HTMLInputElement>) : void;
    name:string;
    defaultValue?:string;
}


const InputComponent: React.FC<IProps> = ({label,defaultValue,...others}) => {

    return (
        <Container>
            <Label>{label}</Label>
            <Input mask="99/99/9999" maskChar={null} {...others} value={defaultValue}/>
        </Container>
    );
}

export default memo(InputComponent);