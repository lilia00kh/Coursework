import React, {Component} from 'react';
import MainMenu from "./Todo/MainMenu";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import AboutAirport from "./pages/AboutAirport";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Footer from "./Todo/Footer";


function App() {

    let links = [
        { label:'Головна сторінка', link:'/'},
        { label:'Про аеропорт', link:'/aboutAirport'},
        { label:'Послуги', link:'/services'},
        { label:'Контакти', link:'/contacts'}
    ]
    let socialNetworks = [
        {className:'fa fa-facebook',href:'https://www.facebook.com/lvivinternationalairport/'},
        {className:'fa fa-twitter',href:'https://twitter.com/LwoAero'},
        {className:'fa fa-youtube',href:'https://www.youtube.com/channel/UCbL5VEu1TQvhlYsVmiIhyPA'},
        {className:'fa fa-instagram',href:''}
    ]

  return (
      <Router>
          <div className="wrapper">
              <MainMenu  links={links}/>
              <div className="bodyContent">
                  <Switch>
                      <Route path="/" exact component = {Home}/>
                      <Route path="/aboutAirport" component = {AboutAirport}/>
                      <Route path="/services" component = {Services}/>
                      <Route path="/contacts" component = {Contacts}/>
                  </Switch>
              </div>
              <footer>
                  <Footer socialNetworks={socialNetworks}/>
              </footer>
          </div>
      </Router>
  );
}

const Home = ()=>(
    <div>
        <h1>hhhhh</h1>
    </div>
)

export default App;
