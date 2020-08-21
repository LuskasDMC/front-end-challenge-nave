import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { setToken } from '../../services/auth'
import { Container, Form, Logo, Error } from './styles';
import Input from '../../components/Input'
import Button from '../../components/Button'
import logoImg from '../../assets/logo.svg'

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<object>({})
  const [error,setError] = useState(false)

  const history = useHistory()
  const { handleChangeAuth } = useAuthContext()

  const handleChange = useCallback((evt:React.ChangeEvent<HTMLInputElement>) => {
      evt.persist()
      setCredentials(prev =>( {...prev,[evt.target?.name]:evt.target?.value} ))
  },[credentials])

  const handleSubmit = async () => {
      const response = await fetch('https://navedex-api.herokuapp.com/v1/users/login',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
      })

      if(response.status === 200){
        const {token} = await response.json()
        setToken(token)
        handleChangeAuth(true)
        history.push('/home')
      }else{
        setError(true)
      }
  }

  return (
      <Container>
          <Form>
            <Logo>
                <img src={logoImg} alt="Logo"/>
                nave.rs
            </Logo>

            <Input name="email" placeholder="E-mail" label="E-mail" onChange={handleChange}/>
            <Input name="password" placeholder="Senha" label="Senha" onChange={handleChange}/>
            
            {error && <Error>Login ou senha incorretos!</Error>}
            <Button onClick={handleSubmit}>Entrar</Button>
          </Form>
      </Container>
  );
}

export default Login;