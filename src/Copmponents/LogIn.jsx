import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function LogIn() {

    return(
        
        <div>

          <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsPersonFill/> LOG IN</h1>

          <div className='log-main'>
        
          <div className="log-div"><br/>
      
            <h2 className="log">Login</h2><br/>

            <label className="user">UserName</label>&nbsp;
            <input type="text" placeholder="UserName" className="user1"/><br/><br/>

            <label className="pwd">Password</label>&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Password" className="pwd1"/><br/><br/>

            <Button variant='outline-primary'>Log In</Button><br/><br/>

            <p>Do have an account ? <Link to='/signup'>Register here</Link></p>
          </div>
          
          </div>
          
        </div>
    );
}
export default LogIn;


