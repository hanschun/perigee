import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Login = () => {
  const { loading, loginWithRedirect } = useAuth0()
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='overlay'>
      <div className='overlay-content'>
        <div className='overlay-heading'>
          Welcome to Perigee
        </div>
        <div className='overlay-message'>Please login to continue</div>
        <div className='overlay-action'>
          <button
            id='qsLoginBtn'
            className='btn-margin loginBtn'
            onClick={loginWithRedirect}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login