import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillHouseDoorFill, BsFillPersonLinesFill, BsPersonCircle } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';


function AdminPage() {

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
            <Nav.Link as={Link} to='/adminpage/users'>Users</Nav.Link>
            <Nav.Link as={Link} to='/adminpage/adminproducts'>Products</Nav.Link>
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
            <Nav.Link><BsFillHouseDoorFill/></Nav.Link>
            <Nav.Link><BsPersonCircle/></Nav.Link>
            <Nav.Link><BsFillPersonLinesFill/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  );
}

export default AdminPage;