import React from 'react'
import { useSelector } from 'react-redux';

function UserName() {
  const name = useSelector(state => state.user.userName);

  return (
    <div className='text-sm font-semibold'>{name}</div>
  )
}

export default UserName;