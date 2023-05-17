import React, { useContext } from 'react'
import { Context } from '../Context'


const AdminUsers = () => {

  const {signup} = useContext(Context);
  

  return (

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>USERS</h1><br/>

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
