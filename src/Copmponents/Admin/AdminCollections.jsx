
import Table from 'react-bootstrap/Table';
import { Button }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';


const AdminCollections = () => {

  const Navigate = useNavigate();

  const add = useContext(Context)
  const { products, setProducts, setEdit } = add
  console.log(products);

  
  const DeleteProduct = (e) => {
    const Deleteid = parseInt(e.target.id);
    const Balancedata = products.filter((item)=>parseInt(item.id)!==Deleteid);
    setProducts(Balancedata);
  }


  const EditProduct = (e) => {
    const Removeid = parseInt(e.target.id)
    const Updated = products.filter((item)=>parseInt(item.id)===Removeid);
    setEdit(Updated);

    const NewUpdated = products.filter((item)=>parseInt(item.id)!==Removeid);
    setProducts(NewUpdated);

    Navigate('/adminbar/adminedit');
  }
  
 
  return (

    <div> 
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>COLLECTIONS</h1><br/>
      <h2>Products</h2><br/>

      <Table striped bordered hover variant="dark" style={{width:'100%'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>BRAND</th>
            <th>TYPE</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>

        <tbody>

          {products.map((item)=>(

            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.type}</td>
              <td><img src={item.image} style={{ width:'55px', height:'45px' }}/></td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td><Button onClick={EditProduct} id={item.id} variant='outline-primary'>Edit</Button>{''}</td>
              <td><Button onClick={DeleteProduct} id={item.id} variant='outline-danger'>Delete</Button>{''}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminCollections;