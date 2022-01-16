import React from 'react'
import '../styles/logoNav.css'

const LogoMenu = () => {

    return (

        <div className="logo-menu">
            <div className = "main-nav">
                <ul className = "main-nav__list">
                    <li className = "main-nav__item">
                        <a className="main-nav__link">
                            <span>Главная</span>
                            <div className="slow-underline"></div>
                        </a>
                    </li>
                    <li className = "main-nav__item">
                        <a className="main-nav__link">
                            <span>Подарки</span>
                            <div className="slow-underline"></div>
                        </a>
                    </li>
                    <li className = "main-nav__item">
                        <a className="main-nav__link">
                            <span>Бонсай</span>
                            <div className="slow-underline"></div>
                        </a>
                    </li>
                    <li className = "main-nav__item">
                        <a className="main-nav__link">
                            <span>Цветы</span>
                            <div className="slow-underline"></div>
                        </a>
                    </li>
                    <li className = "main-nav__item">
                        <a className="main-nav__link">
                            <span>О нас</span>
                            <div className="slow-underline"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className = "main-logo">
                <a className="site-logo">LEMON FOREST</a>
                <span className="site-slogan">go to forest and find some mushrooms and berries</span>
            </div>
            <div className = "detailed-nav">
                <span>yerg erygehr iuhiur lei re</span>
            </div>
        </div>
    )
}

export default LogoMenu