import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main/Main";
import "./Content.css";
import HowToTrade from "./HowToTrade/HowToTrade";
import Application from "./Application/Application";
import Comments from "./Comments/Comments";
import News from "./News/News";

export const BuyPriceContext = React.createContext();
export const SellPriceContext = React.createContext();

function Content() {
    const [buyPrice, setBuyPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");

    useEffect(() => {
        axios
            .get("https://tetherland.net/data/api/tether_price")
            .then((res) => {
                setBuyPrice(res.data.price);
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        axios
            .get("https://tetherland.net/data/api/tether_sellprice")
            .then((res) => {
                setSellPrice(res.data.price);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className="content-me">
            <BuyPriceContext.Provider value={buyPrice}>
                <SellPriceContext.Provider value={sellPrice}>
                    <Main />
                    <HowToTrade />
                    <Application />
                    <Comments />
                    <News />
                </SellPriceContext.Provider>
            </BuyPriceContext.Provider>
        </div>
    );
}

export default Content;
