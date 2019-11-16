import React from 'react';
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './kqhs-navbar.css';


class KQHSNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownShowing: false,
            navShowing: false
        }
        this.refresh = this.refresh.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.rmDropDown = this.rmDropDown.bind(this);
        this.handleStackedBarsOnClick = this.handleStackedBarsOnClick.bind(this);
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

    handleStackedBarsOnClick(e) {
        this.state.navShowing ? this.setState({navShowing: false}) : this.setState({navShowing: true});
    }



	render() {
		return (
            <div className="kqhs-navbar-cmp">
                <div className="nav-icon flexing" onClick={this.handleStackedBarsOnClick}>
                    <FontAwesomeIcon className='kqhs-hamburger-menu' icon={faBars}/> 
                </div>
                <Navbar className={'kqhsNavEle ' + (this.state.navShowing ? 'show-nav' : '')}>
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