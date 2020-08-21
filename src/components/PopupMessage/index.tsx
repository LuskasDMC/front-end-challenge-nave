import React from 'react';
import { 
    Container, 
    Popup,
    Title,
    Text,
} from './styles';

interface IProps {
    onClick: () => void;
    title:string;
    text:string;
}

const PopupMessage: React.FC<IProps> = ({onClick, text, title}) => {
  return (
      <Container>
        <Popup>
            <i className="fas fa-times fa-lg" onClick={onClick}/>
            <div>
              <Title>{title}</Title>
              <Text>{text}</Text>
            </div>
        </Popup>
      </Container>
  );
}

export default PopupMessage;