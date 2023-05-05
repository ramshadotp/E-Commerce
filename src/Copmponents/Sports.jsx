import React from 'react';
import { ProductsData } from './Products/ProductsData';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sports = () => {
  
  const data = ProductsData.filter((item)=>item.type==="Sports Shoes");
  const Navigate = useNavigate();
  
  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>SHOP SPORTS</h1><br/>
      <h2 className='d-flex container'>Sports Shoes</h2><br/>

      <div className='d-flex-column container'>
        <div className='row gap-5'>

          {data.map((item)=>(

            <Card
              className="shadow p-3 mb-5 bg-body-tertiary rounded" 
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

export default Sports;