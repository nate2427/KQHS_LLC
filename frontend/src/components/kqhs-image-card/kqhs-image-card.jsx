import React from 'react';
import { Link } from 'react-router-dom';
import './kqhs-image-card.css';
import KQHSInfoCard from '../kqhs-info-card/kqhs-info-card';

class KQHSImageCard extends React.Component {

          
    render = () => {
        return (
            <React.Fragment>
                <div className={"flex-container " + (this.props.reversed ? 'reversed' : 'not-reversed')}>
                    <div className="kqhs-info-card-comp">
                        <div className="kqhs-image-card-comp-wrapper">
                            <KQHSInfoCard
                                buttonTxt={this.props.buttonTxt}
                                description={this.props.description}
                                serviceType={this.props.serviceType}
                                className='info-card'
                            />
                        </div>
                    </div>
                    <div className="kqhs-image-comp">
                        <Link to='/#' className='img-link'>
                            <img src={this.props.img} className='kqhs-img-in-card' alt='pic of pest'/>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default KQHSImageCard;