import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import { Container, Content } from './styles';
import Header from '../../components/Header'
import Form from '../../components/Form'
import fetch from '../../services/api'
import PopupMessage from '../../components/PopupMessage'


const CreateNaver: React.FC = () => {
  const [wasCreated, setWasCreasted] = useState(false)

  const history = useHistory()

  const handleSubmit = async (body:object) => {
    try {
      await fetch('https://navedex-api.herokuapp.com/v1/navers','POST', body)
      setWasCreasted(true)
    }catch(err) {
      console.error(err)
    }
  }

  return (
      <Container>
          <Header/>
          <Content>
            <Form title="Adicionar Naver" onSubmit={handleSubmit}/>
          </Content>

          {wasCreated && <PopupMessage title="Naver criado" text="Naver criado com sucesso!" onClick={() => history.push('/home')}/>}
      </Container>
  );
}

export default CreateNaver;