import { useContext, useCallback, useState } from 'react';
import Context from '../context/UserContext';
import { loginApi } from "../api/auth";

export default function useUser () {
    const {jwt, setJWT} = useContext(Context)

    const [state, setState] = useState({loadingBoolean: false, errorBoolean: false})

    const login = useCallback(({username , password})=>{
        setState({loadingBoolean: true, errorBoolean: false})
        loginApi({username,password})
        .then(res =>{
            setJWT(res)
            setState({loadingBoolean: false, errorBoolean: false})
        })
        .catch(error=>{
            setState({loadingBoolean: false, errorBoolean: true})
            console.log("res login", error)
        })
    }, [setJWT])

    const logout = useCallback(()=>{
        setJWT('')
    }, [setJWT]);

    return {
        isLogged:Boolean(jwt),
        jwt,
        ...state,
        login,
        logout,
    }
}