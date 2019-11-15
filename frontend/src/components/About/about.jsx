import React, { Component, Fragment } from 'react'
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


import bizCard from "../../static/images/KQHSBusinessCard/KQHSBusinessCard.jpg";
import { aboutData as data } from "../../data";


import './about.css';



export default class About extends Component {
    render() {
        return (
            <Fragment>
               <div className="aboutpage">
                   <div className="about-hero-cntr flexing">
                        <Image  src={bizCard} className='about-hero-img-banner' alt='hero banner of the business card' fluid />
                   </div>
                   <div className="about-img-card flexing">
                        <div className="lft-cnt half">
                            <AboutMetaData />
                        </div>
                        <div className="right-cnt half">

                        </div>
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
                        <th className='kqhs-about-th grey-color'>Jim Kilgore</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className='grey-color kqhs-addy'><FontAwesomeIcon icon={faMapMarkerAlt}/>{" Address:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='grey-color'>{data.addr}</td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                             <td className='grey-color kqhs-addy'><FontAwesomeIcon icon={faEnvelope}/>{" Email:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='grey-color'>{data.email}</td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className='grey-color kqhs-addy'><FontAwesomeIcon icon={faMobileAlt}/> {" Phone:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='grey-color'>{data.phone}</td>
                        </div>
                    </tr>
                    <tr className='flexing about-rw-info'>
                        <div className="half rw-lft">
                            <td className='grey-color kqhs-addy'><FontAwesomeIcon icon={faAngleDoubleDown}/>  {" Certification:"}</td>
                        </div>
                        <div className="half rw-rht">
                            <td className='grey-color'>{data.certs}</td>
                        </div>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}
