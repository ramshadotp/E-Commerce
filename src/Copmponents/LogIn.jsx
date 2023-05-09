import React, { useContext, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';


function LogIn() {


  const InputRef = useRef(null);

  const Navigate = useNavigate();

  const add = useContext(Context)
  const {signup} = add
  console.log(signup);


  const HandleSubmit = () => {

    const user = InputRef.current.user.value;
    const pwd = InputRef.current.password.value;
    const details = signup.filter((item)=>item.username===user&&item.password===pwd)
    if(details.length>0){
      Navigate('/');
      alert('Login Successfully');
    }else{
      alert('wrong username & password');
    }

  }


  return(

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/> LOG IN</h1><br/>
      <h2>Log In</h2><br/>

      <div className='d-flex-column container'>

        <Form ref={InputRef} onSubmit={(e)=>e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='user' placeholder="Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password'  placeholder="Password"/>
          </Form.Group><br/>

           <Button variant="outline-primary" type="submit" onClick={HandleSubmit}>Submit</Button><br/><br/>
           <label>Do you have an account .</label><Link to='/signup'> Register here</Link>

        </Form>

      </div>
          
    </div>
          
   );
}

export default LogIn;


