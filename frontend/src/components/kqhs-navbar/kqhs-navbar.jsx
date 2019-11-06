import React from 'react';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  NavDropdown  from "react-bootstrap/NavDropdown";

import navStyles from './kqhs-navbar.css';



class KQHSNavbar extends React.Component {
	render() {
        console.log(navStyles);
		return (
            <div className="kqhs-navbar-cmp">
                <Navbar className='kqhsNavEle'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='kqhs-nav-link' href="#home">Home</Nav.Link>
                            <Nav.Link className='kqhs-nav-link' href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}

export default KQHSNavbar;