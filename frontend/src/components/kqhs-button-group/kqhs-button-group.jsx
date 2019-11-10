import React from 'react'
import { Link } from 'react-router-dom';



import './kqhs-button-group.css';
class KQHSButtonGroup extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="bottom-page-content-buttons full-width flexing-around">
                    {
                        this.props.buttonNames.map((name) => {
                            return(
                                <div className='button-wrapper'>
                                    <Link to='/#' className='red-color'>
                                        {name}
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