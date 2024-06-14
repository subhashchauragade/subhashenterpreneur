import { useState } from 'react'
import './App.css'
import LoginForm from './component/LoginForm'
import PasswordReset from './component/PasswordReset'
import SignupForm from './component/SignupForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <LoginForm/>
    <PasswordReset/>
    <SignupForm/>
  
    </>
  )
}

export default App
