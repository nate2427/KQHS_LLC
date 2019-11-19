
import dirtyWall from "./static/images/dirtywall.JPG";
import roaches from "./static/images/roaches1.jpg";
import roachChart from "./static/images/roachchart.JPG";
import bagOfBunnies from "./static/images/bunniestonbags1.jpg";
import bunnyHole from "./static/images/bunnyhole1.JPG";
import possum from "./static/images/possuminthetree.jpg";
import mosquito from "./static/images/mosquito1.jpg";
import spider1 from "./static/images/spider1.jpg";
import spider2 from "./static/images/spider2.jpg";
import bee from "./static/images/bee1.jpg";
import beeHive from "./static/images/beehive1.jpg";



export const aboutMetaData = {
    phone: "(616)-427-0752",
    email: "kqhsllc@gmail.com",
    addr: "4513 Potter Ave\nGrand Rapids, MI",
    certs: "Operations Supervisor, Quality Supervisor, Pest Control officer(7A, 7D) and Quality Analyst."

}

export const aboutData = {
    intro: `
        Please allow me to introduce myself. My name is Jimmie Kilgore Jr. owner and operator
        of KQHS LLC (Kaptain Quality Home Solutions) with a DBA of KQHS LLC Termite and
        Pest Control. We are a small locally owned termite and pest control company. KQHS
        utilizes both eco-friendly and homeostatic materials to maintain a balanced and healthy
        environment. With emphasis on the underserved population and small businesses
        throughout the greater Grand Rapids area and surrounding communities, KQHS pest
        control services not only benefits individual clients but also benefits the community and
        environment as a whole.
    `,
    exp1: `
        With extensive training in all areas of pest control, combined with over 10 years
        of practical residential and commercial buildings experience base in pest control and
        environmental management from my 13 plus years at,
    `,
    compLoco: `
        Kellogg Snacks
        3300 & 3750 Roger B. Chaffee 
        Wyoming, MI 49548
    `,
    exp2: `
        facilities with roles ranging from current Operations Supervisor, Quality Supervisor, Pest Control officer(7A, 7D) and Quality Analyst.  My pest control work consist of exclusion work corrective and preventative action plans, facility space spraying, small animal emoval, crack and crevice, sanitation etc.
    `,
    flwUp: `
        Also, as the holder of SQF (Safe Quality Food), PCQI (Preventive Controls Qualified Individual) and HACCP (Hazzard Analysis Critical Control Points) certifications under the FSMA (Food Safety Modernization Act) I am qualified to recognize food and environmental pest safety risk and establish preventative and corrective action for pest infestation control services.
    `,
    close: 'Please contact Jimmie at '

}

export const servicesData = {
    phone: "616-427-0752",
    subTitle: "We service all of the city of Grand Rapids and surrounding areas, all construction from Residential, Commercial, Industrial, Multi-Residential and Multi-family home customers.",
    services: {
        termites: {
            title: "Termites be gone!",
            mainImageUrl: dirtyWall,
            bodyTextTitle: `Termites are small insect that live in large colonies typically within a mud mound. Many feed on wood and can be highly destructive to wooden structures and trees:`,
            bodyText: `Termites cause millions of dollars in structural damages each year all over the United States, although Michigan has an annual winter season – this does not exempt property owners from termite invasion. Call today for a free quote on a guaranteed termite treatment in Grand Rapids and any of the surrounding areas. Allow KQHS LLC Termite and Pest Control to provide you with around the helm termite protection.`,
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
        bedbug: {
            title: "Those Cozy Bed Bugs!",
            mainImageUrl: roaches,
            bodyTextTitle: `Bed bugs are a bloodsucking parasite of birds and mammals:`,
            bodyText: `After feeding, bed bugs move to secluded places and hide for roughly 5-10 days. During this time, they do not feed but instead digest their meal, mate and lay eggs.
                        They can then lay dormant without feeding from 6 months up to a year. If plagued by a bed bug infestation, do not go at it alone; instead call KQHS LLC Termite and Pest Control. Allow our licensed pest professionals who are knowledgeable in the habits and life cycle of bed bugs, to identify and recommend an effective course of treatment.`,
            categories: [ 
                "Bed Bug Treatment Control Plan"
            ],
            imgList: [
                roachChart
            ]
        },
        qualityprograms: {
            title: "Insect and Vertebrae Animal Control & Exclusion",
            mainImageUrl: bagOfBunnies,
            bodyTextTitle: `A pest is a nuisance or unwanted organism (animal/insect) which may cause damage to a human occupied dwelling:`,
            bodyText: `Believe it or not, all animal and insect life have an essential part to play in what we at KQHS LLC call the “Big Circle”. As the human population has grown and expanded into new frontiers, we often neglect the thought that life was present all around our now occupied areas. Due to this occupation, animal and insect life are often disrupted and or ousted from its original habitat. We must be ever vigilante to maintain our facilities structure, access points and waste, in order for our circle companions to find other suitable homes.  `,
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
        pestcontrol: {
            title: 'Pest Control, Quality and Sanitation Consulting Detail',
            mainImageUrl: mosquito,
            bodyTextTitle: `Quality to provide a product and/or service that meets and/or exceeds costumer expectations:`,
            bodyText: `Most establishments have great fundamental practices in place, which they may desire to go to the next level with new developing governmental requiements – whether needing a temporary clean out or documented mitigation. That starts with written implementation and verification of 
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
    }
}

