import React from 'react';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import './kqhs-navbar.css';


class KQHSNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.refresh = this.refresh.bind(this);
    }
    
    refresh(e) {
        window.scrollTo(0, 0)
    }

	render() {
		return (
            <div className="kqhs-navbar-cmp">
                <Navbar className='kqhsNavEle'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="kqhs-nav-link" onClick={this.refresh}>Home</Link>
                            <div className='dropdown nav-item'>
                                <Link to="/services" className="kqhs-nav-link">Services <FontAwesomeIcon icon={faAngleDoubleDown}/> </Link>
                                <div className="dropdown-menu">
                                    <Link onClick={this.refresh} className='dropdown-item' to='/contact'>Click for contact</Link>
                                </div>
                            </div>
                            <Link onClick={this.refresh} to="/privacy-policy" className="kqhs-nav-link">Privacy</Link>
                            <Link onClick={this.refresh} to="/contact" className='kqhs-nav-link'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}

export default KQHSNavbar;