import React, { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import CardPerson from '../../components/CardPerson'
import Header from '../../components/Header'
import { 
    Container, 
    Content, 
    ContentBody, 
    ContentHeader 
} from './styles';
import Modal from '../../components/Modal'
import PopupDelete from '../../components/PopupDelete'
import Loading from '../../components/Loading';

import { useAuthContext } from '../../contexts/AuthContext'
import fetch from '../../services/api'

interface IResponse {
    id:string;
    user_id:string;
    job_role: string;
    name: string;
    url: string;
}

const Home: React.FC = () => {
    const [users,setUsers] = useState<IResponse[]>([])
    const [userSelected,setUserSelected] = useState<string | number>(-1)
    const [userToDelete,setUserToDelete] = useState<string | number>(-1)
    const [fetchIsLoading, setFetchIsLoading] = useState(false)

    const history = useHistory()

    const fetchUser = async () => {
        try {
            setFetchIsLoading(true)
            const response = await fetch('https://navedex-api.herokuapp.com/v1/navers')
            const data = await response.json() 
            setFetchIsLoading(false)
            return data
        }catch(err) {
            console.error(err)
        }
    }


    const handleCloseModal = () => {
        setUserSelected(-1)
    }

    const handleShowUserInfo = (id:string) => {
        setUserSelected(id)
    }


    const handleDeleteUser = async (id:string | number) => {
        try {
            await fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`,'DELETE')
            setUsers(await fetchUser())
        }catch(err){
            console.error(err)
        }
    }

    const onClickDelete = (id:string | number) => {
        setUserToDelete(id)
        handleCloseModal()
    }

    useEffect(() => {
        (async () => {
            setUsers(await fetchUser())
        })()
    }, [])

  return (
    <Container>
        <Header />
        <Content>
            <ContentHeader>
                <span>Navers</span>
                <Button onClick={() => history.push('/navers/create')}>Adicionar Naver</Button>
            </ContentHeader>

            <ContentBody>
                {!fetchIsLoading ? (
                    <>
                        {users?.map(el => (
                            <CardPerson 
                                {...el} 
                                handleShowUserInfo={handleShowUserInfo}
                                key={el.id} 
                                onClickDelete={onClickDelete}
                            />
                        ))}
                    </>
                )
                : (
                    <Loading />
                )
            }

            </ContentBody>
        </Content>

        {userToDelete !== -1 && 
            <PopupDelete 
                id={userToDelete as string} 
                handleDeleteUser={handleDeleteUser} 
                onClickCancelDelete={() => setUserToDelete(-1)}
            />
        }
        {userSelected !== -1 && 
            <Modal 
                id={userSelected} 
                handleCloseModal={handleCloseModal} 
                onClickDelete={onClickDelete}
            />
        }
    </Container>
  );
}

export default Home;