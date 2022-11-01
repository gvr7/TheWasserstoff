import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import DashBoard from './DashBoard.jsx'
import AddTopic from "./AddTopic.jsx"
import { BrowserRouter, Routes, Route,Link} from "react-router-dom"
import NotFound from './NotFound.jsx'


const NavigationBar = () => {
  return (
    <BrowserRouter>
    <div>
    <>
    <Navbar bg="dark" variant = "dark" expand="lg">
      <Container>
        <Navbar.Brand><img src = "https://thewasserstoff.com/images/logo-top.png" alt = "logo" className = "logo mx-3"/> Wasserstoff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Nav.Link as ={Link} to = "/">Home</Nav.Link>
              <Nav.Link as ={Link} to = "/about">About</Nav.Link>
              <Nav.Link as ={Link} to = "/contact">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
      <div>
        <Routes>
          <Route exact path = "/about" element= {<About />} />
          <Route exact path = "/contact" element= {<Contact />} />
            <Route exact path = "/" element= {<Home />} />
          
          <Route exact path = "/dashBoard" element= {<DashBoard />} />
          <Route exact path = "/AddTopic" element= {<AddTopic />} />
          <Route path = "/*" element= {<NotFound />} />
          
        </Routes>
       
      </div>
    </div>
  </BrowserRouter>
  );
}

export default NavigationBar;