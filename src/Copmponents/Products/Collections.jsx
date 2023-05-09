import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';


const Collections = () => {

  const Navigate = useNavigate();

  const { products } = useContext(Context);

  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>COLLECTIONS</h1><br/>
      <h2 className='d-flex container'>Our Best Seller</h2><br/>
    
      <div className='d-flex-column container'>
        <div className='row gap-5'>

          {products.map((item)=> (

            <Card
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
              style={{ width: '21.5rem' }}
            >
              <Card.Img variant='top' src={item.image}/>
              <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.type}</Card.Text> 
                <h6>Price: ₹ {item.price}</h6>
                
                <Button onClick={()=>Navigate(`/view/${item.id}`)} variant='outline-primary'>View Product</Button>
                
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;