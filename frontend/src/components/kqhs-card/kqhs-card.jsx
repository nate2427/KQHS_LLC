import React from "react";
import KQHSImageCard from '../kqhs-image-card/kqhs-image-card';
import termiteImg from "../../static/images/dirtywall.JPG";
import roachImg from "../../static/images/roaches1.jpg";
import possumImg from "../../static/images/possuminthetree.jpg";
import bunnyHoleImg from "../../static/images/bunnyhole1.JPG";


const content = {
    imageCards: [
        {
            serviceType: "Termite Detail",
            description: "",
            buttonTxt: "Free Bed Bug Treatment Quote",
            imgUrl: termiteImg
        },
        {
            serviceType: "Bed Bug Detail",
            description: "",
            buttonTxt: "Free Bed Bug Removal Quote",
            imgUrl: roachImg
        },
        {
            serviceType: "Insect and Vertebrae Animal Control/Exclusion",
            description: "",
            buttonTxt: "Free Insect Control Quote",
            imgUrl: bunnyHoleImg
        },
        {
            serviceType: "Pest Control, Quality and Sanitation Consulting Detail",
            description: "",
            buttonTxt: "Click For Consulting",
            imgUrl: possumImg
        }
    ]
}


class KQHSCard extends React.Component {

    render = () => {



        return (
            <React.Fragment>
                {
                    content.imageCards.map((element, i) => {
                        return <KQHSImageCard
                            img={element.imgUrl}
                            serviceType={element.serviceType}
                            buttonTxt={element.buttonTxt}
                            description={content.imageCards[0].description}
                            reversed={i % 2 === 0 ? true : false}
                        />
                    })
                }
            </React.Fragment>
        );
    }
}


export default KQHSCard;