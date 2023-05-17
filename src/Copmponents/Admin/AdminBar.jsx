import React, { useContext } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Context } from '../Context';


const AdminBar = () => {

  const Navigate = useNavigate();

  const {setSearch} = useContext(Context);
  

  const handleSubmit = () => {

    Navigate('/adminbar/adminusers');

  }

  const searchHandle = (e) => {
    
    setSearch(e.target.value);
    Navigate('/adminbar/adminsearch');

  }

  return (

    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink exact to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            ADMIN
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

          <Form className="adm-bar">
            <Form.Control 
              onChange={searchHandle}
              type="search"
              placeholder="Search"
              className="me-6"
              aria-label="Search"
            />
          </Form>

            <NavLink onClick={handleSubmit} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">USERS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminbar/admincollection" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bars">COLLECTION</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminbar/adminaddproducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-cart">ADD PRODUCTS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">REVENUE</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">HELP</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <Outlet/>
    </div>

  );
};

export default AdminBar;


    // <div>
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand>Admin</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">

    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link onClick={handleSubmit} >Users</Nav.Link>
    //         <Nav.Link as={Link} to='/adminbar/admincollection'>Collection</Nav.Link>
    //         <Nav.Link as={Link} to='/adminbar/adminaddproducts'>Add Products</Nav.Link>
    //         <Nav.Link>Revenue</Nav.Link>
    //       </Nav>

    //       <Form className="d-flex">
    //         <Form.Control
    //           onChange={searchHandle}
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-secondary">Search</Button>
    //       </Form>
          
    //       <Nav>
    //         <Nav.Link as={Link} to='/'><BsFillHouseDoorFill/></Nav.Link>
    //         <Nav.Link as={Link} to='/login'><BsPersonCircle/></Nav.Link>
    //       </Nav>

    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // <Outlet/>
    // </div>
