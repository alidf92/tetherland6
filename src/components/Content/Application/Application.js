import React from "react";
import "./Application.css";
import google from "./../../../images/google.png";
import myket from "./../../../images/myket.png";
import tether from "./../../../images/logo48.png";
import dlapp from "./../../../images/dl_app.png";

function Application() {
    return (
        <div className="app-con-me" id="application">
            <div className="app-grid-me">
                <div className="app-dl-me">
                    <span className="app-dl-head-me">دانلود اپلیکیشن تترلند</span>
                    <span className="app-dl-text-me">
                        با اپلیکیشن تترلند به آسانی و در هر شرایطی، فقط با چند
                        کلیک با سرعت بالا به انجام معاملات خود بپردازید. صرافی
                        امن شما، همیشه همراه شما.
                    </span>
                    <div className="dl-box-me">
                        <div className="dll-android-me">نسخه اندروید</div>
                        <a
                            href="https://play.google.com/store/apps/details?id=land.tether.tetherland"
                            target="_blank"
                            className="play-store-me"
                        >
                            <div className="text-align-me">
                                <img
                                    src={google}
                                    alt="play store"
                                    className="play-icon-me"
                                />
                            </div>
                            <div>
                                <span className="span-1-me">دانلود از</span>
                                <span className="span-2-me">Google Play</span>
                            </div>
                        </a>
                        <a
                            href="https://myket.ir/app/land.tether.tetherland"
                            target="_blank"
                            className="link-me"
                        >
                            <div className="text-align-me">
                                <img
                                    src={myket}
                                    alt="myket"
                                    className="myket-icon-me"
                                />
                            </div>
                            <div>
                                <span className="span-b-1-me">دانلود از</span>
                                <span className="span-b-2-me">مایکت</span>
                            </div>
                        </a>
                        <a
                            href="https://cdn.tetherland.net/app/tetherland.apk"
                            target="_blank"
                            className="link-me"
                        >
                            <div className="text-align-me">
                                <img
                                    src={tether}
                                    alt="myket"
                                    className="myket-icon-me"
                                />
                            </div>
                            <div>
                                <span className="span-b-1-me">دانلود از</span>
                                <span className="span-b-2-me">لینک مستقیم</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="dl-img-me">
                    <img src={dlapp} alt="dl-image" className="dl-image-me" />
                </div>
            </div>
        </div>
    );
}

export default Application;
