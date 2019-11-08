import React from 'react';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import './kqhs-navbar.css';



class KQHSNavbar extends React.Component {
	render() {
		return (
            <div className="kqhs-navbar-cmp">
                <Navbar className='kqhsNavEle'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="kqhs-nav-link nav-link link">Home</Link>
                            <div className='dropdown nav-item'>
                                <Link to="/services" className="kqhs-nav-link nav-link">Services</Link>
                                <div className="dropdown-menu">
                                    <Link className='dropdown-item' to='/contact'>Click for contact</Link>
                                </div>
                            </div>
                            <Link to="/contact" className='kqhs-nav-link nav-link'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}

export default KQHSNavbar;