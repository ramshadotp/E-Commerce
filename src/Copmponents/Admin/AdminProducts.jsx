import React, { useState } from 'react';
import { AdminProductsData } from './AdminProductsData';
import { Card, Button } from 'react-bootstrap';


const AdminProducts = () => {

  const [items, setItems] = useState(AdminProductsData);

  const Remove = (e) => {
    const Removeid = parseInt(e.target.id);
    const Balancedata = state.filter((item)=>item.id!==Removeid);
    setState(Balancedata);
    }

  
  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>ADD PRODUCTS</h1><br/>
      <h2 className='d-flex container'></h2><br/>
    
      <div className='d-flex-column container'>
        <div className='row gap-5'>

          {items.map((item)=> (

            <Card
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
              style={{ width: '21.5rem' }}
            >
              <Card.Img variant='top' src={item.image}/>
              <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.type}</Card.Text> 
                <h6>Price: ₹ {item.price}</h6>
                <Button onClick={Remove}  id={item.id} variant='outline-danger'>Remove</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;