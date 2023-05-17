import React, { useContext, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from './Context';


function LogIn() {


  const InputRef = useRef(null);

  const Navigate = useNavigate();

  const {signup, setAuth} = useContext(Context);


  const handleSubmit = () => {

    const email = InputRef.current.email.value;
    const pwd = InputRef.current.password.value;
    const details = signup.filter((item)=>item.email===email&&item.password===pwd)
    setAuth(true)

    if(details.length>0){
      alert('Login Successfully');
      Navigate('/');
      
    }else{
      alert('wrong username & password');
    }

  }


  return(

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/> LOG IN</h1><br/>
      <h2>Log In</h2><br/>

        <Form ref={InputRef} onSubmit={(e)=>e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' placeholder="Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type='password' placeholder="Password"/>
          </Form.Group><br/>

           <Button variant="outline-primary" type="submit" onClick={handleSubmit}>Log In</Button><br/><br/>
           <label>Do you have an account .</label><Link to='/signup'> Register here</Link>

        </Form>
          
    </div>
          
   );
}

export default LogIn;


