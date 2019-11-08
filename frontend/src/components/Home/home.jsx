import React from 'react';
import {withRouter} from 'react-router';



class Home extends React.Component {


    render = () => {
        return (
            <React.Fragment>
                <h1 style={ {color: "white"} }>Home Component</h1>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);