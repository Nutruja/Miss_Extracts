import React from 'react'
import './Registration.css'

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import NavBar from '../../components/NavBar/NavBar'

export default function Registration() {
  return (
    <div className='registration'>
      <NavBar isSignin={false} atSignup={false}/>
      <div className='registraion-body'>
        <RegistrationForm />
      </div>
    </div>
  )
}
