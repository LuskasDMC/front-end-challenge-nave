import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import moment from 'moment'

import { Container, Header, Form, Row, Error } from './styles';
import InputDate from '../InputDate'
import Input from '../Input'
import Button from '../Button'

interface IProps {
    title:string;
    userData?: IData;
    onSubmit: (body:object) => void
}

interface IData {
  name:string;
  job_role: string;
  birthdate:string;
  admission_date: string;
  project: string;
  url: string;
}

type IEvent = React.ChangeEvent<HTMLInputElement>

const INITIAL_VALUE = {
  name:'',
  job_role: '',
  birthdate:'',
  admission_date: '',
  project: '',
  url: '',
}

const FormComponent: React.FC<IProps> = ({title, onSubmit, userData}) => {
  const [data, setData] = useState({...INITIAL_VALUE} )
  const [error, setError] = useState(false)

  const history = useHistory()

  const handleChange = (evt:IEvent) => {
    evt.persist()
    setData(prev => ({...prev, [evt.target?.name]:evt.target?.value}))
  }

  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const check = handleCheckFields()
    if(check){
      console.log(data)
      onSubmit(data)
    }else{
      setError(true)
    }
  }

  const handleCheckFields = () => {
    console.log(data)
    for(let val in data){
      if(!(data as any)[val].length){
        return false
      }
    }
    return true
  }

  useEffect(() => {
    if(userData){
      userData.birthdate = moment(userData!.birthdate).format('DD/MM/YYYY')
      userData.admission_date = moment(userData!.admission_date).format('DD/MM/YYYY')
    }
    console.log(userData)
    setData(prev => ({...prev,...userData}))
  },[userData])

  return (
    <Container>
      <Header><i className="fas fa-chevron-left" onClick={() => history.push('/home')}/> {title}</Header>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input 
            name="name" 
            placeholder="Nome" 
            label="Nome" 
            onChange={handleChange}
            defaultValue={userData?.name}
          /> 
          <Input 
            name="job_role" 
            placeholder="Cargo" 
            label="Cargo" 
            onChange={handleChange}
            defaultValue={userData?.job_role}
          />
        </Row>
        <Row>
          <InputDate 
            name="birthdate" 
            placeholder="Data de nascimento" 
            label="Data de nascimento"
            onChange={handleChange}
            defaultValue={userData?.birthdate}
          /> 
          <InputDate 
            name="admission_date" 
            placeholder="Data de admissão" 
            label="Data de admissão" 
            onChange={handleChange}
            defaultValue={userData?.admission_date}
          />
        </Row>
        <Row>
          <Input 
            name="project" 
            placeholder="Projetos que participou" 
            label="Projetos que participou" 
            onChange={handleChange}
            defaultValue={userData?.project}
          /> 
          <Input 
            name="url" 
            label="URL da foto do Naver" 
            placeholder="URL da foto do Naver" 
            onChange={handleChange}
            defaultValue={userData?.url}
          />
         
        </Row>
        {error && <Error>Preencha os campos corretamente.</Error>}
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
}

export default FormComponent;