import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


// const Footer = () => {
//   return (
    
//     <footer className='footer'>
    
//       <hr className='my-0'/>
  
//       <div className='footer-content'>
      
//         <div className='footer-logo'>P L A S H O E</div>

//         <div className='footer-links'>
//           <a href='/'>Home</a>
//           <a href='/collections'>Collections</a>
//           <a href='#'>Contact Us</a>
//           <a href='#'>About Us</a>

//         </div>
        
//       </div>

//     </footer>
//   ); 
// }

// export default Footer;

  function Footer() {

    return (

      <footer className="bg-light text-dark">

        <hr className='my-0'/><br/>

        <Container>
       
          <Row>
        <Col md={6}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed rutrum elit eget massa dapibus, nec commodo sapien fermentum.
          </p>
        </Col>
        <Col md={3}>
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 1234 Main St, City, State ZIP</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4>Follow Us</h4>
          <ul className="list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer;