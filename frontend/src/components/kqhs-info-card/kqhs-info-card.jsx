import React from 'react';
import { Link } from 'react-router-dom';

import './kqhs-info-card.css';

class KQHSInfoCard extends React.Component {


    render = () => {



        return (
            <React.Fragment>
                <div className="kqhs-info-card-comp">
                    <h1 className='kqhs-h2-bg'>
                        <Link to='/#'>
                            <u>
                                {this.props.serviceType}
                            </u>
                        </Link>
                    </h1>
                    <p className='kqhs-card-info-desc'>
                        <strong>
                        the United States, although Michigan has an annual winter season – this does not exempt property owners from termite invasion. Call today for a free quote on a guaranteed termite treatment in Grand Rapids and any of the surrounding
                        </strong>
                    </p>
                    <Link to='/#' className='kqhs-info-card-button'>
                        {this.props.buttonTxt}
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default KQHSInfoCard;