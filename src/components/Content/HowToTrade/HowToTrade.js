import React, { useState } from "react";
import image from "./../../../images/trade.png";
import circle from "./../../../images/circle.png";
import "./HowToTrade.css";

function HowToTrade() {
    const [status, setStatus] = useState(false);
    const activeHandler = (e) => {
        e.preventDefault();
        setStatus(true);
    };
    const deActiveHandler = (e) => {
        e.preventDefault();
        setStatus(false);
    };
    return (
        <div className="how-to-trading-me">
            <div className="how-to-trading-2-me">
                <div className="space-between-me">
                    <div>
                        <img className="img-trade" src={image} alt="trade" />
                    </div>
                    <div className="how-to-trade-me">
                        <span className="how-to-buy-me">
                            چگونه در تترلند خرید و فروش کنیم؟
                        </span>
                        <div>
                            <div className="spacebetween-me">
                                <div className="buy-or-sell-me">
                                    <div className="btn-box-me">
                                        <span
                                            onClick={deActiveHandler}
                                            className={`sell-btn-me ${
                                                !status ? "active-me" : ""
                                            }`}
                                        >
                                            فروش تتر به صرافی تترلند
                                        </span>
                                        <span
                                            onClick={activeHandler}
                                            className={`sell-btn-me ${
                                                status ? "active-me" : ""
                                            }`}
                                        >
                                            خرید تتر از صرافی تترلند
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {!status ? (
                                    <div className="steps-me">
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                1. ورود تعداد تتر مدنظر برای
                                                فروش
                                            </span>
                                            <span className="step-text-me">
                                                مقدار تتری که قصد دارید بفروشید
                                                را وارد نمایید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                2. ورود اطلاعات شخص و بانکی
                                            </span>
                                            <span className="step-text-me">
                                                اطلاعات شخصی و بانکی خود را برای
                                                واریز وجه نقد وارد نمایید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                3. وارد کردن لینک تراکنش (txid)
                                            </span>
                                            <span className="step-text-me">
                                                تتر را به کیف پول تترلند واریز
                                                نمایید و لینک تراکنش یا همان
                                                txid را در بخش مشخص شده وارد
                                                کنید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                4. دریافت وجه نقد
                                            </span>
                                            <span className="step-text-me">
                                                پس از واریز تتر، وجه نقد شما در
                                                اسرع وقت به حساب بانکی شما واریز
                                                می‌گردد
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="steps-me">
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                1. احراز هویت
                                            </span>
                                            <span className="step-text-me">
                                                با ورود اطلاعات و ارسال تصویر
                                                مدارک شناسایی شما احراز هویت
                                                نمایید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                2. ورود شماره همراه و شماره کارت
                                            </span>
                                            <span className="step-text-me">
                                                شماره همراه خود را تأیید و شماره
                                                کارتی که میخواهید با آن خرید
                                                انجام دهید را وارد نمایید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                3. پرداخت مبلغ مورد نظر
                                            </span>
                                            <span className="step-text-me">
                                                از طریق درگاه پرداخت امن بانک
                                                سامان مبلغ مورد نظر را واریز
                                                نمایید
                                            </span>
                                        </div>
                                        <div>
                                            <span className="step-me">
                                                <img
                                                    src={circle}
                                                    className="img-step-me"
                                                    alt="circle"
                                                />
                                                4. واریز تتر به کیف پول شما
                                            </span>
                                            <span className="step-text-me">
                                                در انتها آدرس کیف پول خود را
                                                وارد نمایید. تترهای شما در اسرع
                                                وقت به کیف پول شما واریز می‌شود.
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToTrade;
