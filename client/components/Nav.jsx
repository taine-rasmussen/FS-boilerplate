import React from 'react'
//import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import { logOff } from 'authenticare/client'
//import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'



function Nav () {
  return (
    <>
    <nav>
        <Link to='/'>Home</Link>
        {/* <Link to='#'onClick={logOff}>Log off</Link>
          <Link to='/register'>Register</Link> */}
          <Link to='/signin'>Sign in</Link>
          <Link to='/whatwedo'>What We Do</Link>
          <Link to='/fees'>Fees</Link>
          <Link to='/staff'>Staff</Link>
          <Link to='/patron'>Patron and Supporters</Link>
          <Link to='/clients'>Client</Link>

    </nav>
    </>
  )
}

export default Nav
