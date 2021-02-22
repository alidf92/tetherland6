import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ContactUs.css";

function ContactUs() {
    return (
        <>
            <Header />
            <div className="contact-us-main">
                <div>
                    <span className="contact-ways">
                        راه‌های ارتباطی با تترلند
                    </span>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="contact-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20.612"
                                    height="20.612"
                                    viewBox="0 0 20.612 20.612"
                                >
                                    <path 
                                        fill="none"
                                        stroke="#919aab"
                                        stroke-miterlimit="10"
                                        d="M8.859 89.225l3.8-2.136a1.138 1.138 0 0 1 1.363.187l1.334 1.334a1.137 1.137 0 0 0 1.481.113 24.674 24.674 0 0 0 2.716-2.354 24.683 24.683 0 0 0 2.354-2.716 1.137 1.137 0 0 0-.113-1.481l-1.334-1.334a1.138 1.138 0 0 1-.187-1.363l2.136-3.8a1.139 1.139 0 0 1 1.807-.2l1.407 1.407c1.833 1.833-.164 6.8-4.46 11.1s-9.266 6.293-11.1 4.46l-1.408-1.41a1.139 1.139 0 0 1 .204-1.807z"
                                        transform="rotate(-5.13 -833.31 125.744)"
                                    ></path>
                                </svg>
                                <span className="ways-text">
                                    شماره تماس پشتیبانی
                                </span>
                            </div>
                            <span className="contact-span">+۹۸۲۱ ۲۸۴۲ ۴۰</span>
                        </div>
                        <div className="contact-item">
                            <div className="contact-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <g>
                                        <path
                                            fill="#94a3b4"
                                            d="M332.8 394.761a9.5 9.5 0 1 0-9.5 9.5 9.542 9.542 0 0 0 4.258-1.008l-.7-1.219a8.1 8.1 0 1 1 4.534-7.274v1.095a1.8 1.8 0 0 1-.422 1.3 1.841 1.841 0 0 1-1.256.661l-.111.007a1.819 1.819 0 0 1-1.831-1.809v-4.475h-1.392l-.157-.138a4.474 4.474 0 1 0 .108 6.62l.429-.4.376.453a3.186 3.186 0 0 0 2.448 1.157 3.258 3.258 0 0 0 3.216-3.294zm-9.5 3.066a3.066 3.066 0 1 1 3.066-3.066 3.07 3.07 0 0 1-3.066 3.066z"
                                            transform="translate(-1368 -467) translate(1057.194 83.74)"
                                        ></path>
                                        <path
                                            fill="none"
                                            d="M0 0H24V24H0z"
                                            transform="translate(-1368 -467) translate(1368 467)"
                                        ></path>
                                    </g>
                                </svg>
                                <span className="ways-text">آدرس ایمیل</span>
                            </div>
                            <span className="contact-span">
                                support@tetherland.net
                            </span>
                        </div>
                        <div className="contact-item">
                            <div className="contact-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24.209"
                                    height="22.916"
                                    viewBox="0 0 24.209 22.916"
                                >
                                    <g
                                        id="social_media"
                                        transform="translate(.101 .101)"
                                    >
                                        <path
                                            id="Path_21559"
                                            d="M15.29 38.991l-2.36 4.089a1.875 1.875 0 1 1-3.248-1.875l1.406-2.436-1.218-.7a.469.469 0 0 1-.172-.64l.61-1.056-8.978-1.764A1.406 1.406 0 0 1 .19 32.5l1.558-2.7-1-1.508a.469.469 0 0 1-.01-.492l.938-1.624a.47.47 0 0 1 .434-.233l1.8.108 1.729-3a1.394 1.394 0 0 1 1.2-.7h.018A1.394 1.394 0 0 1 8.044 23l6.123 7.8 3.981 2.3a3.281 3.281 0 0 1-2.858 5.888zm-4.8 2.683a.938.938 0 0 0 1.624.937l2.344-4.06-1.624-.938-2.344 4.06zm1.063-3.717l.469-.812-.812-.469-.469.812zM2.342 26.9l-.648 1.122.578.875 1.117-1.934zm4.918-3.382a.469.469 0 0 0-.806.009L1 32.971a.469.469 0 0 0 .394.7 1.721 1.721 0 0 1 .257.044l5.767-9.989c-.121-.156-.137-.171-.161-.21zm.784 1l-5.418 9.39 8.178 1.6 2.487-4.307zm10.494 12.598a2.342 2.342 0 0 0-.858-3.2l-3.654-2.109-2.344 4.059 3.654 2.11a2.347 2.347 0 0 0 3.2-.858zm0 0"
                                            fill="#94a3b4"
                                            stroke="#94a3b4"
                                            stroke-width=".2px"
                                            transform="translate(4.21 -21.308)"
                                        ></path>
                                        <path
                                            id="Path_21561"
                                            d="M436.972 42.54l2.612 1.453a.469.469 0 1 1-.456.819l-2.612-1.453a.469.469 0 0 1 .456-.819zm0 0"
                                            fill="#94a3b4"
                                            stroke="#94a3b4"
                                            stroke-width=".2px"
                                            transform="translate(-436.275 -40.49)"
                                        ></path>
                                        <path
                                            id="Path_21562"
                                            d="M440.411 137.122l1.811-.485a.469.469 0 1 1 .243.905l-1.811.485a.469.469 0 1 1-.242-.905zm0 0"
                                            fill="#94a3b4"
                                            stroke="#94a3b4"
                                            stroke-width=".2px"
                                            transform="translate(-439.44 -130.217)"
                                        ></path>
                                        <path
                                            id="Path_21563"
                                            d="M384.414.348l.486 1.811a.469.469 0 1 1-.906.243l-.486-1.811a.469.469 0 1 1 .905-.243zm0 0"
                                            fill="#94a3b4"
                                            stroke="#94a3b4"
                                            stroke-width=".2px"
                                            transform="translate(-378.892)"
                                        ></path>
                                    </g>
                                </svg>
                                <span className="ways-text">
                                    شبکه‌های اجتماعی
                                </span>
                            </div>
                            <div className="social-icons">
                                <a
                                    className="contact-btn"
                                    href="https://linkedin.com/company/tetherland"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="14.333"
                                        viewBox="0 0 15 14.333"
                                    >
                                        <path
                                            fill="#9aa4b7"
                                            d="M15 18.346v5.546h-3.215v-5.175c0-1.3-.465-2.187-1.629-2.187a1.759 1.759 0 0 0-1.65 1.176 2.2 2.2 0 0 0-.107.784v5.4H5.184s.043-8.763 0-9.671H8.4v1.371l-.021.031H8.4v-.031a3.193 3.193 0 0 1 2.9-1.6c2.114.003 3.7 1.385 3.7 4.356zM1.82 9.558a1.676 1.676 0 1 0-.043 3.342H1.8a1.676 1.676 0 1 0 .02-3.342zM.191 23.891h3.215V14.22H.191z"
                                            transform="translate(0 -9.558)"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className="contact-btn"
                                    href="https://t.me/tetherland"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13.931"
                                        viewBox="0 0 16 13.931"
                                    >
                                        <path
                                            fill="#9aa4b7"
                                            d="M.283 26.08l3.687 1.376 1.43 4.589a.434.434 0 0 0 .689.208l2.055-1.675a.613.613 0 0 1 .747-.021l3.707 2.691a.434.434 0 0 0 .681-.263l2.715-13.061a.435.435 0 0 0-.582-.494L.278 25.267a.435.435 0 0 0 .005.813zm4.884.644l7.205-4.438a.126.126 0 0 1 .152.2l-5.947 5.526a1.233 1.233 0 0 0-.382.738l-.2 1.5a.186.186 0 0 1-.364.026L4.85 27.54a.725.725 0 0 1 .316-.816z"
                                            transform="translate(0 -19.401)"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className="contact-btn"
                                    href="https://instagram.com/tetherland"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                    >
                                        <g
                                            id="instagram"
                                            transform="translate(-561 -4621)"
                                        >
                                            <g
                                                id="instagram-2"
                                                transform="translate(561 4621)"
                                            >
                                                <path
                                                    id="instagram-3"
                                                    d="M11.584 0H4.415A4.42 4.42 0 0 0 0 4.415v7.169A4.42 4.42 0 0 0 4.415 16h7.169A4.42 4.42 0 0 0 16 11.585v-7.17A4.42 4.42 0 0 0 11.584 0zm3 11.585a3 3 0 0 1-3 3H4.415a3 3 0 0 1-3-3v-7.17a3 3 0 0 1 3-3h7.169a3 3 0 0 1 3 3v7.169z"
                                                    fill="#9aa4b7"
                                                ></path>
                                                <path
                                                    id="Path_8741"
                                                    d="M45.091 40.97a4.123 4.123 0 1 0 4.123 4.123 4.127 4.127 0 0 0-4.123-4.123zm0 6.826a2.7 2.7 0 1 1 2.7-2.7 2.706 2.706 0 0 1-2.7 2.704z"
                                                    fill="#9aa4b7"
                                                    transform="translate(-37.091 -37.092)"
                                                ></path>
                                                <path
                                                    id="Path_8742"
                                                    d="M119.962 28.251a1.04 1.04 0 1 0 .736.3 1.045 1.045 0 0 0-.736-.3z"
                                                    fill="#9aa4b7"
                                                    transform="translate(-107.666 -25.578)"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                                <a
                                    className="contact-btn"
                                    href="https://twitter.com/tetherland"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                    >
                                        <g>
                                            <g>
                                                <path
                                                    fill="#9aa4b7"
                                                    d="M16 49.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794A3.28 3.28 0 0 0 7.8 51.281a3.377 3.377 0 0 0 .076.748A9.284 9.284 0 0 1 1.114 48.6a3.281 3.281 0 0 0 1.008 4.384 3.239 3.239 0 0 1-1.482-.4v.036a3.3 3.3 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.591 6.591 0 0 1-4.067 1.4A6.144 6.144 0 0 1 0 59.528 9.234 9.234 0 0 0 5.032 61a9.272 9.272 0 0 0 9.336-9.334c0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 49.539z"
                                                    transform="translate(0 -48) translate(0 48) translate(0 -48)"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="for-us">برای ما بنویسید</span>
                    <div className="contact-inputs">
                        <span className="contact-input-label">
                            نام و نام خانوادگی
                            <span className="input-star">*</span>
                        </span>
                        <div style={{ position: "relative" }}>
                            <input
                                placeholder="نام و نام خانوادگی خود را وارد نمایید"
                                type="text"
                                className="contact-input"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div className="contact-inputs">
                        <span className="contact-input-label">
                            آدرس ایمیل
                            <span className="input-star">*</span>
                        </span>
                        <div style={{ position: "relative" }}>
                            <input
                                placeholder="آدرس ایمیل خود را وارد نمایید"
                                type="text"
                                className="contact-input"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div className="contact-inputs">
                        <span className="contact-input-label">
                            متن پیام
                            <span className="input-star">*</span>
                        </span>
                        <div style={{ position: "relative" }}>
                            <textarea
                                placeholder=" ... پیام خود را بنویسید"
                                type="text"
                                className="contact-input"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div className="contact-btn-2">
                    ارسال پیام
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
