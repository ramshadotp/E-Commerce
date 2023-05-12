import React from 'react';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import './Style.css';


const Home = () => {

  return (
    
    <div>
      <h1 style={{textAlign: 'center'}} className='bg-info text-white'><BsFillHouseDoorFill/> HOME</h1>
  

      <img style={{width: '100%'}} src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg'/><br/><br/>
    
      <h1 className='text1'>Love the Planet</h1>
      <h1 className='text2'>we walk on</h1>

      <Button className='mn-btn' variant='light' size='lg' href='/men' >SHOP MEN</Button>
      <Button className='wn-btn' variant='light' size='lg' href='/women'>SHOP WOMEN</Button>

      <hr className='my-0'/><br/> 

      <p>AS SEEN IN :

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg'/>

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg'/>

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg'/>

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg'/>

        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg'/>

      </p>
      
    </div>
  );
}

export default Home;