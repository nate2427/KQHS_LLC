import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Container  from "react-bootstrap/Container";
import './App.css';
import BottomNavBar from './components/bottom-navbar/bottom-navbar';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import Navigation from './components/Navigation/navigation';
import KQHSContactSection from './components/kqhs-contact-section/kqhs-contact-section';
import KQHSMap from './components/kqhs-map/kqhs-map';
import KQHSButtonGroup from './components/kqhs-button-group/kqhs-button-group';
import KQHSFooter from './components/kqhs-footer/kqhs-footer';



class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router onUpdate={() => {
          debugger;
          window.scrollTo(0, 0)
        }}>
          {/* nav bar */}
          <Navigation/>

          {/* main content */}
          <Container 
            fluid={true}
            className='main-cnt'
          >
            <div className="outer-wrpr">
              
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services/:serviceId" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={Contact} />
              </Switch>
              <KQHSContactSection/>
              <KQHSMap/>
              <KQHSButtonGroup
                buttonNames={['Bugs', 'Bed Bugs', 'Termites', 'Weeds']}
              />
            </div>
          </Container>
          <KQHSFooter/>
          <BottomNavBar/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;