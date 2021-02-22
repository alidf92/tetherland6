import React from "react";
import "./Card.css";
import cardone from "./../../../../../images/card-1.png";
import cardtwo from "./../../../../../images/card-2.png";
import cardthree from "./../../../../../images/card-3.png";

function CardOne() {
    return (
        <>
            <div className="card-1-me card-1-up">
                <img src={cardone} alt="card" />
                <span className="card-span-me">معامله سریع و آسان</span>
                <span className="card-span-2-me">
                    با تترلند به آسانی و در کمترین زمان ممکن معاملات خود را
                    انجام دهید.{" "}
                </span>
            </div>
            <div className="card-1-me">
                <img src={cardtwo} alt="card" />
                <span className="card-span-me">بهترین نرخ تبادل</span>
                <span className="card-span-2-me">
                    بهترین نرخ تبادل را همواره از ما بخواهید.
                </span>
            </div>

            <div className="card-1-me">
                <img src={cardthree} alt="card" />
                <span className="card-span-me">بهترین نرخ تبادل</span>
                <span className="card-span-2-me">
                    بهترین نرخ تبادل را همواره از ما بخواهید.
                </span>
            </div>
        </>
    );
}

export default CardOne;
