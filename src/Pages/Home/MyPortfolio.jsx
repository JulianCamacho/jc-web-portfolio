import data from "../../data/index.json";
import urls from "../../data/url.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div>
                <br/>
                    <a className="btn btn-github" href={urls?.gitHub}
                        style={{ display: 'flex', alignItems: 'center' }}>
                        Visit my GitHub
                        <svg className="btn-github-logo"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                        >
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path id="gh" d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
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
                                <a className="text-sm portfolio--link" href={item.link}
                                   target="_blank" rel="noreferrer">
                                    View src in GitHub
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
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}