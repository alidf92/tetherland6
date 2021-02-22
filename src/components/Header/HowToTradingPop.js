import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ScrollDialog() {
    const [status, setStatus] = useState(1);
    const activeHandler = (e) => {
        e.preventDefault();
        setStatus(1);
    };
    const activeHandlerTwo = (e) => {
        e.preventDefault();
        setStatus(2);
    };

    const activeHandlerThree = (e) => {
        e.preventDefault();
        setStatus(3);
    };
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Link onClick={handleClickOpen("paper")} to="/">
                نحوه خرید و فروش
            </Link>
            <div>
                <Dialog open={open} onClose={handleClose} scroll={scroll}>
                    <div></div>
                    <div className="pop-close-icon">
                        <svg
                            onClick={handleClose}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            color="#121314"
                            class="close__Close-sc-6vln39-0 kDaggE"
                        >
                            <g id="close" transform="translate(-61 -306)">
                                <g
                                    id="Group_4895"
                                    transform="translate(60.157 308.657)"
                                >
                                    <path
                                        id="Line_89"
                                        d="M0 0L22.627 0"
                                        fill="none"
                                        stroke="#121314"
                                        stroke-width="2px"
                                        transform="rotate(45 .8 6.518)"
                                    ></path>
                                    <path
                                        id="Line_316"
                                        d="M0 0L22.627 0"
                                        fill="none"
                                        stroke="#121314"
                                        stroke-width="2px"
                                        transform="rotate(-45 23.356 2.825)"
                                    ></path>
                                </g>
                                <path
                                    id="Rectangle_4886"
                                    fill="none"
                                    d="M0 0H24V24H0z"
                                    transform="translate(61 306)"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <DialogTitle className="pop-span" id="scroll-dialog-title">
                        راهنمای کامل خرید و فروش تتر
                    </DialogTitle>

                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        className="pop-sup-text"
                    >
                        {
                            "همواره میتوانید به صورت ۲۴ ساخته و ۷ روز هفته از تترلند به خرید و فروش تتر بپردازید و تترلند امنیت و سرعت را در معاملات شما تضمین خواهد کرد"
                        }
                    </DialogContentText>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {
                            <div className="spacebetween-me">
                                <div className="buy-or-sell-me">
                                    <div className="btn-box-me-2">
                                        <span
                                            onClick={activeHandler}
                                            className={`sell-btn-me ${
                                                status === 1 ? "active-me" : ""
                                            }`}
                                        >
                                            خرید تتر از صرافی تترلند
                                        </span>
                                        <span
                                            onClick={activeHandlerTwo}
                                            className={`sell-btn-me ${
                                                status === 2 ? "active-me" : ""
                                            }`}
                                        >
                                            فروش تتر در صرافی تترلند
                                        </span>
                                        <span
                                            onClick={activeHandlerThree}
                                            className={`sell-btn-me ${
                                                status === 3 ? "active-me" : ""
                                            }`}
                                        >
                                            مراحل احراز هویت
                                        </span>
                                    </div>
                                </div>
                            </div>
                        }
                    </DialogContentText>

                    <DialogActions>
                        <div className="pop-text">
                            {status === 1 && (
                                <>
                                    <div className="pop-mt">
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                1){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                انجام احراز هویت به صورت کامل
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                2){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                ورود به وبسایت یا اپلیکیشن
                                                تترلند
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                3){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                انتخاب گزینه خرید تتر از ما
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                4){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                ورود تعداد تتر درخواستی
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                5){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                وارد کردن شماره موبایل احراز شده
                                                در کادر مشخص شده
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                6){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                دریافت کد از طریق پیامک و وارد
                                                کردن آن در کادر مربوطه و ورود به
                                                پنل کاربری
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                7){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                وارد کردن شماره کارت یا انتخاب
                                                کارتی که قبلا وارد کردید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                8){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                وارد کردن آدرس کیف‌پول با توجه
                                                به نوع تتر درخواستی
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                9){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                وارد کردن آدرس کیف‌پول با توجه
                                                به نوع تتر درخواستی
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                10){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                وارد کردن آدرس کیف‌پول با توجه
                                                به نوع تتر درخواستی
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                11){" "}
                                            </span>
                                            <span className="pop-item-text">
                                                ورود به درگاه و پرداخت وجه ریال
                                            </span>
                                        </div>
                                    </div>
                                    <span className="pop-text-gray">
                                        خرید شما به این صورت انجام خواهد شد و
                                        تتر شما با توجه به سیکل واریزی ساعت خرید
                                        که در شرایط و قوانین موجود هست به
                                        کیف‌پول شما واریز خواهد شد.‌ ( این
                                        فرایند برای کاربرانی که قبلا احراز هویت
                                        شده‌اند از مرحله ۳ شروع خواهد شد.)
                                    </span>
                                </>
                            )}

                            {status === 2 && (
                                <>
                                    <span className="pop-text-gray pop-sell-text">
                                        (برای فروش به تترلند نیازی به احراز هویت
                                        نیست)
                                    </span>
                                    <div className="pop-mt">
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                1)
                                            </span>
                                            <span className="pop-item-text">
                                                ابتدا باید وارد سایت یا اپلیکیشن
                                                تترلند شوید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                2)
                                            </span>
                                            <span className="pop-item-text">
                                                روی گزینه "فروش تتر به ما" کلیک
                                                کنید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                3)
                                            </span>
                                            <span className="pop-item-text">
                                                تعداد تتری که قصد فروش آن را
                                                دارید وارد کنید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                4)
                                            </span>
                                            <span className="pop-item-text">
                                                اطلاعات شخصی را وارد کنید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                5)
                                            </span>
                                            <span className="pop-item-text">
                                                شماره شبا و نام بانک را جهت
                                                واریز ریال وارد کنید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                6)
                                            </span>
                                            <span className="pop-item-text">
                                                شرایط و قوانین را مطالعه کنید و
                                                در صورت مورد تأیید بودن گزینه
                                                پذیرش قوانین را بزنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                7)
                                            </span>
                                            <span className="pop-item-text">
                                                نوع تتر ارسالی خود را انتخاب
                                                کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                8)
                                            </span>
                                            <span className="pop-item-text">
                                                آدرس کیف‌پول ما را کپی کنید و
                                                بعد از واریز تتر به آدرس ما لینک
                                                تراکنش یا همان txid را از قسمت
                                                تاریخچه تراکنشات کیف‌پول خودتان
                                                کپی کنید و در کادر مورد نظر قرار
                                                بدید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                9)
                                            </span>
                                            <span className="pop-item-text">
                                                سفارش خود را ثبت کنید.
                                            </span>
                                        </div>
                                    </div>
                                    <span className="pop-text-gray">
                                        کد رهگیری که به شما داده میشود یادداشت
                                        کنید تا در صورت لزوم بتوانید از طریق تیم
                                        پشتیبانی تراکنش خود را پیگیری کنید.
                                        <br />
                                        فرایند از طریق پیامک به شما اطلاع داده
                                        خواهد شد.
                                    </span>
                                </>
                            )}
                            {status === 3 && (
                                <>
                                    <span className="pop-text-gray pop-sell-text">
                                        در نظر داشته باشید که احراز هویت یک بار
                                        برای همیشه انجام خواهد شد و فروش تتر به
                                        تترلند نیازی به احراز هویت ندارد.
                                    </span>
                                    <div className="pop-mt">
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                1)
                                            </span>
                                            <span className="pop-item-text">
                                                ابتدا باید وارد سایت یا اپلیکیشن
                                                تترلند شوید
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                2)
                                            </span>
                                            <span className="pop-item-text">
                                                روی گزینه "خرید تتر از ما" کلیک
                                                کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                3)
                                            </span>
                                            <span className="pop-item-text">
                                                تعداد تتر درخواستی را وارد کنید
                                                و روی دکمه مرحله بعد کلیک کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                4)
                                            </span>
                                            <span className="pop-item-text">
                                                روی دکمه "اگر احراز هویت نکرده
                                                اید ابتدا از اینجا احراز هویت
                                                نمایید" کلیک کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                5)
                                            </span>
                                            <span className="pop-item-text">
                                                در فرم باز شده اطلاعات شخصی و
                                                تماس خود را وارد کرده و روی دکمه
                                                "تایید اطلاعات" کلیک کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                6)
                                            </span>
                                            <span className="pop-item-text">
                                                کد ارسال شده به شماره موبایل را
                                                در کادر مربوطه قرار بدید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                7)
                                            </span>
                                            <span className="pop-item-text">
                                                در این مرحله باید ۳ عکس بارگذاری
                                                کنید،
                                                <br />
                                                عکس اول شامل کارت شناسایی کنار
                                                کارت بانکی کنار صفحه سایت یا
                                                اپلیکیشن تترلند است.
                                                <br />
                                                تصویر دوم شامل متن دست‌نوشته
                                                کنار کارت شناسایی و کارت بانکی
                                                شما است.
                                                <br />
                                                تصویر سوم شامل تصویر سلفی کنارت
                                                کارت بانکی و کارت شناسایی شما
                                                است.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                8)
                                            </span>
                                            <span className="pop-item-text">
                                                تصاویر را به صورت کامل بارگذاری
                                                و ارسال کنید.
                                            </span>
                                        </div>
                                        <div className="pop-item">
                                            <span className="pop-item-num">
                                                9)
                                            </span>
                                            <span className="pop-item-text">
                                                در ادامه برای تکمیل احراز هویت
                                                همکاران ما در اولین فرصت با شما
                                                در ارتباط خواهند بود.
                                            </span>
                                        </div>
                                    </div>
                                    <span className="pop-text-gray">
                                        لازم به ذکر است که در مرحله احراز هویت
                                        کارت شناسایی میتواند کارت ملی هوشمند یا
                                        گواهینامه هوشمند یا پاسپورت شما باشد.
                                    </span>
                                </>
                            )}
                        </div>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
