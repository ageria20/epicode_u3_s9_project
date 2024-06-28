import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import logoNetflix from '../assets/netflix_logo.png' 
import kidsIcon from '../assets/kids_icon.png'
import { BellFill, Search } from 'react-bootstrap-icons'

const MyNav = props => {
    return (
    <Navbar expand="lg" className=" container-fluid mx-0" bg="dark" variant="dark">
    <Container className="container-fluid">
      <Navbar.Brand href="#home"><img src={logoNetflix} alt="" style={{width: "100px"}}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">TV Shows</Nav.Link>
          <Nav.Link href="#link">Movies</Nav.Link>
          <Nav.Link href="#link">Recently Added</Nav.Link>
          <Nav.Link href="#link">My List</Nav.Link>
          
        </Nav>
        <Nav className='d-flex align-items-center'>
            <Nav.Link><Search/></Nav.Link>
            <Nav.Link>KIDS</Nav.Link>
            <Nav.Link><BellFill/></Nav.Link>
            <NavDropdown title={<img src={kidsIcon} alt="" style={{width: "50px"}}/>} id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
    
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNav