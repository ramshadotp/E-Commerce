import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsData } from './Products/ProductsData';
import { Card, Button } from 'react-bootstrap';
import { Context } from './Context';


const ViewDetails = () => {

  const Navigate = useNavigate();

  const {cart, setCart, auth} = useContext(Context);
  const {id} = useParams();
  const data = ProductsData.filter((item)=>item.id==id); 


  const myCart = () => {

    if(auth) {

      const[newData] = data;
      const duplicate = cart.filter((item)=>item.id==id);

      if(duplicate.length>0){
        return alert ("Product already exists");
      
      }else{
        setCart (prevState => [...prevState, newData]);
        alert("Product added to Cart");
      }

    }else{
      alert('Please Login');
      Navigate('/login');
    }

  }

  
  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>VIEW PRODUCT</h1><br/>
      <h2>Product Details</h2><br/>

        <div className='d-flex-column container'>

        {data.map((item)=>(

          <Card
            className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
            style={{ width: '30rem' }}
          >
            <Card.Img variant='top' src={item.image}/>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.type}</Card.Text> 
              <h6>Price: ₹ {item.price}</h6>
          
              <Button onClick={myCart} variant='outline-primary'>Add to Cart</Button>
              
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
}

export default ViewDetails;