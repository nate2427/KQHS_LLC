import  React  from "react";

import './kqhs-title.css';

const content = {
    title: "BED BUGS, Termites, Quality and Sanitation - Is our life.",
    altSubTitleText: "Allow the Kaptain to provide you around the helm protection.",
    phone: "(616) 427-0752",

}

class KQHSTitle extends React.Component {

    render = () => {


        return (
            <React.Fragment>
                <div className="title-comp">
                    <h1 className='title txt'>{content.title}</h1>
                    <h1 className='sub-title txt'>{content.altSubTitleText}</h1>
                    <h4 className='phn-nmbr txt'>{content.phone}</h4>
                </div>
            </React.Fragment>
        ); 
    }
}

export default KQHSTitle;