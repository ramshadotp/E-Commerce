import { useContext } from 'react';
import { Context } from '../Context';
import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';



const AdminUser = () => {

  const {signup, adminSearch, setAdminSearch,} = useContext(Context);


  const searchHandle = (e)=>{

    setAdminSearch(e.target.value);

  }


  return (

    <div style={{backgroundColor:'white',width:'100%'}}>
      <h1 style={{textAlign:'center'}}>User</h1>
      <br /><br />

      <div>  

        <Form className="adm-bar">
          <Form.Control 
            onChange={searchHandle}
            type="search"
            placeholder="Search"
            className="me-6"
            aria-label="Search"
          />
        </Form>

      </div>
      <br /><br />

      <div>
 
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>

              <th>E mail</th>
              <th>Username</th>
            </tr>
          </thead>

          {signup.filter((val)=>{

            if(adminSearch===" "){
              return val;

            }else if(val.name.toLowerCase().includes(adminSearch.toLowerCase())){
              return val;

            }else{
              return false;
            }

          })

          .map((item)=>(
       
            <tbody>
              <tr>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            </tbody>
       
          ))
          }      
      
        </Table>
  
      </div>
  
    </div>
  )
}

export default AdminUser;



// import React, { useContext } from 'react'
// import { Context } from '../Context'


// const AdminUsers = () => {

//   const {signup} = useContext(Context);
  

//   return (

//     <div>

//       <h1 style={{textAlign: 'center'}} className='bg-info text-white'>USERS</h1><br/>

//       {signup.map((item)=>(
        
//         <div>
//           <h1>{item.username}</h1>
//           <h1>{item.email}</h1>
//         </div>

//       ))}

//     </div>
//   )
// }

// export default AdminUsers;
