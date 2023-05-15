import React, { useContext } from 'react';
import { Context } from '../Context';
import { Card } from 'react-bootstrap';


const AdminSearch = () => {

  const {products, adsearch} = useContext(Context);


  return (

    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>COLLECTION</h1><br/>
      <h2 className='d-flex container'>Brand</h2><br/>

      <div className='d-flex-column container'>
        <div className='row gap-5'>

          {products.filter((val) => {

            if(adsearch ===" "){
              return val;
            }
            else if(val.brand.toLowerCase().includes(adsearch.toLowerCase())){
              return val;
            }else{
              return false;
            }

          })
  
          .map((item)=>(
            
            <Card
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
              style={{ width: '21.5rem' }}
            >
              <Card.Img variant='top' src={item.image}/>
              <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Text>{item.type}</Card.Text> 
                <h6>Price: ₹ {item.price}</h6>
              </Card.Body>
            </Card>

          ))
          }

        </div>
      </div>
    </div> 
  )
}

export default AdminSearch;