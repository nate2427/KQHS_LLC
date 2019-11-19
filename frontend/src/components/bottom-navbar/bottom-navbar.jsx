import React from 'react';
import Container  from "react-bootstrap/Container";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



import './bottom-navbar.css';
import BottomNavBarTile from './bottom-navbar-tile/bottom-navbar-tile';

class BottomNavBar extends React.Component {

    render () {
        return (
            <React.Fragment>
                <Container
                    fluid={true}
                    className='bottom-nav'
                >
                    <div className="bottom-nav-wrpr">
                        <BottomNavBarTile
                            icon={faPhoneAlt}
                            href="tel:‭16162919359‬"
                        />
                        <BottomNavBarTile
                            icon={faEnvelope}
                            href="mailto:kqhsllc@gmail.com?Subject=Potential%20Client" 
                        />
                        <BottomNavBarTile
                            icon={faMapMarkerAlt}
                            href='https://www.google.com/maps/place/Grand+Rapids,+MI/@42.9564627,-85.7301289,12z/data=!3m1!4b1!4m5!3m4!1s0x88185460bb502815:0xa593aacb1bd3a8d0!8m2!3d42.9633599!4d-85.6680863'
                        />
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default BottomNavBar;