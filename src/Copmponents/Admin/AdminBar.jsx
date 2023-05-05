import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillHouseDoorFill, BsPersonCircle } from "react-icons/bs";
import { Link, Outlet, useNavigate } from 'react-router-dom';


function AdminBar () {

  const Navigate = useNavigate();

  const HandleSubmit = () => {

    Navigate('/adminbar/adminusers');

  }


  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={HandleSubmit} >Users</Nav.Link>
            <Nav.Link as={Link} to='/adminbar/admincollections'>Collections</Nav.Link>
            <Nav.Link as={Link} to='/adminbar/adminaddproducts'>Add Products</Nav.Link>
            <Nav.Link>Revenue</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to='/'><BsFillHouseDoorFill/></Nav.Link>
            <Nav.Link><BsPersonCircle/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  );
}

export default AdminBar;