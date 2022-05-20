import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory }  from 'react-router-dom'
//import { LoginReducer, ActionType } from '../../reducers/loginReducer'
import './login.css'
import { AuthContext } from '../../context/authContext'
import { Button, buttonType } from '../Button'

type LoginInfo = {
  name: string,
  password: string
}

export const LoginForm: React.FC = ({ children }) => {
  const {
    register, 
    handleSubmit ,
    formState: { errors }
  } = useForm<LoginInfo>();

  //const [state, dispatch] = useReducer<ActionType>(LoginReducer, {type: 'logout'})
  const [loggedIn, setLoggedIn] = useState(false)
  const [userNameCorrect, setUserNameCorrect] = useState(false)
  const [userPasswordCorrect, setUserPasswordCorrect] = useState(false)

  const history = useHistory()

  // base loggedIn value on if username and password are true
  // and only when their values are changed
  //useEffect(() => {
  //  setLoggedIn(userNameCorrect && userPasswordCorrect)
  //  //console.log('state from useEffect', state)
  //  loggedIn ? history.push('/') : null
  //  console.log('loggedIn from useEffect', loggedIn)
  //}, [userNameCorrect, userPasswordCorrect])
  useEffect(() => {
    console.log('logged in:', loggedIn)
  }, [loggedIn])
  
  const onSubmit = async (data: LoginInfo) => {
    console.log('data', data)
    //console.log('state', state)
  }


  const validateLength = (v: any): boolean => v.length > 0 

  const validateUsername = (v: any): boolean => {
    if (v === 'kentah') {
      setUserNameCorrect(true)
      //setLoggedIn(true)
      //dispatch()
      console.log(`userNameCorrect:: ${userNameCorrect}`)
      console.log('loggedIn from validateUserName', loggedIn)
      return true
    } else {
      setUserNameCorrect(false)
      setLoggedIn(false)
      //dispatch()
      console.log(`userNameCorrect:: ${userNameCorrect}`)
      console.log('loggedIn from validateUserName', loggedIn)
      return false
    }
  }

  const validatePassowrd = (v: any): boolean => {
    if (v === 'password') {
      setUserPasswordCorrect(true)
      console.log(`userPasswordCorrect: ${userPasswordCorrect}`)
      return true
    } else {
      setUserPasswordCorrect(false)
      console.log(`userPasswordCorrect: ${userPasswordCorrect}`)
      return false
    }
  }

  const validateLogin = async () => {
    //setLoggedIn(userPasswordCorrect && userPasswordCorrect)
    //await pushToHome() 
    try {
      await setLoggedIn(userNameCorrect && userPasswordCorrect)
      pushToHome()
    } catch(err) {
      console.log(err.message)
    }
  }

  const pushToHome = () =>
    loggedIn ? history.push('/') : console.log('Not pushed to "/"')

  return(
    <AuthContext.Provider value={loggedIn}>
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='loginFields'>
          <div>
            <input 
              className='name'
              type='text'
              {...register('name', {
                validate: {
                  length: val => validateLength(val),
                  user: val => validateUsername(val)
                } 
              })} 
              placeholder='username'
            />
            {errors?.name && errors?.name.type == 'length' && ( 
              <p className='errorMsg'>Username is required</p> 
            )}
            {errors?.name && errors?.name.type == 'user' && ( 
              <p className='errorMsg'>Incorrect username</p> 
            )}
          </div>
          <div>
            <input 
              className='password'
              type='password'
              {...register('password', {
                validate: {
                  length: val => validateLength(val),
                  pass: val => validatePassowrd(val)
                }
              })} 
              placeholder='password'
            />
            {errors?.password && errors?.password.type == 'length' && ( 
              <p className='errorMsg'>Password is required</p> 
            )}
            {errors?.password && errors?.password.type == 'pass' && ( 
              <p className='errorMsg'>Incorrect password</p> 
            )}
          </div>
          <Button 
            type={buttonType.confirm}
            buttonText={'Submit'}
            buttonAction={() => validateLogin()}
            />
        </div>
      </form>
      { children }
    </div>
  </AuthContext.Provider>
  )
}
