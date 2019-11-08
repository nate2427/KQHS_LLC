import React from 'react';
import {withRouter} from 'react-router';
import KQHSTitle from '../kqhs-title/kqhs-title';



class Home extends React.Component {


    render = () => {
        return (
            <React.Fragment>
                <div className="homepage">
                    <KQHSTitle/>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);