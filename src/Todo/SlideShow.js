import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    "./images/sky5.jpg",
    '../images/sky6.jpg',
    '../images/sky.jpg'
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
}

const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
            <div className="each-fade">
                <div className="image-container">
                    <img src={require("../images/clouds-1.jpg")} />
                </div>
                <h2>First Slide</h2>
            </div>
            <div className="each-fade">
                <div className="image-container" style={{backgroundSize: "cover" , width:"1200px"}}>
                    <img src={require("../images/sky1.jpg")} />
                </div>
                <h2>Second Slide</h2>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={require("../images/sky4.jpg")} />
                </div>
                <h2>Third Slide</h2>
            </div>
        </Fade>
    )
}

export default Slideshow