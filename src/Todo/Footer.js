import React from "react";
import {Link} from "react-router-dom";


function Footer(props) {

    let socialNetworkMarcup = props.socialNetworks.map((socialNetwork,index)=>{
        return(
            <a href={socialNetwork.href} className={socialNetwork.className} key={index}></a>
        )

    })
    let imagesMarcup = props.images.map((image,index)=>{
        return(
            <img src={image.src} key={index}/>

        )

    })
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row" >
                        {socialNetworkMarcup}
                    </div>
                    <div className="row">
                        {imagesMarcup}
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default Footer