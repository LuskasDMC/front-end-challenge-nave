import React from 'react';
import { useHistory } from 'react-router-dom'

import { Container, Name, Job } from './styles';
import DeleteEdit from '../DeleteEdit'

interface IResponse {
    id:string;
    job_role: string;
    name: string;
    url: string;
    handleShowUserInfo(id:string): void;
    onClickDelete(id:string): void;
}

const CardPerson: React.FC<IResponse> = ({name,url,job_role,id, handleShowUserInfo, onClickDelete}) => {
  const history = useHistory()
  return (
      <Container>
            <img src={url} alt="Person Image" onClick={() => handleShowUserInfo(id)}/>

            <Name>{name}</Name>
            <Job>{job_role}</Job>
            
            <DeleteEdit onClickDelete={() => onClickDelete(id)} onClickEdit={() => history.push(`/navers/edit/${id}`)}/>
      </Container>
  );
}

export default CardPerson;