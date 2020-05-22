import React from 'react';
import { Fade } from 'react-slideshow-image';
import FloatingActionButtonZoom from "./Floating";

const Slideshow = () => {
    return (
        <div className="row">
            <div className="col">
                <Fade>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={require("../images/clouds-1.jpg")} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={require("../images/sky1.jpg")} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={require("../images/sky4.jpg")} />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Slideshow