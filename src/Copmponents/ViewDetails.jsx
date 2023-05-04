import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from './Products/ProductsData';
import { Card, Button } from 'react-bootstrap';
import { Context } from './Context';


const ViewDetails = () => {

  const add = useContext(Context);
  const {state, setState} = add;
  const {id} = useParams();
  const data = ProductsData.filter((items)=>items.id===parseInt(id)); 


  const MyCart = () => {

    const[newData] = data;
    const duplicate = state.filter((item)=>item.id===parseInt(id));
    if(duplicate.length>0){
      return alert ("Product already exists");
    }else{
      setState (prevState => [...prevState, newData]);
      alert("Product added to Cart");
      console.log(state);
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
          
              <Button onClick={MyCart} variant='outline-primary'>Add to Cart</Button>
              
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
}

export default ViewDetails;