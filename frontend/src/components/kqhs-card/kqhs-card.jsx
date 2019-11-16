import React from "react";
import KQHSImageCard from '../kqhs-image-card/kqhs-image-card';
import termiteImg from "../../static/images/dirtywall.JPG";
import bedBugs from "../../static/images/roachchart.JPG";
import possumImg from "../../static/images/possuminthetree.jpg";
import mosquito from "../../static/images/mosquito1.jpg";


const content = {
    imageCards: [
        {
            serviceType: "Termites",
            description: "Termites are small insect that live in large colonies typically within a mud mound. Many feed on wood and can be highly destructive to wooden structures and trees",
            buttonTxt: "Free Bed Bug Treatment Quote",
            imgUrl: termiteImg,
            url: 'termites'
        },
        {
            serviceType: "Bed Bugs",
            description: "Bed bugs are a bloodsucking parasite of birds and mammals",
            buttonTxt: "Free Bed Bug Removal Quote",
            imgUrl: bedBugs,
            url:'bedbug'
        },
        {
            serviceType: "Insect and Vertebrae Animal Control/Exclusion",
            description: "A pest is a nuisance or unwanted organism (animal/insect) which may cause damage to a human occupied dwelling",
            buttonTxt: "Free Insect Control Quote",
            imgUrl: possumImg,
            url:'pestcontrol'
        },
        {
            serviceType: "Pest Control, Quality and Sanitation Consulting Detail",
            description: "Quality to provide a product and/or service that meets and/or exceeds costumer expectations",
            buttonTxt: "Click For Consulting",
            imgUrl: mosquito,
            url:'qualityprograms'
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
                            description={element.description}
                            url={element.url}
                            reversed={i % 2 === 0 ? true : false}
                        />
                    })
                }
            </React.Fragment>
        );
    }
}


export default KQHSCard;