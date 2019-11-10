import React from 'react';
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";


import './kqhs-contact-section.css';

class KQHSContactSection extends React.Component {



    render = () => {


        return (
            <React.Fragment>
                <div className="bottom-page-content-policy">
                    <div className="red-border">
                        <h3 className='cnt-title'>CONTACT US TODAY:</h3>

                        <Form className='full-width'>
                            {/* first name */}
                            <Form.Group >
                                <Form.Control type="text" placeholder="First name" />
                            </Form.Group>
                            {/* last name */}
                            <Form.Group >
                                <Form.Control type="text" placeholder="Last name" />
                            </Form.Group>
                            {/* phone number */}
                            <Form.Group >
                                <Form.Control type="text" placeholder="Phone number" />
                            </Form.Group>
                            {/* email */}
                            <Form.Group >
                                <Form.Control type="text" placeholder="Email" />
                            </Form.Group>
                            {/* message */}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3" placeholder='Message'/>
                            </Form.Group>
                            
                            <div className='flexing'>
                                <Button type="submit" className='center red no-brdr rm-hover'>
                                    Submit
                                </Button>
                            </div>
                            
                        </Form>

                        <div class='full-width privacy'>
                            <h2 className='privacy-policy'>Privacy Policy:</h2>
                            <p className='policy-txt'>
                                Any information shared or inspection findings with KQHS LLC Termite and Pest Control (“Pest
                                Control Company”) is strictly confidential and will be used solely for the purpose of communication
                                between the person sharing the info (The Customer/Potential Customer) and The Pest Control Company
                                MDA Licensed Pest Professional. Information sharing outside of network is strictly prohibited. Kaptains’
                                Promise!
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default KQHSContactSection;