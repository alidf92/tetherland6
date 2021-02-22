import React from "react";
import "./Comments.css";
import comment from "./../../../images/comment.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const tutorialSteps = [
    {
        label: "بهترین سیستم نقدینگی",
        text:
            "تترلند برای من یکی از بهترین سیستم‌های تهيه نقدینگی مورد نیاز و نقد کردن درآمد ارزی بوده و هست.یکی از اصلی‌ترین دغدغه‌های هر معامله‌گر در بازار کریپتو پیدا کردن سیستمی مطمئن است که تترلند برای من یکی از بهترین درگاه برای تهيه نقدینگی مورد نیاز و نقد کردن درآمد ارزی بوده و هست.",
    },
    {
        label: "خدمات و پشتیبانی عالی",
        text:
            "تترلند با خدمات و پشتیبانی عالی همچنین سرعت عمل بالا، همیشه انتخاب اول من برای خرید و فروش تتر هست و خوش‌حالم که تجربه‌های خوبی رو با این صرافی داشتم. من مجموعه تترلند رو به آشنایان و دوستان خودم معرفی کردم و پیشنهاد دادم چرا که خدماتشون راضی هستم.",
    },
    {
        label: "فراهم کردن اطلاعات در این حوزه",
        text:
            "اولین تجربه من از صرافی تترلند، مربوط به خرید تتر بود که قصد داشتم برای بار اول تتر بخرم، با وجود سؤالات زیاد من در این زمینه، پشتیبانان این مجموعه به خوبی من رو راهنمایی کردن و پاسخگوی سؤالاتم بودند، درنتیجه با آرامش خاطر خریدم رو انجام دادم.",
    },
    {
        label: "برخورد صمیمانه پرسنل",
        text:
            "زمانی‌که با تیم تترلند آشنا شدم در ابتدا با برخورد صمیمی و محترمانه‌ی پرسنل روبه‌رو و جذب آن شدم. با کمک مطالبی که در پیج اینستاگرام و وبلاگ قرار داده شده بود تونستم اطلاعاتم رو بالا ببرم و برای خرید و فروش اقدام کردم و رضایت داشتم. بنابراین توصیه می‌کنم اگر مثل من در این زمینه کم‌تجربه هستید و قصد دارید اطلاعات خودتون رو بالاتر ببرید از مطالب تترلند استفاده کنید.",
    },
    {
        label: "رابط کاربری آسان",
        text:
            "به عنوان شخصی فعال در حوزه ارزهای دیجیتال که از صرافی های مختلفی استفاده کرده و در این قضایا تجربه داره باید بگم که تترلند یکی از بهترین صرافی‌هایی هست که تا به حال معاملات‌ام رو باهاش انجام دادم و به جرأت می‌تونم بگم از معبترترین صرافی‌های مبادله تتر به ریال در ایران هست که با رابط کاربری ساده‌ای که فراهم کرده همه افراد در هر سطحی می‌تونن استفاده کنن.",
    },
];

const useStyles = makeStyles((theme) => ({}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {  
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <div className="slider-me">
                <div className="slider-wrapper-me">
                    <img src={comment} alt="comment" className="com-img-1-me" />
                    <Paper square elevation={0} className="com-title-me">
                        <Typography className="com-title-me">
                            {tutorialSteps[activeStep].label}
                        </Typography>
                    </Paper>

                    <Paper square elevation={0} className="com-text-me">
                        <>{tutorialSteps[activeStep].text}</>
                    </Paper>

                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        className="arrow-left-me"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34.9"
                            height="20.314"
                            viewBox="0 0 34.9 20.314"
                        >
                            <g id="left" transform="rotate(90 959.343 10.557)">
                                <path
                                    id="Line_10"
                                    d="M0 0L0 32"
                                    fill="none"
                                    stroke="#21b386"
                                    stroke-linecap="round"
                                    stroke-width="2px"
                                    transform="translate(959 936)"
                                ></path>
                                <g id="Group_14341" transform="translate(-.25)">
                                    <g
                                        id="Group_14343"
                                        transform="translate(.2)"
                                    >
                                        <path
                                            id="Line_11"
                                            d="M0 0L12 0"
                                            fill="none"
                                            stroke="#21b386"
                                            stroke-linecap="round"
                                            stroke-width="2px"
                                            transform="rotate(135 285.045 680.424)"
                                        ></path>
                                        <path
                                            id="Line_12"
                                            d="M0 0L12 0"
                                            fill="none"
                                            stroke="#21b386"
                                            stroke-linecap="round"
                                            stroke-width="2px"
                                            transform="rotate(45 -683.698 1627.053)"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Button>

                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        className="arrow-right-me"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34.9"
                            height="20.314"
                            viewBox="0 0 34.9 20.314"
                        >
                            <g id="right" transform="rotate(90 16.035 17.45)">
                                <path
                                    id="Line_10"
                                    d="M0 32L0 0"
                                    fill="none"
                                    stroke="#21b386"
                                    stroke-linecap="round"
                                    stroke-width="2px"
                                    transform="translate(8.8 .485)"
                                ></path>
                                <g id="Group_14341">
                                    <g id="Group_14343">
                                        <path
                                            id="Line_11"
                                            d="M0 0L12 0"
                                            fill="none"
                                            stroke="#21b386"
                                            stroke-linecap="round"
                                            stroke-width="2px"
                                            transform="rotate(-135 10.5 .621)"
                                        ></path>
                                        <path
                                            id="Line_12"
                                            d="M0 0L12 0"
                                            fill="none"
                                            stroke="#21b386"
                                            stroke-linecap="round"
                                            stroke-width="2px"
                                            transform="rotate(-45 10.242 4.242)"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Button>
                </div>
            </div>
        </>
    );
}
