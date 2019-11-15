import React from 'react'
import { Link } from 'react-router-dom';



import './kqhs-button-group.css';
class KQHSButtonGroup extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="bottom-page-content-buttons full-width flexing-around">
                    {
                        this.props.buttonObjects.map((butObj) => {
                            return(
                                <div className='button-wrapper'>
                                    <Link onClick={() => window.scrollTo(0, 0)} to={'/services'+butObj.link} className='red-color'>
                                        {butObj.name}
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default KQHSButtonGroup;