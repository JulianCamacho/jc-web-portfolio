import urls from "../../data/url.json";

export default function HeroSection(){

    const cv = "ResumeJulianCamachoENG.pdf";
    
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hola!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Hola mundo
                        <br /> Sigoasdadasd
                    </p>
                </div>
                <a className="btn btn-primary" href={urls?.linkedin}>Get in touch</a>
                <a className="btn btn-primary" href={cv} download={cv}>Download my CV</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile-pic-1.jpeg" alt="Hero Section" className="profile-pic"/>
            </div>
        </section>
    )
}