import React from "react";
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import WifiIcon from '@material-ui/icons/Wifi';

export default function Icons (){
    return(
        <div>
            <FlightLandIcon fontSize="large"/>
            <FlightTakeoffIcon  style={{ fontSize: 40 }}/>
            <RestaurantIcon/>
            <WifiIcon/>
            <LocationOnIcon/>
            <LocalPhoneIcon/>
            <HotelIcon/>
            <LocalBarIcon/>
            <LocalDiningIcon/>
        </div>
    );}
