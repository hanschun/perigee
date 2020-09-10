import React from 'react'
import LogoutBtn from './Auth/LogoutBtn'

const Header = ({ logoutHandler }) => (
  <div className='justify-content-between'>
    <div>Perigee</div>
    <div className='justify-content-end'>
      <LogoutBtn logoutHandler={logoutHandler} />
    </div>
  </div>
)

export default Header