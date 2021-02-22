import React, { useState } from "react";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Header.css";
import logo from "./../../images/logo.svg";
import slogo from "./../../images/smallLogo.svg";
import ScrollDialog from "./HowToTradingPop";
import ContactUs from "./../../pages/ContactUs";

function Header() {
    const [navStatus, setNavStatus] = useState(false);
    const changeHandler = (e) => {
        setNavStatus(!navStatus);
    };

    return (
        <>

                    <nav className="navbar-me">
                        <div className="navbar-pos-me">
                            <div className="navbar-s-b-me">
                                <img
                                    className="navbar-logo-me"
                                    src={logo}
                                    alt="Logo"
                                />
                                <div className="navbar-items-me">
                                    <div className="item-s-b-me">
                                        <p className="p-a-me">
                                            <Link to="/">صفحه اصلی</Link>
                                        </p>
                                        <p className="p-a-me">
                                            <ScrollDialog />
                                        </p>
                                        <p className="p-a-me">
                                            <a
                                                className="p-a-me"
                                                href="https://blog.tetherland.net"
                                                target="_blank"
                                            >
                                                بلاگ
                                            </a>
                                        </p>
                                        <p className="p-a-me">
                                            <a href="#application">
                                                اپلیکیشن تترلند
                                            </a>
                                        </p>
                                        <p className="p-a-me">
                                            <Link to="/contactus">
                                                تماس با ما
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {navStatus ? (
                                <div className="dropdown-menu">
                                    <div className="navbar-menu-header">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            color="#fff"
                                            className="close-icone"
                                            onClick={changeHandler}
                                            class="close__Close-sc-6vln39-0 kDaggE"
                                        >
                                            <g
                                                id="close"
                                                transform="translate(-61 -306)"
                                            >
                                                <g
                                                    id="Group_4895"
                                                    transform="translate(60.157 308.657)"
                                                >
                                                    <path
                                                        id="Line_89"
                                                        d="M0 0L22.627 0"
                                                        fill="none"
                                                        stroke="#fff"
                                                        stroke-width="2px"
                                                        transform="rotate(45 .8 6.518)"
                                                    ></path>
                                                    <path
                                                        id="Line_316"
                                                        d="M0 0L22.627 0"
                                                        fill="none"
                                                        stroke="#fff"
                                                        stroke-width="2px"
                                                        transform="rotate(-45 23.356 2.825)"
                                                    ></path>
                                                </g>
                                                <path
                                                    id="Rectangle_4886"
                                                    fill="none"
                                                    d="M0 0H24V24H0z"
                                                    transform="translate(61 306)"
                                                ></path>
                                            </g>
                                        </svg>
                                        <img
                                            className="navbar-logo-me-2"
                                            src={slogo}
                                            alt="Logo"
                                        />
                                    </div>
                                    <div className="menu">
                                        <div className="drawer">
                                            <div className="menu-item">
                                                <Link to="/">صفحه اصلی</Link>
                                            </div>
                                            <div className="menu-item">
                                                <p className="p-a-me">
                                                    <ScrollDialog />
                                                </p>
                                            </div>
                                            <div className="menu-item">
                                                <a
                                                    className="p-a-me"
                                                    href="https://blog.tetherland.net"
                                                    target="_blank"
                                                >
                                                    بلاگ
                                                </a>
                                            </div>
                                            <div className="menu-item">
                                                <a href="#application">
                                                    اپلیکیشن تترلند
                                                </a>
                                            </div>
                                            <div className="menu-item">
                                                <Link to="/contactus">
                                                    تماس با ما
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="nav-icon-me">
                                    <img
                                        className="navbar-logo-me-2"
                                        src={slogo}
                                        alt="sLogo"
                                    />
                                    <div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="menu"
                                                width="24"
                                                height="16"
                                                viewBox="0 0 24 16"
                                                className="dd-icon-me"
                                                onClick={changeHandler}
                                            >
                                                <rect
                                                    id="Rectangle_5260"
                                                    width="24"
                                                    height="2"
                                                    fill="#B1B3B8"
                                                    rx=".5"
                                                ></rect>
                                                <rect
                                                    id="Rectangle_5261"
                                                    width="16"
                                                    height="2"
                                                    fill="#B1B3B8"
                                                    rx=".5"
                                                    transform="translate(0 7)"
                                                ></rect>
                                                <rect
                                                    id="Rectangle_5262"
                                                    width="8"
                                                    height="2"
                                                    fill="#B1B3B8"
                                                    rx=".5"
                                                    transform="translate(0 14)"
                                                ></rect>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>

        </>
    );
}

export default Header;
