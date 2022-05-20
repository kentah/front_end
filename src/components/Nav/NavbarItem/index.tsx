import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar_item.css'

export interface NavbarItemProps {
  name: string
  link: string
  auth: boolean
}


const NavbarItem: React.FC<NavbarItemProps> = ({ name, link, auth }) => {
  console.log('in navbar item')
  return(
    auth ? <NavLink to={link} className='nav-item'>{name}</NavLink> : null
  )
}

export default NavbarItem
