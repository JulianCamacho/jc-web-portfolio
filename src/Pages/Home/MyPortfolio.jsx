import data from "../../data/index.json";
import urls from "../../data/url.json";

export default function MyPortfolio() {

    const openUrl = () => {
        window.open(urls?.gitHub, '_blank');
    };

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div>
                    <button onClick={openUrl} className="btn btn-github">
                            Visit My GitHub
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section---title">
                                    {item.title}
                                </h3>
                                <p className="text-md">
                                    {item.description}
                                </p>
                                <p className="text-sm portfolio--link">
                                    {item.link}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                            stroke="currentColor"
                                            stroke-width="2.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}