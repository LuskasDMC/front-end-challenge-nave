import React from 'react';

import { Container } from './styles';

interface IProps {
    onClickDelete() : void;
    onClickEdit() : void;
}

const DeleteEdit: React.FC<IProps> = ({onClickDelete,onClickEdit}) => {
  return (
      <Container>
            <i className="fas fa-trash" onClick={onClickDelete}/>
            <i className="fas fa-pen" onClick={onClickEdit}/>
      </Container>
  );
}

export default DeleteEdit;