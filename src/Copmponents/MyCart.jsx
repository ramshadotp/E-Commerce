import React, { useContext } from 'react';
import { Context } from './Context';
import { Card, Button } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';


const MyCart = () => {

  const {cart, setCart} = useContext(Context);


  const remove = (e) => {

    const removeId = parseInt(e.target.id);
    const balanceData = cart.filter((item)=>item.id!==removeId);
    setCart(balanceData);
  }

      
  return (
 
    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsCart4/> MY CART</h1><br/>

      <div className='d-flex-column container'>

        {cart.length==0? <div className='empty_img'><img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" /><h2 style={{textAlign:'center'}}>Cart is empty</h2></div>:<div  className='items'>

        {cart.map((item)=>(

          <Card
            className="shadow p-3 mb-5 bg-body-tertiary rounded" 
            style={{ width: '30rem' }}
          >
            <Card.Img variant='top' src={item.image}/>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.type}</Card.Text>
              <h6>Price: ₹ {item.price}</h6>
              <div>
                <p>Qty:
                  <Button className='m-1' variant='outline-primary'>-</Button>
                  {item.qty}
                  <Button className='m-1' variant='outline-primary'>+</Button>
                </p>
              </div>

              <Button variant='outline-primary'>Buy Product</Button>

              <Button onClick={remove} id={item.id} className='ms-3' variant='outline-danger'>Remove</Button>

            </Card.Body>
          </Card>
        ))}
        </div>
        }
      </div>
    </div>
  );
}

export default MyCart;