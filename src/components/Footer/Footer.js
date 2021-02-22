import React from "react";
import "./Footer.css";
import logo from "./../../images/largeLogo.svg";
import phone from "./../../images/phone.png";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className="bg-footer-me">
                <div className="footer-me">
                    <div className="intro-me">
                        <img src={logo} alt="logo" className="footer-img-me" />
                        <p className="footer-p-me">
                            در میان بازار انبوهی از ارزهای دیجیتال گوناگون، خرید
                            و فروش تتر را می‌توان انتخابی امن و مناسب برای ورود
                            به دنیای پر رمز و راز ارزهای دیجیتال دانست. تتر، به
                            عنوان یک رمزارز پایه ثابت برای شروع تجارت یکی از
                            اولین انتخاب‌های شماست. تترلند از سال ۱۳۹۶ فعالیت
                            خود را به منظور ایجاد بستری امن و مطمئن به طور
                            اختصاصی جهت مبادله تتر/ریال، برای هم‌وطنان عزیزمان
                            آغاز کرده‌ است. تیم تترلند با افتخار به عنوان
                            بزرگ‌ترین صرافی مبادله تتر/ریال در ایران، با فراهم
                            کردن بهترین نرخ مبادله در بستری امن و مطمئن، همواره
                            قدردان استقبال و همراهی مشتریان وفادار خود بوده و
                            است.
                        </p>
                    </div>
                    <div className="services-me">
                        <ul title="خدمات" className="footer-services-me">
                            <li className="footer-li-me">خرید تتر</li>
                            <li className="footer-li-me">فروش تتر</li>
                            <li className="footer-li-me">فروش تتر</li>
                            <li className="footer-li-me">تتر چیست</li>
                            <li className="footer-li-me">خرید ارز دیجیتال</li>
                            <li className="footer-li-me">سوالات متداول</li>
                        </ul>
                    </div>
                    <div className="about-me">
                        <ul title="درباره ما" className="footer-about-me">
                            <li className="footer-li-me">درباره تترلند</li>
                            <li className="footer-li-me"> شرایط و قوانین</li>
                            <a href="#" className="footer-a-me">اپلیکیشن تترلند</a>
                            <li className="footer-li-me"> ولت نارنجی</li>
                        </ul>
                        <div className="support-me">
                            <img src={phone} alt="phone"/>
                            <span className="phone-sup-me">شماره پشتیبانی</span>
                            <span className="phone-num-me">
                                <a href="tel:+9821284240">021 2842 40</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="social-me">
                    <span className="follow-us-me">ما را در شبکه‌های اجتماعی دنبال نمایید</span>
                    <div className="social-icons-me">
                        <a className="social-a-me" target="_blank" href="https://twitter.com/tetherland-me"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"><g><g><path fill="#9aa4b7" d="M16 49.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794A3.28 3.28 0 0 0 7.8 51.281a3.377 3.377 0 0 0 .076.748A9.284 9.284 0 0 1 1.114 48.6a3.281 3.281 0 0 0 1.008 4.384 3.239 3.239 0 0 1-1.482-.4v.036a3.3 3.3 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.591 6.591 0 0 1-4.067 1.4A6.144 6.144 0 0 1 0 59.528 9.234 9.234 0 0 0 5.032 61a9.272 9.272 0 0 0 9.336-9.334c0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 49.539z" transform="translate(0 -48) translate(0 48) translate(0 -48)"></path></g></g></svg></a>
                        <a className="social-a-me" target="_blank" href="https://aparat.com/tetherland"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="apparat" transform="translate(-617 -4621)"><g id="apparat-2" transform="translate(617 4621)"><path id="Subtraction_3" d="M6.99 13.967A6.986 6.986 0 0 1 2.045 2.042a7.007 7.007 0 0 1 9.889 0A6.983 6.983 0 0 1 6.99 13.967zm1.98-5.852a1.958 1.958 0 0 0-1.388.574 2.011 2.011 0 0 0-.587 1.417A1.991 1.991 0 0 0 8.976 12.1h.009a1.991 1.991 0 1 0 .009-3.982zm-5-.965a2 2 0 0 0-1.993 2 2 2 0 0 0 2 1.985 1.991 1.991 0 1 0 0-3.982zm2.982-1.01a.877.877 0 0 0-.624.266.891.891 0 0 0 .629 1.515.886.886 0 0 0 .625-.268.874.874 0 0 0 .257-.626.892.892 0 0 0-.887-.888zm3.034-3.3a1.955 1.955 0 0 0-1.4.584 1.992 1.992 0 0 0 1.422 3.4 1.99 1.99 0 1 0-.005-3.981h-.016zm-5.012-.971a1.95 1.95 0 0 0-1.4.588 1.995 1.995 0 0 0 1.419 3.395h.016a1.955 1.955 0 0 0 1.4-.586 1.994 1.994 0 0 0-1.421-3.4h-.014z" fill="#9aa4b7" transform="translate(1.012 1.017)"></path><path id="Path_8806" d="M332 52.908a.206.206 0 0 1 .175-.007c.448.119.9.231 1.343.362a2.462 2.462 0 0 1 1.721 3c-.129.527-.278 1.05-.431 1.576A7.7 7.7 0 0 0 332 52.908z" fill="#9aa4b7" transform="translate(-319.316 -50.846)"></path><path id="Path_8807" d="M242.149 327.28a18.272 18.272 0 0 1-.491 1.812 2.455 2.455 0 0 1-2.852 1.507c-.517-.125-1.03-.268-1.6-.417a7.746 7.746 0 0 0 4.943-2.902z" fill="#9aa4b7" transform="translate(-228.147 -314.665)"></path><path id="Path_8808" d="M58.9.484A7.6 7.6 0 0 0 54.287 3a.47.47 0 0 1-.079.081.082.082 0 0 1-.07 0c-.034-.016 0-.041 0-.062.133-.481.233-.976.4-1.44A2.453 2.453 0 0 1 57.39.066c.47.112.934.243 1.4.366a.729.729 0 0 1 .11.052z" fill="#9aa4b7" transform="translate(-52.053 -.001)"></path><path id="Path_8809" d="M3.148 243.82a.236.236 0 0 1-.183 0l-1.122-.3a2.476 2.476 0 0 1-1.77-3.02c.107-.44.232-.875.362-1.363a7.7 7.7 0 0 0 2.713 4.683z" fill="#9aa4b7" transform="translate(.003 -229.923)"></path></g></g></svg></a>
                        <a className="social-a-me" target="_blank" href="https://instagram.com/tetherland"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g id="instagram" transform="translate(-561 -4621)"><g id="instagram-2" transform="translate(561 4621)"><path id="instagram-3" d="M11.584 0H4.415A4.42 4.42 0 0 0 0 4.415v7.169A4.42 4.42 0 0 0 4.415 16h7.169A4.42 4.42 0 0 0 16 11.585v-7.17A4.42 4.42 0 0 0 11.584 0zm3 11.585a3 3 0 0 1-3 3H4.415a3 3 0 0 1-3-3v-7.17a3 3 0 0 1 3-3h7.169a3 3 0 0 1 3 3v7.169z" fill="#9aa4b7"></path><path id="Path_8741" d="M45.091 40.97a4.123 4.123 0 1 0 4.123 4.123 4.127 4.127 0 0 0-4.123-4.123zm0 6.826a2.7 2.7 0 1 1 2.7-2.7 2.706 2.706 0 0 1-2.7 2.704z" fill="#9aa4b7" transform="translate(-37.091 -37.092)"></path><path id="Path_8742" d="M119.962 28.251a1.04 1.04 0 1 0 .736.3 1.045 1.045 0 0 0-.736-.3z" fill="#9aa4b7" transform="translate(-107.666 -25.578)"></path></g></g></svg></a>
                        <a className="social-a-me" target="_blank" href="https://t.me/tetherland"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.931" viewBox="0 0 16 13.931"><path fill="#9aa4b7" d="M.283 26.08l3.687 1.376 1.43 4.589a.434.434 0 0 0 .689.208l2.055-1.675a.613.613 0 0 1 .747-.021l3.707 2.691a.434.434 0 0 0 .681-.263l2.715-13.061a.435.435 0 0 0-.582-.494L.278 25.267a.435.435 0 0 0 .005.813zm4.884.644l7.205-4.438a.126.126 0 0 1 .152.2l-5.947 5.526a1.233 1.233 0 0 0-.382.738l-.2 1.5a.186.186 0 0 1-.364.026L4.85 27.54a.725.725 0 0 1 .316-.816z" transform="translate(0 -19.401)"></path></svg></a>
                        <a className="social-a-me" target="_blank" href="https://linkedin.com/company/tetherland"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.333" viewBox="0 0 15 14.333"><path fill="#9aa4b7" d="M15 18.346v5.546h-3.215v-5.175c0-1.3-.465-2.187-1.629-2.187a1.759 1.759 0 0 0-1.65 1.176 2.2 2.2 0 0 0-.107.784v5.4H5.184s.043-8.763 0-9.671H8.4v1.371l-.021.031H8.4v-.031a3.193 3.193 0 0 1 2.9-1.6c2.114.003 3.7 1.385 3.7 4.356zM1.82 9.558a1.676 1.676 0 1 0-.043 3.342H1.8a1.676 1.676 0 1 0 .02-3.342zM.191 23.891h3.215V14.22H.191z" transform="translate(0 -9.558)"></path></svg></a>
                        <a className="social-a-me" target="_blank" href="https://facebook.com/tetherland"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="17.496" viewBox="0 0 10 17.496"><g id="facebook" transform="translate(-22.077)"><path id="Path_20437" data-name="Path 20437" d="M31.7,0,29.3,0a4.212,4.212,0,0,0-4.436,4.552v2.1H22.454a.377.377,0,0,0-.377.377v3.041a.377.377,0,0,0,.377.377h2.412v6.673a.377.377,0,0,0,.377.377h3.146a.377.377,0,0,0,.377-.377V10.446h2.82a.377.377,0,0,0,.377-.377V7.028a.377.377,0,0,0-.377-.377H28.767V4.872c0-.855.2-1.289,1.318-1.289H31.7a.377.377,0,0,0,.377-.377V.381A.377.377,0,0,0,31.7,0Z" transform="translate(0)" fill="#9ea7ba"></path></g></svg></a>
                    </div>
                    
                </div>
                <div className="copy-me">
                تمامی حقوق مادی و معنوی سرویس متعلق به
                <span className="text-green-me">مجموعه تترلند</span>
                است
                </div>
            </div>
        </footer>
    );
}

export default Footer;
