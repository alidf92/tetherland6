import React, { useContext } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TradeSafe.css";
import arrow from "./../../../../../../images/arrow.png";
import { BuyPriceContext, SellPriceContext } from "./../../../../Content";
import { Link } from "react-router-dom";
import ScrollDialog from "../../../../../Header/HowToTradingPop";
import PN from "persian-number"


function TradeSafe() {
    const sellPrice = useContext(SellPriceContext);
    const buyPrice = useContext(BuyPriceContext);
    return (
        <>
            <span className="typo-span-me">
                با تترلند در چند دقیقه
                <span className="typo-effect-me">
                    {
                        <ReactTypingEffect
                            eraseSpeed="50"
                            eraseDelay="850"
                            typingDelay="50"
                            text={[" مطمئن ", " آســان "]}
                            cursorRenderer={(cursor) => <span>{cursor}</span>}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <span>
                                        {text.split("").map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    style={{
                                                        color: "#21b386",
                                                    }}
                                                >
                                                    {char}
                                                </span>
                                            );
                                        })}
                                    </span>
                                );
                            }}
                        />
                    }
                </span>
                <br></br>
                <span>تتر خرید و فروش کنید</span>
            </span>
            <div className="learn-trade-me">
                <div className="decor">
                <ScrollDialog />                    
                </div>
                <img src={arrow} alt="arrow" className="arrow-me" />
            </div>
            <div className="tether-price-me">
                <div className="price-me">
                    <p className="p-text-me"> قیمت فروش تتر </p>
                    <p>
                        <span className="price-bs-me"> {PN.convertEnToPe(PN.sliceNumber(sellPrice))} </span>
                        <span style={{ fontSize: "16px" }}> تومان </span>
                    </p>
                </div>
                <div className="price-me">
                    <p className="p-text-me">قیمت خرید تتر</p>
                    <p>
                        <span className="price-bs-me">{PN.convertEnToPe(PN.sliceNumber(buyPrice))}</span>
                        <span style={{ fontSize: "16px" }}> تومان </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default TradeSafe;
