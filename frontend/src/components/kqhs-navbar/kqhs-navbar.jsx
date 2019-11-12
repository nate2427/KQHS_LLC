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
        this.state = {
            dropdownShowing: false,
        }
        this.refresh = this.refresh.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.rmDropDown = this.rmDropDown.bind(this);
    }
    
    refresh(e) {
        window.scrollTo(0, 0)
    }

    showDropdown(e) {
        this.setState({dropdownShowing: true});
    }

    rmDropDown(e) {
        this.setState({dropdownShowing: false});
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
                                <Link 
                                    to="/services" 
                                    className={"kqhs-nav-link " + (this.state.dropdownShowing ? 'show' : '')} 
                                    onMouseLeave={this.rmDropDown} onMouseOver={this.showDropdown} 
                                    onClick={(e)=>e.preventDefault()}
                                >
                                    Services <FontAwesomeIcon icon={faAngleDoubleDown}/> 
                                </Link>
                                <div className={"dropdown-menu black-background " + (this.state.dropdownShowing ? 'show' : '')}
                                    onMouseEnter={this.showDropdown}
                                    onMouseLeave={this.rmDropDown}
                                >
                                    <Link onClick={this.refresh} className={'red-color kqhs-nav-item'} to='/services/pestcontrol'>Pest Control</Link>
                                    <br/>
                                    <Link onClick={this.refresh} className={'red-color kqhs-nav-item'} to='/services/bedbug'>Bed Bugs</Link>
                                    <br/>
                                    <Link onClick={this.refresh} className={'red-color kqhs-nav-item'} to='/services/termites'>Termites/WDO</Link>
                                    <br/>
                                    <Link onClick={this.refresh} className={'red-color kqhs-nav-item'} to='/services/qualityprograms'>Quality Programs</Link>
                                </div>
                            </div>
                            <Link onClick={this.refresh} to="/about" className="kqhs-nav-link">About</Link>
                            <Link onClick={this.refresh} to="/contact" className='kqhs-nav-link'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
		)
	}
}

export default KQHSNavbar;