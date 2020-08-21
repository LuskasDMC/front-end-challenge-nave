import React,{useState,useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom'

import { Container, Content } from './styles';
import PopupMessage from '../../components/PopupMessage'
import Header from '../../components/Header'
import Form from '../../components/Form'
import fetch from '../../services/api'

interface IData {
  name:string;
  job_role: string;
  birthdate:string;
  admission_date: string;
  project: string;
  url: string;
}


const EditNavers: React.FC = () => {
  const [userData, setUserData] = useState({} as IData)
  const [wasCreated, setWasCreasted] = useState(false)

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`)
      setUserData(await response.json() as IData)
    })()
  },[])

  const handleSubmit = async (body:any) => {
    try {
      delete body.id
      delete body.user_id
      await fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`,'PUT', body)
      setWasCreasted(true)
    }catch(err) {
      console.error(err)
    }
  }

  return (
      <Container>
          <Header/>
          <Content>
            <Form title="Editar Naver" onSubmit={handleSubmit} userData={userData}/>
          </Content>

          {wasCreated && <PopupMessage title="Naver editado" text="Naver editado com sucesso!" onClick={() => history.push('/home')}/>}
      </Container>
  );
}

export default EditNavers;