import React from "react";
import {Link} from "react-router-dom";


function Footer(props) {

    let socialNetworkMarcup = props.socialNetworks.map((socialNetwork,index)=>{
        return(
                <a href={socialNetwork.href} className={socialNetwork.className} key={index}></a>

            // <Link to={link.link}>
            //     <li className="nav-item" key={index}>
            //         <a className="nav-link active" >{link.label}</a>
            //     </li>
            // </Link>
        )

    })
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row" >
                        {socialNetworkMarcup}
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default Footer