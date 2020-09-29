import React from 'react';
import './Footer.scss';

const Footer = ({ logos, links }) => {    
    const logosImages = logos.map((logoItem, index) => (
        <img key={index} src={logoItem} alt="partner-logo" className="footer-partners-item" />
    ));
    const navItems = links.map((link, index) => (
        <a key={index} href={link.href} className="footer-navigation-item">
            {link.title}
        </a>
    ));

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-partners">{logosImages}</div>
                <div className="footer-inner">
                    <div className="footer-navigation">{navItems}</div>
                    <div className="footer-author">
                        Сайт был разработан<span> Сергеем Ильковым</span> в учебных целях, в рамках
                        образовательной программы IT nation. Дизайн сайта создан
                        <span> Валерией Бубырь.</span>
                    </div>
                </div>
                <div className="footer-detailis">
                    <p className="footer-detailis-text">2020, Все права защищены</p>
                    <div className="footer-detailis-privacy">
                        <input type="checkbox" id="privacy" name="privacy"/>
                        <label htmlFor="privacy">Согласие на обработку персональных данных</label>
                    </div>                    
                    <a className="footer-detailis-link" href="#">
                    Политика конфиденциальности
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

