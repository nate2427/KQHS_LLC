import React from 'react';
import {withRouter} from 'react-router';


import './contact.css';
class Contact extends React.Component {


    render = () => {


        return (
            <React.Fragment>
                <div className='contactpage'></div>
            </React.Fragment>
        );
    }
}

export default withRouter(Contact);