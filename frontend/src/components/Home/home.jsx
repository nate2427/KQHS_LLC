import React from 'react';
import {withRouter} from 'react-router';
import KQHSTitle from '../kqhs-title/kqhs-title';

import './home.css'
import KQHSCard from '../kqhs-card/kqhs-card';

class Home extends React.Component {


    render = () => {
        return (
            <React.Fragment>
                <div className="homepage">
                    <KQHSTitle/>
                    <div className="kqhs-cards-section">
                        <KQHSCard/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);