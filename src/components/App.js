
import React from 'react'
import Header from './Header'
import {PostsList} from './posts-list'
import { useAuth0 } from '@auth0/auth0-react'

export const App = () => {
  const { logout} = useAuth0()
  return (
    <div>
      <Header logoutHandler={logout} />
      <div className='row container-fluid p-left-right-0 m-left-right-0'>
        <div>Welcome to Perigee</div>
        <PostsList />
      </div>
    </div>
  )
}

export default App