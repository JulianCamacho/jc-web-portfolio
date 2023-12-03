export default function HeroSection(){
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
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile-pic-1.jpeg" alt="Hero Section" className="profile-pic"/>
            </div>
        </section>
    )
}