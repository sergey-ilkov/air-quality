import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './HeroBlock.scss';


const HeroBlock = ({ title, links, logos, arrow }) => {
    const [isClickBtn, setClickBtn] = useState(false);

    const clickBurger = () => {
        isClickBtn ? setClickBtn(false) : setClickBtn(true);
    }
    const closeBtn = () => {
        isClickBtn ? setClickBtn(false) : setClickBtn(true);            
    }

    const logosImages = logos.map((logoItem, index) => (
        <img key={index} src={logoItem} alt="partner-logo" className="hero-partners-item" />
    ));
    const navItems = links.map((link, index) => (
        <a key={index} href={link.href} className="hero-navigation-item">
            {link.title}
        </a>
    ));
    const menuLink = links.map((link, index) => (
        <a key={index} href={link.href} className="hero-menu-link-item" onClick={closeBtn}>
            {link.title}
        </a>
    ));
    const arrowBtn = arrow.map((link, i) => (<img key={i} src={link.imgUrl} alt="arrow"/>));
   

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-burger-inner">
                    <div className="hero-burger-box" onClick={clickBurger}>
                        <div className="hero-burger-box-icon" />
                    </div>
                </div>
                <div className="hero-menu-inner"
                    style={
                        isClickBtn ? { display: `block` } : { display: `none` }}>
                    <div className="hero-menu-button" onClick={closeBtn}>
                        &times;
                    </div>
                    <nav className="hero-menu-links">{menuLink}</nav>
                    <p className="hero-menu-text">2020, Все права защищены</p>
                    <p className="hero-menu-text">
                        Согласие на обработку персональных данных<br />
                        Политика конфиденциальности
                    </p>

                </div>
                <div className="hero-partners">{logosImages}</div>
                <nav className="hero-navigation">{navItems}</nav>
                <h1 className="hero-title">{title}</h1>
                <a href="#index" className="hero-link">
                    Отследить
                </a>
               <div className="hero-arrow">{arrowBtn}</div>               
            </div>
        </section>
    );
};

export default HeroBlock;
