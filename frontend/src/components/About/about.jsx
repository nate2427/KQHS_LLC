import React, { Component, Fragment } from 'react'
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


import bizCard from "../../static/images/KQHSBusinessCard/KQHSBusinessCard.jpg";
import famPic from "../../static/images/jim-moony.jpg";
import { aboutData as data } from "../../data";


import './about.css';



export default class About extends Component {
    render() {
        return (
            <Fragment>
               <div className="aboutpage">
                   <h1 className='kqhs-about-title grey-color'>
                       Who is KQHS?
                   </h1>
                   <div className="about-img-card-wrpr flexing">
                    <div className="about-img-card flexing">
                            <div className="lft-cnt half">
                                <AboutMetaData />
                            </div>
                            <div className="right-cnt half">
                                <Image src={famPic} className='kqhs-fam-pic' alt='Me and Wife' />
                            </div>
                    </div>
                   </div>
                   <div className="about-hero-cntr flexing">
                        <Image  src={bizCard} className='about-hero-img-banner' alt='hero banner of the business card' fluid />
                   </div>
                </div>
            </Fragment>
        )
    }
}


function AboutMetaData(props) {
    return (
        <Fragment>
            <Table  responsive='md' >
                <thead>
                    <tr className='about-hdr-rw flexing'>
                        <th className='kqhs-about-th'>Jim Kilgore</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className=' kqhs-about-icon'><FontAwesomeIcon icon={faMapMarkerAlt}/>{" Address:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='kqhs-about-val'><a href='https://www.google.com/maps/place/4513+Potter+Ave+SE,+Kentwood,+MI+49548/@42.881429,-85.6525197,17z/data=!3m1!4b1!4m5!3m4!1s0x8819b3a3b3c3877f:0xd71a88e06c6b06fb!8m2!3d42.881429!4d-85.650331'>{data.addr}</a></td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                             <td className=' kqhs-about-icon'><FontAwesomeIcon icon={faEnvelope}/>{" Email:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='kqhs-about-val'><a href='mailto:kqhsllc@gmail.com?Subject=Interested%20Client'>{data.email}</a></td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className=' kqhs-about-icon'><FontAwesomeIcon icon={faMobileAlt}/> {" Phone:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='kqhs-about-val'><a href='tel:6164270752'>{data.phone}</a></td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className=' kqhs-about-icon'><FontAwesomeIcon icon={faAngleDoubleDown}/>  {" Certification:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='kqhs-about-val'>{data.certs}</td>
                        </div>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}
