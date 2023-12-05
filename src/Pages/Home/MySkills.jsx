import { ReactComponent as BackendSVG } from '../../assets/backend.svg';
import { ReactComponent as TeamworkSVG } from "../../assets/teamwork.svg";
import { ReactComponent as WebSVG } from "../../assets/web.svg";
import { ReactComponent as DatabaseSVG } from "../../assets/databases.svg";
import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="sub--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section-img">
                            {item.src === "./img/backend.svg" && <BackendSVG className="skill--logo" />}
                            {item.src === "./img/web.svg" && <WebSVG className="skill--logo" />}
                            {item.src === "./img/teamwork.svg" && <TeamworkSVG className="skill--logo" />}
                            {item.src === "./img/databases.svg" && <DatabaseSVG className="skill--logo" />}
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}