import React from "react";
import '../sass/index.css'
import VIP from "./VIP";
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import Transport from "./Transport";
import Information from "./Information";
function Services() {
return(
    <Router>
    <div className="row container">
        <div className="row mainPart">
            <div className="col">
                <div className="row">
                    <ul>
                        <li>
                            <Link to={"/services/information"}>Загальна інформація</Link>
                        </li>
                        <li>
                            <Link to={"/services/vip"}>VIP</Link>
                        </li>
                        <li>
                            <Link to={"/services/transport"}>Транспорт</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/services/vip" component = {VIP}/>
                        <Route path="/services/transport" exact component = {Transport}/>
                        <Route path="/services/information" component = {Information}/>
                    </Switch>
                </div>
            </div>
        </div>
    </div>
    </Router>

        )
}

export default Services