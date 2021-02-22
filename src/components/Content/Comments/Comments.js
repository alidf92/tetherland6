import React from "react";
import "./Comments.css";
import comment from "./../../../images/comment.png";
import biglogo from "./../../../images/big-logo.png";
import Slider from "./Slider";

function Comments() {
    return (
        <div className="com-main-me">
            <div className="com-body-me">
                <span className="user-com-me">نظر کاربران تترلند</span>
                <div className="comment-card-me">
                    <div>
                        <Slider />
                    </div>
                    <img src={comment} alt="comment" className="com-img-2-me" />
                    <img src={biglogo} alt="biglogo" className="big-logo-me" />
                </div>
            </div>
        </div>
    );
}

export default Comments;
