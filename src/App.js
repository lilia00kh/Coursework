import React, {Component} from 'react';
import MainMenu from "./Todo/MainMenu";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import AboutAirport from "./pages/AboutAirport";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Footer from "./Todo/Footer";
import All from "./pages/All";
import ReactVirtualizedTable from "./Todo/ReactVirtualizedTable";
import FloatingActionButtonZoom from "./Todo/Floating"
import MultilineTextFields from "./Todo/MultilineTextFields"



function App() {

    const style = {
        padding:'10px',
        margin:'10px'
    }
    let links = [
        { label:'Головна сторінка', link:'/'},
        { label:'Про аеропорт', link:'/aboutAirport'},
        { label:'Послуги', link:'/services'},
        { label:'Контакти', link:'/contacts'},
        { label:'Все', link:'/all'},
    ]
    let socialNetworks = [
        {className:'fa fa-facebook',href:'https://www.facebook.com/lvivinternationalairport/'},
        {className:'fa fa-twitter',href:'https://twitter.com/LwoAero'},
        {className:'fa fa-youtube',href:'https://www.youtube.com/channel/UCbL5VEu1TQvhlYsVmiIhyPA'},
        {className:'fa fa-instagram',href:''}
    ]
    let images=[
        {src:require('./images/logo-1.png')},
        {src:require('./images/logo-2.png')},
        {src:require('./images/logo-3.png')},
        {src:require('./images/aci.png')},
    ]

    let contacts=[
        {contact:"Довідка:",number:"+38 (032) 229 81 12"},
        {contact:"Приймальня аеропорту:",number:"+38 (032) 229 82 16"},
        {contact:"Каса аеропорту:",number:"+38 (032) 229 80 73"},
        {contact:"Медичний пункт:",number:"+38 (032) 229 82 65"},
        {contact:"Служка розшуку багажу:",number:"+38 (032) 229 81 12"},
        {contact:"Довідка:",number:"+38 (032) 229 86 37"},
        {contact:"Бізнес-зал:",number:"+38 (032) 229 86 37"},
        {contact:"Менеджер із зв`язків з громадськістю:",number:"+38 (032) 229 86 37"},
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
                      <Route path="/all" component={All}/>
                  </Switch>
              </div>
              <footer>
                  <Footer socialNetworks={socialNetworks} images={images} contacts={contacts}/>
              </footer>
          </div>
      </Router>
  );
}

const Home = ()=>(
    <div>
        <div className="row">
            <div className="col table">
                <FloatingActionButtonZoom />
                <ReactVirtualizedTable/>
            </div>
            <div className="col">
                <img src={require("./images/sky.jpg")}/>
            </div>
        </div>
        <div className="row">
            <div className="col table">
                <MultilineTextFields/>
            </div>
            {/*<div className="col">*/}
            {/*    <img src={require("./images/sky.jpg")}/>*/}
            {/*</div>*/}
        </div>
    </div>
)

export default App;
