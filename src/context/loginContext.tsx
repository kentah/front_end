import { createContext } from 'react';

export const LoginContext = createContext(null)

interface ILogin {
  authorized: boolean
}

export type LoginType = {
  loggedIn: ILogin 
  logIn: () => ILogin
  logOut: () => ILogin
}

