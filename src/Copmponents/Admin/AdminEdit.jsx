import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useRef } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';


const AdminEdit = () => {

    const Navigate = useNavigate();
  
    const { products, setProducts, edit } = useContext(Context);

    const inputRef = useRef(null);


    const editUpdate = () => {
        
        const id = inputRef.current.Id.value;
        const brand = inputRef.current.Brand.value;
        const price = inputRef.current.Price.value;
        const qty = inputRef.current.Qty.value;
        const img = inputRef.current.Image.value;
        const type = inputRef.current.Type.value;
        setProducts([...products,{id,brand,price,qty,img,type}]);

        Navigate('/adminbar/admincollection');

    }


    return (

         <div>

         {edit.map((item)=>(
          
          <Form ref={inputRef} key={item.id}> 
            <InputGroup size="lg" >
              <InputGroup.Text id="inputGroup-sizing-lg">Id</InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name='Id' defaultValue={item.id}
                />
      </InputGroup>
      <br /><br />
      <InputGroup size="lg" >
        <InputGroup.Text id="inputGroup-sizing-lg">Brand</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Brand' defaultValue={item.brand}
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Price</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Price' defaultValue={item.price}
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Qty</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Qty' defaultValue={item.qty}
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Image</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Image' defaultValue={item.img}
        />
      </InputGroup>
      <br /><br />

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Type</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          name='Type' defaultValue={item.type}
        />
      </InputGroup>
      <br /><br />
      <Button variant='outline-primary' type='submit' onClick={editUpdate}>Save</Button>{' '}
      </Form>


         ))}

    </div>
  )
}

export default AdminEdit;