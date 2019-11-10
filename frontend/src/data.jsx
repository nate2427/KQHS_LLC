
import dirtyWall from "./static/image/dirtywall.jpg";
import roaches from "./static/image/roaches1.jpg";
import roachChart from "./static/image/roachchart.JPG";
import bagOfBunnies from "./static/image/bunniestonbags1.jpg";
import bunnyHole from "./static/image/bunnyhole1.JPG";
import possum from "./static/image/possuminthetree.jpg";
import mosquito from "./static/image/mosquito1.jpg";
import spider1 from "./static/image/spider1.jpg";
import spider2 from "./static/image/spider2.jpg";
import bee from "./static/image/bee1.jpg";
import beeHive from "./static/image/beehive1.jpg";



export const data = {

}

export const servicesData = {
    phone: "",
    subTitle: "",
    services: [
        {
            title: "Termites be gone!",
            mainImageUrl: dirtyWall,
            bodyText: `Termites are small insect that live in large colonies typically within a mud mound. Many feed on wood and can be highly destructive to wooden structures and trees:
            
            
            Termites cause millions of dollars in structural damages each year all over the United States, although Michigan has an annual winter season – this does not exempt property owners from termite invasion. Call today for a free quote on a guaranteed termite treatment in Grand Rapids and any of the surrounding areas. Allow KQHS LLC Termite and Pest Control to provide you with around the helm termite protection.`,
            categories: [ 
                "Comprehensive Termite Inspection",
                "Comprehensive Wood destroying organism Inspection",
                "Thermal Imagery",
                "Full Facility Layout Analysis",
                "Moisture Detection Analysis",
                "Comprehensive Treatment Plan"
            ],
            imgList: [

            ]
        },
        {
            title: "Those Cozy Bed Bugs!",
            mainImageUrl: roaches,
            bodyText: `Bed bugs are a bloodsucking parasite of birds and mammals:


            After feeding, bed bugs move to secluded places and hide for roughly 5-10 days. During this time, they do not feed but instead digest their meal, mate and lay eggs.
            
            They can then lay dormant without feeding from 6 months up to a year. If plagued by a bed bug infestation, do not go at it alone; instead call KQHS LLC Termite and Pest Control. Allow our licensed pest professionals who are knowledgeable in the habits and life cycle of bed bugs, to identify and recommend an effective course of treatment.`,
            categories: [ 
                "Bed Bug Treatment Control Plan"
            ],
            imgList: [
                roachChart
            ]
        },
        {
            title: "Insect and Vertebrae Animal Control & Exclusion",
            mainImageUrl: bagOfBunnies,
            bodyText: `A pest is a nuisance or unwanted organism (animal/insect) which may cause damage to a human occupied dwelling:


            Believe it or not, all animal and insect life have an essential part to play in what we at KQHS LLC call the “Big Circle”. As the human population has grown and expanded into new frontiers, we often neglect the thought that life was present all around our now occupied areas. Due to this occupation, animal and insect life are often disrupted and or ousted from its original habitat. We must be ever vigilante to maintain our facilities structure, access points and waste, in order for our circle companions to find other suitable homes.  `,
            categories: [ 
                "Ant Control",
                "Bee & Wasp Control",
                "Birds & Bats Control",
                "Cockroach Control",
                "Flea & Tick Control",
                "Mosquito Control",
                "Opossum Trapping & Removal",
                "Raccoon Trapping & Removal",
                "Rodent Control",
                "Skunk Trapping & Removal",
                "Small Animal Control",
                "Spider Control",
                "Squirrel Removal",
                "Termite Control"
            ],
            imgList: [
                bunnyHole, possum
            ]
        },
        {
            title: 'Pest Control, Quality and Sanitation Consulting Detail',
            mainImageUrl: mosquito,
            bodyText: `Quality to provide a product and/or service that meets and/or exceeds costumer expectations:


            Most establishments have great fundamental practices in place, which they may desire to go to the next level with new developing governmental requirements – whether needing a temporary clean out or documented mitigation. That starts with written implementation and verification of 
            
            
            practices, allow KQHS LLC to guide you to a proven and healthier facility environment.`,
            categories: [ 
                "Drain Management services cleaning and maintenance",
                "IPM Program implementation and Maintenance",
                "Quality & Food Safety/ HACCP Plan Consulting",
                "Pest Control Consulting",
                "Sanitation Consulting"
            ],
            imgList: [
                spider1, 
                spider2, 
                bee, 
                beeHive
            ]
        }
    ]
}

