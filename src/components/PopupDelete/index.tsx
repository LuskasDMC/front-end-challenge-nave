import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'
import { 
    Container, 
    Popup,
    Title,
    Text,
    ButtonsWrapper
} from './styles';
import Button,{ ColorTypes } from '../Button'
import PopupMessage from '../PopupMessage'

interface IProps {
    id: string;
    handleDeleteUser(id?:string | number) : Promise<void>;
    onClickCancelDelete() : void;
}

const PopupDelete: React.FC<IProps> = ({handleDeleteUser, onClickCancelDelete, id}) => {
  const [wasDeleted,setWasDeleted] = useState(false)

  const handleDelete = () => {
    handleDeleteUser(id)
    setWasDeleted(true)
  }

  return (
      <Container>
        {
          !wasDeleted ? (
              <Popup>
                  <div>
                    <Title>Excluir Naver</Title>
                    <Text>Tem certeza que deseja excluir este Naver?</Text>
                  </div>
                  <ButtonsWrapper>
                    <Button onClick={onClickCancelDelete} color={ColorTypes.light}>Cancelar</Button>
                    <Button onClick={handleDelete} color={ColorTypes.dark}>Excluir</Button>
                  </ButtonsWrapper>
              </Popup>
            )
            : (
              <PopupMessage 
                title="Naver excluído" 
                text="Naver excluído com sucesso!" 
                onClick={onClickCancelDelete}
              />
            )
        }
      </Container>
  );
}

export default PopupDelete;