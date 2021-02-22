import React, { useState } from "react";
import TradeBox from "./TradeBox";

function SellForm() {
    const [fullName, setFullName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [errorNum, setErrorNum] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [backPage, setBackPage] = useState(false);

    const changeHandlerFullName = (e) => {
        setFullName(e.target.value);
    };
    const changeHandlerNum = (e) => {
        setNumber(e.target.value);
    };
    const changeHandlerEmail = (e) => {
        setEmail(e.target.value);
    };

    const errorHandler = (e) => {
        if (
            !number === /^(\+98|0098|98|0)?9\d{9}$/.test(number) ||
            number === ""
        ) {
            setErrorNum(true);
        } else {
            setErrorNum(false);
        }
        if (
            !email === /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ||
            email === ""
        ) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    };

    const backHandler = (e) => {
        setBackPage(true);
    };
    return (
        <div>
            {!backPage ? (
                <>
                    <div className="back-btn-con-2">
                        <div className="back-btn">
                            <span
                                onClick={backHandler}
                                style={{ cursor: "pointer" }}
                            >
                                مرحله قبل
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
                    <div className="give-take-me mt-4">
                        <span className="give-b-me">نام و نام خانوادگی</span>
                        <div className="input-b-me">
                            <input
                                className="input-me inp-before-1-me"
                                onChange={changeHandlerFullName}
                                value={fullName}
                                type="text"
                                inputMode="numeric"
                                placeholder="نام و نام‌خانوادگی خود را وارد نمایید"
                            />
                        </div>
                    </div>
                    <div className="give-take-me mt-3">
                        <span className="give-b-me">شماره همراه</span>
                        <div className="input-b-me">
                            <input
                                className={`input-me inp-before-1-me ${
                                    errorNum ? "has-error" : ""
                                }`}
                                onChange={changeHandlerNum}
                                value={number}
                                type="text"
                                inputMode="numeric"
                                placeholder="شماره همراه خود را وارد نمایید"
                            />
                        </div>
                        <span
                            className={` ${
                                errorNum ? "dis-block-2" : "dis-none"
                            }`}
                        >
                            <p>شماره موبایل وارد شده اشتباه است</p>
                        </span>
                    </div>
                    <div className="give-take-me mt-3">
                        <span className="give-b-me">آدرس ایمیل</span>
                        <div className="input-b-me">
                            <input
                                className={`input-me inp-before-1-me ${
                                    errorEmail ? "has-error" : ""
                                }`}
                                onChange={changeHandlerEmail}
                                value={email}
                                type="text"
                                inputMode="numeric"
                                placeholder="ایمیل وارد شده نامعتبر است"
                            />
                        </div>
                        <span
                            className={` ${
                                errorEmail ? "dis-block-2" : "dis-none"
                            }`}
                        >
                            <p>ایمیل وارد شده نامعتبر است</p>
                        </span>
                    </div>
                    <div className="off-code">
                        <div className="off-border">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12.483"
                                height="14.181"
                                viewBox="0 0 12.483 14.181"
                                class="off-sc-1btk7cs-0 drCudE ml-1 block"
                            >
                                <path
                                    id="off"
                                    d="M-13.312-10.2a2.765,2.765,0,0,1,.806-2.047,2.865,2.865,0,0,1,2.113-.8,2.872,2.872,0,0,1,2.125.8,2.842,2.842,0,0,1,.8,2.1v.681a2.749,2.749,0,0,1-.8,2.035,2.859,2.859,0,0,1-2.109.8,2.946,2.946,0,0,1-2.105-.783,2.766,2.766,0,0,1-.83-2.113Zm1.612.736a1.511,1.511,0,0,0,.364,1.053,1.23,1.23,0,0,0,.959.4,1.209,1.209,0,0,0,.947-.4A1.579,1.579,0,0,0-9.07-9.5v-.7a1.525,1.525,0,0,0-.364-1.057,1.229,1.229,0,0,0-.963-.407,1.188,1.188,0,0,0-.951.411,1.608,1.608,0,0,0-.352,1.084Zm5.017,7.028a2.708,2.708,0,0,1,.826-2.054,2.923,2.923,0,0,1,2.1-.787,2.917,2.917,0,0,1,2.109.787A2.8,2.8,0,0,1-.83-2.371V-1.7A2.771,2.771,0,0,1-1.62.337a2.845,2.845,0,0,1-2.117.8A2.928,2.928,0,0,1-5.873.344a2.787,2.787,0,0,1-.81-2.09Zm1.612.736A1.51,1.51,0,0,0-4.7-.638a1.246,1.246,0,0,0,.963.411,1.2,1.2,0,0,0,.951-.4,1.607,1.607,0,0,0,.348-1.1v-.712A1.5,1.5,0,0,0-2.806-3.5a1.242,1.242,0,0,0-.951-.4,1.226,1.226,0,0,0-.951.4,1.577,1.577,0,0,0-.364,1.1ZM-9.9-.086l-1.19-.681,6.738-10.784,1.182.689Z"
                                    transform="translate(13.312 13.046)"
                                    fill="#0fbd81"
                                ></path>
                            </svg>
                            <p>کد تخفیف دارم</p>
                        </div>
                    </div>
                    <div className="btn-success-me" onClick={errorHandler}>
                        {" "}
                        ارسال کد تایید{" "}
                    </div>
                </>
            ) : (
                <TradeBox />
            )}
            
        </div>
    );
}

export default SellForm;
