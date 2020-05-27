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
            <img className="awards" src={image.src} key={index}/>

        )

    })
    let contactsMarcup = props.contacts.map((contact,index)=>{
        return(
            <dt>{contact.contact}</dt>

        )

    })
    let numbersMarcup = props.contacts.map((contact,index)=>{
        return(
            <dt>{contact.number}</dt>

        )

    })
    return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row" >
                        {socialNetworkMarcup}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <dl>
                                {/*<dt>Контакти</dt>*/}
                                {/*{contactsMarcup}*/}
                            </dl>
                        </div>
                        <div className="col">
                            <dl>
                                {/*<dt>Номера</dt>*/}
                                {/*{numbersMarcup}*/}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {imagesMarcup}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="row nameOfAirport">
                <strong> <p> &copy; Міжнародний аеропорт «Львів» імені Данила Галицького </p></strong>
            </div>
        </div>

    </div>
    )
}

export default Footer