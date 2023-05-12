
import Table from 'react-bootstrap/Table';
import { Button }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';


const AdminCollection = () => {

  const Navigate = useNavigate();

  const { products, setProducts, setEdit } = useContext(Context);

  
  const deleteProduct = (e) => {

    const deleteId = parseInt(e.target.id);
    const balanceData = products.filter((item)=>parseInt(item.id)!==deleteId);
    setProducts(balanceData);
  }


  const editProduct = (e) => {

    const removeId = parseInt(e.target.id)
    const updated = products.filter((item)=>parseInt(item.id)===removeId);
    setEdit(updated);

    const newUpdated = products.filter((item)=>parseInt(item.id)!==removeId);
    setProducts(newUpdated);

    Navigate('/adminbar/adminedit');
  }
  
 
  return (

    <div> 
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>COLLECTION</h1><br/>
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
              <td><Button onClick={editProduct} id={item.id} variant='outline-primary'>Edit</Button>{''}</td>
              <td><Button onClick={deleteProduct} id={item.id} variant='outline-danger'>Delete</Button>{''}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminCollection;