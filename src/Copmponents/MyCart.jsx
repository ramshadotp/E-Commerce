import React, { useContext } from 'react'
import { Context } from './Context'
import { Card, Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';

const MyCart = () => {

    const add = useContext(Context);
    const {state, setState} = add;
    console.log(state);

    const Remove = (e) => {
    const Removeid = parseInt(e.target.id)
    const Balancedata = state.filter((item)=>item.id!==Removeid)
    setState(Balancedata)

    }


  return (
    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsFillCartPlusFill/> MY CART</h1><br/>
      <h2>My Cart</h2><br/>

      <div className='d-flex-column container'>

        {state.map((item)=>(

          <Card
            className="shadow p-3 mb-5 bg-body-tertiary rounded" 
            style={{ width: '30rem' }}
          >
            <Card.Img variant='top' src={item.image}/>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.type}</Card.Text>
              <h6>Price: ₹ {item.price}</h6>
              <Button variant='outline-primary'>Buy Product</Button>
              <Button onClick={Remove} id={item.id} className='ms-3' variant='outline-danger'>Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MyCart;