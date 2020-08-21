import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { 
    Container, 
    Modal, 
    Infos,
    Label,
    Name,
    PersonalInfo,
    WrapperEditDelete
} from './styles';
import DeleteEdit from '../DeleteEdit'
import fetch from '../../services/api'
import Loading from '../Loading'
import { convertToMonths, convertToYears } from '../../utils/convertDate'
import { useAuthContext } from '../../contexts/AuthContext'

interface IProps {
    id: string | number;
    handleCloseModal() : void;
    onClickDelete(id:string | number) : void;
}

interface IResponse {
    id:string;
    user_id:string;
    job_role: string;
    name: string;
    url: string;
    birthdate:string;
    admission_date:string;
    project:string;
}


const capitalizeFirstLetter = (string:string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const ModalComponent: React.FC<IProps> = ({id,handleCloseModal, onClickDelete}) => {
    const [user,setUser] = useState<IResponse>({} as IResponse)
    const [isLoading,setLoading] = useState(true)

    const history = useHistory()
    const { handleChangeAuth } = useAuthContext()
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://navedex-api.herokuapp.com/v1/navers/${id}`)
                const data = await response.json()
                setUser(data)
                setLoading(false)
            }catch(err) {
                console.error(err)
            }
        })()
    }, [])
  return (
      <Container>
          <Modal>
                <i className="fas fa-times fa-lg" onClick={handleCloseModal}/>
                {isLoading ? (
                    <Loading />
                )
                : (
                    <>
                        <div>
                            <img src={user.url} alt="User picture"/>
                        </div>
                        <Infos>
                            <Name>{user.name}</Name>
                            <PersonalInfo>{user.job_role}</PersonalInfo>

                            <Label>Idade</Label>
                            <PersonalInfo>{convertToYears(user.birthdate)} anos.</PersonalInfo>

                            <Label>Tempo de empresa</Label>
                            <PersonalInfo>{convertToMonths(user.admission_date)} meses.</PersonalInfo>

                            <Label>Projetos que participou</Label>
                            <PersonalInfo>{capitalizeFirstLetter(user.project)}.</PersonalInfo>

                            <WrapperEditDelete>
                                <DeleteEdit onClickEdit={() => history.push(`/navers/edit/${id}`)} onClickDelete={() => {onClickDelete(id)}}/>
                            </WrapperEditDelete>
                        </Infos>
                    </>
                  )
                }
          </Modal>
      </Container>
  );
}

export default ModalComponent;