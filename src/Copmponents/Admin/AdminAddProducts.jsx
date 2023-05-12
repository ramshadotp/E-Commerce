import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useRef } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';


const AdminAddProducts = () => {

  const Navigate = useNavigate();

  const { products, setProducts } = useContext(Context);

  const inputRef = useRef(null);


  const addItem = () => {
        
      const id = inputRef.current.Id.value;
      const brand = inputRef.current.Brand;
      const price = inputRef.current.Price.value;
      const qty = inputRef.current.Qty.value;
      const img = inputRef.current.Image.value;
      const type = inputRef.current.Type.value;
      setProducts([...products,{id,brand,price,qty,img,type}]);

      Navigate('/adminbar/admincollections');
  }


  return (

    <div>

      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>ADD PRODUCTS</h1><br/>
      <h2>Products</h2><br/>
        
        
      <div style={{width:'100%'}}>
    
          <Form ref={inputRef} onSubmit={(e)=>e.preventDefault}>   
            <InputGroup size="lg" >
              <InputGroup.Text id="inputGroup-sizing-lg">Id</InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name='Id'
                />
      </InputGroup>
      <br /><br />
      <InputGroup size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">Brand</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Brand'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Price</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Price'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Qty</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Qty'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Image</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Image'
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Type</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Type'
        />
      </InputGroup>
      <br /><br />
      <Button variant='outline-primary' type='submit' onClick={addItem}>Save</Button>{' '}
      </Form>
      
    </div>
    </div>
  )
}

export default AdminAddProducts;