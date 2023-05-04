import React, { useContext, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Context } from './Context';
import Form from 'react-bootstrap/Form';
import { BsPersonFill } from 'react-icons/bs';


function SignUp() {

  const add = useContext(Context)
  const {signup, setSignup} = add
  const inputRef = useRef()

  const handleSubmit = () => {

    const username = inputRef.current.user.value;
    const email = inputRef.current.email.value;
    const password = inputRef.current.password.value;
    const pwd = inputRef.current.confirmpwd;
    setSignup([...signup,{username,email,password,pwd}])
    console.log(signup);
  }

  return (

    <div>

    <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/> SIGN UP</h1><br/>

    <div  className="S-maindiv">
    
    <Form ref={inputRef} onSubmit={(e)=>{e.preventDefault()}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control name='user' placeholder="Enter username" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control name='email'  placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password'  placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control name='confirmpwd' placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button><br/><br/>
    <label> Have already an account.</label><Link to='/login'> Login</Link>
  </Form>
   
    </div>
   </div> 
   
  )
}

export default SignUp;