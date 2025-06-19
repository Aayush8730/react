import React from 'react'

export default function UserDetails({name, age, hobby}) {
  return (
    <div className="user-details-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Hobby:</strong> {hobby}</p>
    </div>
  )
}
