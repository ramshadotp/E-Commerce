import React, { useContext, useRef } from 'react'
import { Button } from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { Context } from './Context';
import Form from 'react-bootstrap/Form';
import { BsPersonFill } from 'react-icons/bs';


function SignUp() {

  const Navigate = useNavigate();

  const add = useContext(Context);
  const {signup, setSignup} = add;
  const inputRef = useRef();
  
  const HandleSubmit = () => {

    const username = inputRef.current.user.value;
    const email = inputRef.current.email.value;
    const password = inputRef.current.password.value;
    const confirmpassword = inputRef.current.confirmpwd;
    setSignup([...signup,{username, email, password, confirmpassword}]);
    console.log(signup);

    Navigate('/login');
  }

  return (

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/>SIGN UP</h1><br/>
      <h2>Register</h2><br/>

      <div  className="sign-main">
    
        <Form ref={inputRef} onSubmit={(e)=>{e.preventDefault()}}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name='user' placeholder="Username" />
           <Form.Text className="text-muted"></Form.Text> 
         </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control name='email'  placeholder="Email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type='password' placeholder="Password" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control name='confirmpwd' type='password' placeholder="Confirm Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="outline-primary" type="submit" onClick={HandleSubmit}>Submit</Button><br/><br/>
    <label>If you have already an account ?</label><Link to='/login'> Login</Link>

    </Form>
   
    </div>
   </div> 
   
  )
}

export default SignUp;