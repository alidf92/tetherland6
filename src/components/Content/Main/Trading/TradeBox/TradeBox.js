import React, { useState, useContext, useEffect } from "react";
import "./TradeBox.css";
import { BuyPriceContext, SellPriceContext } from "./../../../Content";
import SendCode from "./SendCode";
import SellForm from "./SellForm";
import PN from "persian-number"

function TradeBox() {
    const [status, setStatus] = useState(true);
    const sellPrice = useContext(SellPriceContext);
    const buyPrice = useContext(BuyPriceContext);
    const [input, setInput] = useState({ give: "", take: "" });
    const [inputSell, setSellInput] = useState({ give: "", take: "" });
    const [error, setError] = useState(false);
    const [sellError, setSellError] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showSellForm, setShowSellForm] = useState(true);
    const [showBtn, setShowBtn] = useState(true);
    const [showChangePrice, setShowChangePrice] = useState(false);
    const [minMaxLimit, setMinMaxLimit] = useState(false);

    const errorHandler = (e) => { 
        if (input.give > 50000000 || input.take < 100) {
            setError(true);
            setMinMaxLimit(true);
        } else {
            setError(false);
            setShowForm(false);
        }
    };
    const sellErrorHandler = (e) => {
        if (inputSell.give > 50000 || inputSell.give < 100) {
            setSellError(true);

        } else {
            setSellError(false);
            setShowSellForm(false);
            setShowBtn(false);
        }
    };

    const onlyNumber = (e) => {
        if (!e.target.value === /^[0-9\b]+$/.test(e.target.value)) {
            setInput({ give: "", take: "" });
        }
    };
    const sellOnlyNumber = (e) => {
        if (!e.target.value === /^[0-9\b]+$/.test(e.target.value)) {
            setSellInput({ give: "", take: "" });
        }
    };

    const updateInputG = (e) =>
        setInput({
            give: e.target.value,
            take: (e.target.value / sellPrice).toFixed(2),
        });

    const updateInputT = (e) =>
        setInput({
            give: (e.target.value * sellPrice).toFixed(2),
            take: e.target.value,
        });

    const updateSellInputG = (e) =>
        setSellInput({
            give: e.target.value,
            take: (e.target.value * buyPrice).toFixed(2),
        });

    const updateSellInputT = (e) =>
        setSellInput({
            give: (e.target.value / buyPrice).toFixed(2),
            take: e.target.value,
        });
    const showChangePriceHandler = (e) => {
        setShowChangePrice(true);
    };

    return (
        <>
            {showForm ? (
                <div className="trade-box-me">
                    {showBtn ? (
                        <div className="trade-pos-me">
                            <div className="trade-box-header-me">
                                <div className="trade-flex-me">
                                    <div className="trade-grid-me">
                                        <span
                                            className={`buy-sell-btn-me ${
                                                status ? "active-me" : ""
                                            }`}
                                            onClick={() => setStatus(true)}
                                        >
                                            <p className="btn-text-me">
                                                خرید تتر از ما
                                            </p>
                                        </span>
                                        <span
                                            className={`buy-sell-btn-me ${
                                                !status ? "active-me" : ""
                                            }`}
                                            onClick={() => setStatus(false)}
                                        >
                                            <p className="btn-text-me">
                                                فروش تتر به ما
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    <div>
                        <div className="input-box-me">
                            <div style={{ height: "360px" }}>
                                {status ? (
                                    <>
                                        <div className="price-box-2-me">
                                            <p className="p-text-2-me">
                                                قیمت فروش تتر:
                                            </p>
                                            <span className="span-price-me">
                                                {PN.convertEnToPe(PN.sliceNumber(buyPrice))}
                                            </span>
                                            <span className="toman-me">
                                                {" "}
                                                تومان{" "}
                                            </span>
                                        </div>
                                        <div className="give-take-me">
                                            <span className="give-r-me">
                                                می‌دهید
                                            </span>
                                            <div className="input-b-me">
                                                <input
                                                    className={`input-me inp-before-1-me ${
                                                        error ? "has-error" : ""
                                                    }`}
                                                    value={input.give}
                                                    onChange={updateInputG}
                                                    onClick={
                                                        showChangePriceHandler
                                                    }
                                                    onKeyUp={onlyNumber}
                                                    type="text"
                                                    inputMode="numeric"
                                                    placeholder="مبلغ مورد نظر را وارد نمایید"
                                                />
                                                <p className="input-toman-me">
                                                    تومان
                                                </p>
                                            </div>
                                        </div>
                                        <div className="give-take-me m-b-me">
                                            <span className="take-g-me">
                                                دریافت می‌کنید
                                            </span>
                                            <div className="input-b-me">
                                                <input
                                                    className={`input-me inp-before-1-me ${
                                                        error ? "has-error" : ""
                                                    }`}
                                                    value={input.take}
                                                    onChange={updateInputT}
                                                    onClick={
                                                        showChangePriceHandler
                                                    }
                                                    onKeyUp={onlyNumber}
                                                    type="text"
                                                    inputMode="numeric"
                                                    placeholder="تعداد تتر مورد نظر را وارد کنید    "
                                                ></input>
                                                <p className="input-toman-me">
                                                    تتر
                                                </p>
                                                <span
                                                    className={` ${
                                                        showChangePrice
                                                            ? "dis-block"
                                                            : "dis-none"
                                                    }`}
                                                >
                                                    <p>
                                                        مقدار دقیق تتر دریافتی
                                                        با توجه به قیمت لحظه‌ای
                                                        تتر محاسبه می‌گردد.
                                                        بنابراین بعد از طی
                                                        مراحل، ممکن است این
                                                        مقدار به میزان ناچیزی
                                                        بیشتر و یا کمتر شود.
                                                    </p>
                                                </span>
                                                <p
                                                    className={` ${
                                                        minMaxLimit
                                                            ? "dis-block-2"
                                                            : "dis-none-2"
                                                    }`}
                                                >
                                                    مقدار تتر درخواستی باید از
                                                    50,000,000 تومان کمتر و
                                                    تعداد از 100 واحد بیشتر باشد
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : showSellForm ? (
                                    <>
                                        <div className="price-box-2-me">
                                            <p className="p-text-2-me">
                                                قیمت خرید تتر:
                                            </p>
                                            <span className="span-price-me">
                                                {PN.convertEnToPe(PN.sliceNumber(buyPrice))}
                                            </span>
                                            <span className="toman-me">
                                                {" "}
                                                تومان{" "}
                                            </span>
                                        </div>
                                        <div className="give-take-me">
                                            <span className="give-r-me">
                                                می‌دهید
                                            </span>
                                            <div className="input-b-me">
                                                <input
                                                    type="text"
                                                    value={inputSell.give}
                                                    onChange={updateSellInputG}
                                                    onKeyUp={sellOnlyNumber}
                                                    inputMode="numeric"
                                                    placeholder="تعداد تتر مورد نظر را وارد کنید"
                                                    className={`input-me inp-before-1-me ${
                                                        sellError
                                                            ? "has-error"
                                                            : ""
                                                    }`}
                                                />

                                                <p className="input-toman-me">
                                                    {" "}
                                                    تتر{" "}
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="give-take-me m-b-me">
                                            <span className="take-g-me">
                                                دریافت می‌کنید
                                            </span>
                                            <div className="input-b-me">
                                                <input
                                                    type="text"
                                                    value={inputSell.take}
                                                    onChange={updateSellInputT}
                                                    onKeyUp={sellOnlyNumber}
                                                    inputMode="numeric"
                                                    placeholder="مبلغ مورد نظر را وارد نمایید"
                                                    className="input-me inp-before-1-me"
                                                ></input>
                                                <p className="input-toman-me">
                                                    تومان
                                                </p>
                                                <span
                                                    className={` ${
                                                        sellError
                                                            ? "dis-block-2"
                                                            : "dis-none"
                                                    }`}
                                                >
                                                    <p >تعداد تتر باید بین 100 تا 50,000 باشد!
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <SellForm />
                                )}
                            </div>
                            {status ? (
                                <div
                                    className="btn-success-me"
                                    onClick={errorHandler}
                                >
                                    مرحله بعد
                                </div>
                            ) : (
                                showBtn ?
                                <div
                                    className="btn-success-me"
                                    onClick={sellErrorHandler}
                                >
                                    مرحله بعد
                                </div>
                                : ""
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <SendCode />
            )}
        </>
    );
}

export default TradeBox;
