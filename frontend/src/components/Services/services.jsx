import React from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import { servicesData } from "../../data";

import './services.css';

class Services extends React.Component {
    

    render = () => {
        const { match: { params } } = this.props;

        const content = servicesData.services[params.serviceId];
        console.log(content);

        return (
            <React.Fragment>
                <div className="servicepage">
                    <ServiceTitleComp
                        title={content.title}
                        phone={servicesData.phone}
                        subtitle={servicesData.subTitle}
                    />
                    <div className="service-hero flexing">
                        <Image  src={content.mainImageUrl} fluid />
                    </div>
                    <ServiceDetails
                        bodyTextTitle={content.bodyTextTitle}
                        bodyText={content.bodyText}
                        categories={content.categories}
                    />
                </div>
            </React.Fragment>
        );

    }
}

function ServiceTitleComp(props) {
    return (
        <div className="title-comp-wrpr flexing">
            <div className='service-title-comp'>
                <h1 className='service-title yellow-color'>{props.title}</h1>
                <h3 className='grey-color service-phone'>
                    <a className='ref' href={'tel:'+props.phone}>
                        {props.phone}
                    </a>
                </h3>
                <p className='service-subtitle grey-color'>
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}

function ServiceDetails(props) {
    return (
        <div className='details-comp-wrpr'>
            <div className='service-details-comp flexing'>
                <p className='service-details yellow-color big-text'>
                    {props.bodyTextTitle}
                </p>
                <p className='service-details yellow-color'>
                    <br/>
                    {props.bodyText}
                </p>
                <div className="service-lst">
                    <ServiceTable
                        categories={props.categories}
                    />
                </div>
            </div>
        </div>
    )
}


function ServiceTable(props) {
    return (
        <div>
            <Table  responsive='md' >
                <thead>
                    <tr>
                        <th className='services-table-hding grey-color'>Services</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map((category) => {
                            return(
                                <tr>
                                    <td className='grey-color category-name'>{category}</td>
                                </tr>
                            )}
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}




export default Services;