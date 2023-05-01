import React from 'react';
import { ProductsData } from './Products/ProductsData';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Kids = () => {
  
  const data = ProductsData.filter((item)=>item.type==="Kids Shoes");
  const use = useNavigate();
  
  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>SHOP KIDS</h1><br/>
      <h2 className='d-flex container'>Kids Shoes</h2><br/>

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
                <Button onClick={()=>use(`/view/${item.id}`)} variant='outline-primary'>View Product</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kids;