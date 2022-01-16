import React from "react";
import '../styles/topStripe.css'

const TopStripe = () => {

    return (
        <div className = "top-stripe">
            <div className="top-email">
                <span className = "top-stripe__span">test@test.ru</span>
            </div>
            <div className="top-info">
                <span className = "top-stripe__span">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
            </div>
            <div className="top-phone">
                <a className = "top-stripe__link" href = "tel:+79999999999">7 (999) 999-99-99</a>
            </div>
        </div>
    )
}

export default TopStripe