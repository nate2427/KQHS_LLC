import React from 'react';
import { Link } from 'react-router-dom';
import  Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './kqhs-footer.css';
import KQHSTitle from '../kqhs-navbar/kqhs-title/kqhs-title';


class KQHSFooter extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container
                    fluid={true}
                    className='kqhs-footer'
                >
                    <Row>
                        <Col md={12}>
                            <div className="kqhs-footer-wrpr flexing">
                                <h3 className='kqhs-title-l1'>
                                    {/* <Link to='/#'>
                                        KQHS
                                    </Link> */}
                                    <KQHSTitle/>
                                </h3>
                                <br/>
                                <h3 className='kqhs-title-l1'>
                                    <Link to='/#'>
                                        BUGS, BED BUGS, TERMITES, WEEDS
                                    </Link>
                                </h3>
                                <br/>
                                <span className='cpy-rght'>
                                    © Copyright - 2018
                                    <br/>
                                    All Rights Reserved
                                </span>
                                <br/>
                                <Link to='/#'>
                                    <span className='mibase-sig'>
                                        Mibase, LLC
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default KQHSFooter;