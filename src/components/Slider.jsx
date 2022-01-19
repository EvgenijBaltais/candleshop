import React, {useState, useEffect} from "react";
import '../styles/mainSlider.css'

import Glide from '@glidejs/glide'

import slider_pic_1 from '../images/1.jpg'
import slider_pic_2 from '../images/2.jpg'

const Slider = () => {

    const slides = [1,2,3]
    const time = 3000
    const [activeIndex, setActiveIndex] = useState(0)

    let sliderScript  = {

        slides: [1,2,3],
        time: 3000,
        autoPlay: 1,
        arrows: 1,
        numbers: 1,
        arrowClick() {


        },
        autoPlayLogic() {

            
        },
        
        init() {

            console.log(111)

            if (!document.getElementById('slider')) return false

            console.log(222)
        }
    }

    sliderScript.init()

   /* useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex(current => {

                const res = current === slides.length - 1 ? 0 : current + 1
                return res
            })
        }, time)
        return () => clearInterval() 
    }, [])*/

    return (

        <div className = "main-slider">
            <div className = "slider slider-pics" id = "slider">

                {/*
                    slides.map((item, index) => 
                        <div className = {[index == activeIndex ? 'slider-pic active-slide' : 'slider-pic']} key = {index}></div>
                    )
                */}

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