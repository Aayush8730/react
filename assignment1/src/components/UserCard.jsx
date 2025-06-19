import React from 'react'
import UserDetails from './UserDetails'


export default function UserCard({data}) {
  return (
    <>
    <div className='user-card'>
        <UserDetails name  = {data.name} age = {data.age} hobby = {data.hobby}/>  
    </div>
    <hr />
    </>
  )
}

