interface IAuth {
    isLogged: boolean;
    token: string;
}

export const verifyUserIsLogged = () => {
    const { isLogged } = JSON.parse(localStorage.getItem('Auth') as string) || {}
    if(isLogged) return isLogged
    else return false
}

export const handleUserIsLogged = (value:boolean) => {
    const auth = JSON.parse(localStorage.getItem('Auth') as string)
    localStorage.setItem('Auth',JSON.stringify({...auth,isLogged:value}))
}

export const getToken = () => {
    const { token } = JSON.parse(localStorage.getItem('Auth') as string) || {}
    if(token) return token
}

export const setToken = (token:string) => {
    localStorage.setItem('Auth',JSON.stringify({token:token}))
}
