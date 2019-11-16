import React from 'react';
import { Link } from 'react-router-dom';

import './kqhs-info-card.css';

class KQHSInfoCard extends React.Component {


    render = () => {



        return (
            <React.Fragment>
                <div className="kqhs-info-card-comp">
                    <h1 onClick={() => window.scrollTo(0,0)} className='kqhs-h2-bg'>
                        <Link to={'/services/'+ this.props.url}>
                            <u>
                                {this.props.serviceType}
                            </u>
                        </Link>
                    </h1>
                    <p className='kqhs-card-info-desc'>
                        <strong>
                            {this.props.description}
                        </strong>
                    </p>
                    <Link onClick={() => window.scrollTo(0,0)} to={'/services/'+ this.props.url} className='kqhs-info-card-button'>
                        {this.props.buttonTxt}
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default KQHSInfoCard;