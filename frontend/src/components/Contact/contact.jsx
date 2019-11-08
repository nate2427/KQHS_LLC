import React from 'react';
import {withRouter} from 'react-router';



class Contact extends React.Component {


    render = () => {


        return (
            <React.Fragment>
                <h1 style={ {color: "white"} }>Contact Page</h1>
            </React.Fragment>
        );
    }
}

export default withRouter(Contact);