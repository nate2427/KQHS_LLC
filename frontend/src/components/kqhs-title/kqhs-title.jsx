import  React  from "react";

import './kqhs-title.css';

class KQHSTitle extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            title: "BED BUGS, TERMITES & WEEDS – OH NO!",
            altSubTitleText: "PEST CONTROL SERVICES IN GLENDALE AZ",
            phone: "623-388-0303"
        }
    }

    render = () => {


        return (
            <React.Fragment>
                <div className="title-comp">
                    <h1 className='title txt'>{this.state.title}</h1>
                    <h1 className='sub-title txt'>{this.state.altSubTitleText}</h1>
                    <h4 className='phn-nmbr txt'>{this.state.phone}</h4>
                </div>
            </React.Fragment>
        ); 
    }
}

export default KQHSTitle;