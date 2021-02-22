import React, { useState } from "react";
import { Link } from "react-router-dom";
import TradeBox from "./TradeBox";

function SendCode() {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [backPage, setBackPage] = useState(false);
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const errorHandler = (e) => {
        if (
            !input === /^(\+98|0098|98|0)?9\d{9}$/.test(input) ||
            input === ""
        ) {
            setError(true);
        } else {
            setError(false);
        }
    };
    const backHandler = (e) => {
        setBackPage(true);
    };
    console.log(error);
    return (
        <>
            {!backPage ? (
                <div className="trade-box-me">
                    <div className="trade-pos-me">
                        <div className="trade-box-header-me">
                            <div className="trade-flex-me">
                                <div className="trade-grid-me">
                                    <span className="buy-sell-btn-me">
                                        <p className="btn-text-me">
                                            خرید تتر از ما
                                        </p>
                                    </span>
                                    <span className="buy-sell-btn-me">
                                        <p className="btn-text-me">
                                            فروش تتر به ما
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="sendcode-with">
                            <div style={{ height: "360px" }}>
                                <div className="back-btn-con">
                                    <div className="back-btn">
                                        <span
                                            onClick={backHandler}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {" "}
                                            مرحله قبل{" "}
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6.69"
                                            height="11.98"
                                            viewBox="0 0 6.69 11.98"
                                            class="arrowLeft__Arrowleft-xhx2gy-0 dOAlls mr-1 pointer"
                                        >
                                            <path
                                                fill="none"
                                                stroke="#121314"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.4px"
                                                d="M0 0l5 5 5-5"
                                                transform="rotate(90 2.355 3.345)"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="login-span">
                                    {" "}
                                    ورود به سامانه{" "}
                                </div>
                                <div className="give-take-me">
                                    <span className="give-b-me">
                                        شماره همراه
                                    </span>
                                    <div className="input-b-me">
                                        <input
                                            className={`input-me inp-before-1-me ${
                                                error ? "has-error" : ""
                                            }`}
                                            onChange={changeHandler}
                                            value={input}
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="شماره همراه خود را وارد نمایید"
                                        />
                                    </div>
                                </div>
                                <div className="not-auth">
                                    <span>
                                        <Link to="/register">
                                            اگر احراز هویت نکرده‌اید از اینجا
                                            احراز هویت نمایید
                                        </Link>
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="6.69"
                                        height="11.98"
                                        viewBox="0 0 6.69 11.98"
                                        class="arrowLeft__Arrowleft-xhx2gy-0 dOAlls"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#121314"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.4px"
                                            d="M0 0l5 5 5-5"
                                            transform="rotate(90 2.355 3.345)"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className="btn-success-me"
                                onClick={errorHandler}
                            >
                                {" "}
                                ارسال کد تایید{" "}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <TradeBox />
            )}
        </>
    );
}

export default SendCode;
