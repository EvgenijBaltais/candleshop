import React, {useState, useEffect} from "react";
import '../styles/mainSlider.css'

import slider_pic_1 from '../images/1.jpg'
import slider_pic_2 from '../images/2.jpg'

const Slider = () => {

    const slides = [1, 2, 3]
    const time = 2000
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex(current => {

                const res = current === slides.length - 1 ? 0 : current + 1
                return res
            })
        }, time)
        return () => clearInterval() 
    }, [])

    return (

        <div className = "main-slider">
            <div className = "slider-pics">

                {
                    slides.map(number => 
                        <div className = 'slider-pic' key = {number}></div>
                    )
                }

            </div>
            <div className="left-arrow"></div>
            <div className="right-arrow"></div>
        </div>
    )
}

export default Slider

/*
<img src={slider_pic_1} className="slider-pic" alt="Свечи ручной работы" />
<img src={slider_pic_2} className="slider-pic" alt="Мыло ручной работы" />
*/