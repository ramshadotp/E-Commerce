import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsHouseDoorFill, BsCartPlusFill, BsPersonLinesFill } from "react-icons/bs";


function NavigationBar() {

  const SearchHandle = () => {
    const 
  }



  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg'/>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>
          
          <Nav.Link as={Link} to='/men'>MEN</Nav.Link>
          <Nav.Link as={Link} to='/women'>WOMEN</Nav.Link>
          <Nav.Link as={Link} to='/kids'>KIDS</Nav.Link>
          <Nav.Link as={Link} to='/sports'>SPORTS</Nav.Link>          
          <Nav.Link as={Link} to='/collections'>COLLECTIONS</Nav.Link>
          <Nav.Link as={Link} to='/adminbar'>ADMIN</Nav.Link>
        </Nav>
         
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button ref={InputRef} onClick={SearchHandle} variant='outline-secondary'>Search</Button>
        </Form>

        <Nav>
          <Nav.Link as={Link} to='/'><BsHouseDoorFill/></Nav.Link>
          <Nav.Link as={Link} to='/mycart'><BsCartPlusFill/></Nav.Link>
          <Nav.Link as={Link} to='/login'><BsPersonLinesFill/></Nav.Link>
        </Nav> 
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;