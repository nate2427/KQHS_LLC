import React from 'react';
import  Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import KQHSNavbar from "./components/kqhs-navbar/kqhs-navbar";
import KQHSTitle from './components/kqhs-navbar/kqhs-title/kqhs-title';



class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* nav bar */}
        <Container
          fluid={true}
          className='kqhs-navbar'
        >
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
        </Container>
        <Container 
          fluid={false}
          className="outer-wrpr"
        >
          <Row>
            <Col md='12'>
              
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      
    );
  }
}

export default App;




{/* <ul id='kqhs-nav-items'>
  <div className='nav-items-wrpr'>
    <li className='kqhs-nav-item'><a class="active" href="#home">Home</a></li>
    <li className='kqhs-nav-item'><a href="#news">Services</a></li>
    <li className='kqhs-nav-item'><a href="#contact">Contact</a></li>
  </div>
</ul> */}