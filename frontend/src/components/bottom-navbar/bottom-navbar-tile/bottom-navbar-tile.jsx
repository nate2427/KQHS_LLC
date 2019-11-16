import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './bottom-navbar-tile.css';

class BottomNavbarTile extends React.Component {


    // render function
    render = () =>
    {
        return (
            <React.Fragment>
                <a href={this.props.href}>
                    <span>
                        <FontAwesomeIcon icon={this.props.icon}/>
                    </span>
                </a>
            </React.Fragment>
        );
    }
}

export default BottomNavbarTile;