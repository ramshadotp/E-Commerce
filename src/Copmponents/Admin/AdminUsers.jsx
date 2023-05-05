import React, { useContext } from 'react'
import { Context } from '../Context'

const AdminUsers = () => {

  const add = useContext(Context)
  const {signup} = add
  console.log(signup);

  return (

    <div>

      {signup.map((item)=>(
        
        <div>
          <h1>{item.username}</h1>
          <h1>{item.email}</h1>
        </div>

      ))}

    </div>
  )
}

export default AdminUsers;
