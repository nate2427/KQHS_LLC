import React from 'react';
import  Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KQHSTitle from '../kqhs-navbar/kqhs-title/kqhs-title';

import './navigation.css'
import KQHSNavbar from '../kqhs-navbar/kqhs-navbar';

class Navigation extends React.Component {


    render = () => {



        return (
            <React.Fragment>
                <Container
                    fluid={true}
                >
                    <div className='kqhs-navbar'>
                        {/* title */}
                        <Row>
                            <Col md='12' className='kqhs-nav-hdr-title'>
                                <KQHSTitle/>
                            </Col>
                        </Row>
                        {/* nav links */}
                        <Row>
                            <Col md='12' className='kqhs-nav-cntr'>
                                <div className='kqhs-nav-wrpr'>
                                    <KQHSNavbar/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default Navigation;
