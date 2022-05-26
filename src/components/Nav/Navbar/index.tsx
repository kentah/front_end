import React from 'react'
import NavbarItem, {NavbarItemProps} from '../NavbarItem'
import './navbar.css'
//import {  ActionType, LoginReducer, initialState } from '../../../reducers/loginReducer'
//import { AuthContext } from '../../../context/authContext'

const navItems: NavbarItemProps[] = [
  { name: 'Home', link: '/', auth: true },
  { name: 'Blog', link: '/blog', auth: true },
  { name: 'Sound', link: '/sound', auth: true },
  { name: 'Art', link: '/art', auth: true },
  { name: 'Info', link: '/info', auth: true },
  { name: 'Edit', link: '/edit', auth: true },
  { name: 'Login', link: '/login', auth: true },
  { name: 'Admin', link: '/admin', auth: false },
]

export const Navbar = () => {
  //const [state, dispatch ] = useReducer(LoginReducer, { type: 'login' })
 

  //useEffect(() => {
  //  state ? console.log('Logged in from nav') : null   
  //  dispatch()
  //})

  console.log('in navbar')
  return ( 
    <div className="back-bar">
        {navItems.map((i, k) => {
          return(
            <nav key={k} className='bar'>
              <NavbarItem name={i.name} link={i.link} auth={i.auth}/>
            </nav>
          )
        })} 
    </div>
  )
}


