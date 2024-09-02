import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from '../../assets/images/logo-removebg-preview .png';
import './Nav.scss';

const Nav = () => {
    const [active, setActive] = useState(false);
    const { t, i18n } = useTranslation();
    // const navigate = useNavigate();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        changeLanguage('ru');
    }, []);

    const links = useMemo(() => [
        { url: "/", name: t("home") },
        { url: "/products_page", name: t("products") },
        { url: "/category_page", name: t("categories") },
        { url: "/news_page ", name: t("news") },
        { url: "footer", name: t("contacts") },
    ], [t]);

    const [activeLang, setActiveLang] = useState('ru'); // Dastlab "en" aktiv bo'ladi

    const changeLanguage2 = (lang) => {
        setActiveLang(lang);
    };

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav_box">
                        <a href="#!" className="nav_logo">
                            <img src={logo} alt="Logo" />
                        </a>
                        <button className="nav_menu" onClick={() => setActive(true)}>
                            <GiHamburgerMenu />
                        </button>
                        <ul className={`nav_list ${active && 'active'}`}>
                            <button className="nav_close" onClick={() => setActive(false)}>
                                <MdClose />
                            </button>
                            {links.map(link => (
                                <li key={link.url}>
                                    {(link.url === "about" || link.url === "footer") ? (
                                        <ScrollLink
                                            className="nav_link"
                                            to={link.url}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                            onClick={() => setActive(false)}
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    ) : (
                                        <NavLink className="nav_link" to={link.url} onClick={() => setActive(false)}>
                                            {link.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                            <div className="nav_lang">
                                <p
                                    className={`lang ${activeLang === 'ru' ? 'active' : ''}`}
                                    onClick={() => changeLanguage2('ru')}
                                >
                                    RU
                                </p>
                                <p
                                    className={`lang ${activeLang === 'en' ? 'active' : ''}`}
                                    onClick={() => changeLanguage2('en')}
                                >
                                    EN
                                </p>
                                <p
                                    className={`lang ${activeLang === 'uz' ? 'active' : ''}`}
                                    onClick={() => changeLanguage2('uz')}
                                >
                                    UZ
                                </p>

                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
