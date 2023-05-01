import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function SignUp() {

    return(

        <div>

          <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/> SIGN UP</h1>
         
          <div className="sign-div"><br/>
            <h2 className="reg">Register</h2><br/>

            <label className="full-name">Full Name</label>&nbsp;&nbsp;
            <input type="text" placeholder="Full Name" className="full-name1"/><br/><br/>

            <label className="user">UserName</label>&nbsp;&nbsp;
            <input type="text" placeholder="UserName" className="user1"/><br/><br/>

            <label className="email">E-mail</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="E-mail" className="email1"/><br/><br/>

            <label className="pwd">Password</label>&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Password" className="pwd1"/><br/><br/>

            <label className="conf-pwd">Confirm<br/>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Confirm Password" className="conf-pwd1"/><br/><br/>

            <Button variant='outline-primary'>Sign Up</Button><br/><br/>

            <p>If you have a Already an account</p>

            <Link to='/login'>Login</Link>
          </div>


        </div>
    );
}
export default SignUp;
