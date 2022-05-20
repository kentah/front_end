import { createContext  } from 'react'


interface LoggedIn {
  auth: boolean
}
//
//export type AuthContextType = {
//  auth: boolean
//  //setAuth: (auth: LoggedIn) => void 
//  //children: React.ReactNode
//}

//export type AuthContextType = boolean 

export const defaultAuth: LoggedIn = {
   auth: false 
}

export const AuthContext = createContext<boolean>(false)

//export const AuthProvider: React.FC<AuthContextType> = ({  children }) => {
//  return (
//    <AuthContext.Provider value={false}>
//      { children }
//    </AuthContext.Provider>
//  ) 
//}

