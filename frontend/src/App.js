import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Container  from "react-bootstrap/Container";
import './App.css';
import BottomNavBar from './components/bottom-navbar/bottom-navbar';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import Navigation from './components/Navigation/navigation';



class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
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
                  <Route path="/services" component={Services} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              
            </div>
          </Container>
          <BottomNavBar/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;