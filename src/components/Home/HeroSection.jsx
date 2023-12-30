import { useState, useEffect } from "react";
import urls from "../../data/url.json";

export default function HeroSection() {

    /**
     * As a software engineer, I’m passionate about designing and building software applications that are efficient, robust, and meet user needs.
     */
    //const cv = "ResumeJulianCamachoENG.pdf";
    const cv = "Resume";

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Frontend", "Backend"];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text, delta]);

    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi! I'm Julian Camacho</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            <span className="txt-rotate"><span className="wrap">{text}</span>
                            </span>
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        I'm a Computer Engineering Student at TEC, <br /> Costa Rica
                        <br /> Welcome to my portfolio
                    </p>
                </div>
                <div className="hero--section--button-container">
                    <a className="btn btn-primary" href={urls?.linkedin}
                        style={{ display: 'flex', alignItems: 'center' }}
                        target="_blank" rel="noreferrer">
                        Get in touch
                        <svg className="btn-logo"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="3 3 28 28"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                            />
                        </svg>
                    </a>
                    <a
                        className="btn btn-primary"
                        href={cv}
                        download={cv}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >Download my CV
                        <svg className="btn-logo" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="Interface / Download">
                                <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="hero--section--img">
                <img src={urls.images[0].profile.heroSection} alt="Hero Section" />
            </div>
        </section>
    )
}