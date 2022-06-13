import {createContext,useState} from 'react'


export const FirbaseContext=createContext(null)
export const AuthContext=createContext(null);

export  function Context({children}){
    const [user,setUser]= useState('hello')
    return (
        <AuthContext.Provider value={{user}}>
          {children}
        </AuthContext.Provider>
    )
}