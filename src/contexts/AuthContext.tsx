import React, { createContext, useContext, useState } from 'react';

import { verifyUserIsLogged,  handleUserIsLogged } from '../services/auth'


interface IAuthProvider {
    isAuth: boolean;
    handleChangeAuth(value:boolean) : void;
}

const Context = createContext({})

export const useAuthContext = () : IAuthProvider => {
    const context = useContext(Context)
    return context as IAuthProvider
}


const AuthContext: React.FC = ({children}) => {
    const [isAuth, setAuth] = useState( verifyUserIsLogged() )

    const handleChangeAuth = (value:boolean) => {
        console.log('chego')
        setAuth(value)
        handleUserIsLogged(value)
    }
    
    (window as any).handleChangeAuth = handleChangeAuth
    const values = {
        isAuth,
        handleChangeAuth
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
}

export default AuthContext;