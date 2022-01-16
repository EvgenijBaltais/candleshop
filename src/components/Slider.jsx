import React, {useState} from "react";
import '../styles/mainSlider.css'

import slider_pic_1 from '../images/1.jpg'
import slider_pic_2 from '../images/2.jpg'

const Slider = () => {

    const [slides, updateSlides] = useState(2)
    const [time, updateTime] = useState(2000)

    return (

        <div className = "main-slider">
            <img src={slider_pic_1} className="slider-pic" alt="Свечи ручной работы" />
            <img src={slider_pic_2} className="slider-pic" alt="Мыло ручной работы" />
        </div>
 
    )
}

export default Slider