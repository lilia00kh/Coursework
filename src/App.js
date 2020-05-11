import React, {Component} from 'react';
import MainMenu from "./Todo/MainMenu";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import AboutAirport from "./pages/AboutAirport";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";


function App() {

    let links = [
        { label:'Головна сторінка', link:'/'},
        { label:'Про аеропорт', link:'/aboutAirport'},
        { label:'Послуги', link:'/services'},
        { label:'Контакти', link:'/contacts'}
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
                  <div className="container">
                  </div>
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
