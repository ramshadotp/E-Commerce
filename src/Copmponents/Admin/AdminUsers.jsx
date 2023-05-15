import React, { useContext } from 'react'
import { Context } from '../Context'
import { Form } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const AdminUsers = () => {

  const {signup} = useContext(Context);
  

  return (

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>USERS</h1><br/>

      <Form className="d-flex">
          <Form.Control 
            onChange={searchHandle}
            type="search"
            placeholder="Search Brand"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Search</Button>
        </Form>


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
