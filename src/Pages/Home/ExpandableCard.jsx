import { ReactComponent as BackendSVG } from '../../assets/backend.svg';
import { ReactComponent as WebSVG } from "../../assets/web.svg";
import { ReactComponent as DatabaseSVG } from "../../assets/databases.svg";
import { ReactComponent as LanguageSVG } from "../../assets/code.svg";
import { ReactComponent as DevOpsSVG } from "../../assets/devops.svg";
import { ReactComponent as CircuitSVG } from "../../assets/circuit.svg";
import { ReactComponent as AISVG } from "../../assets/ai.svg";
import { ReactComponent as SkillsSVG } from "../../assets/skills.svg";
import { ReactComponent as OSSVG } from "../../assets/os.svg";
//import { ReactComponent as TeamworkSVG } from "../../assets/teamwork.svg";

export default function ExpandableCard(props) {

    //    <div className={`skills--section--card ${isExpanded ? 'expanded' : ''}`}>
    
    return (
        <div className="skills--section--card" id='expandableContainer'>
            <div className="skills--section-img">
                {props.skill.title === "Back-End" && <BackendSVG className="skill--logo" />}
                {props.skill.title === "Front-End" && <WebSVG className="skill--logo" />}
                {props.skill.title === "Databases" && <DatabaseSVG className="skill--logo" />}
                {props.skill.title === "Programming Languages" && <LanguageSVG className="skill--logo" />}
                {props.skill.title === "DevOps" && <DevOpsSVG className="skill--logo" />}
                {props.skill.title === "AI and ML environment" && <AISVG className="skill--logo" />}
                {props.skill.title === "HDL and Assembly" && <CircuitSVG className="skill--logo" />}
                {props.skill.title === "Operating Systems" && <OSSVG className="skill--logo" />}
                {props.skill.title === "Other skills" && <SkillsSVG className="skill--logo" />}
            </div>
            <div className="skills--section--card--content">
                <h3 className="skills--section--title">{props.skill.title}</h3>
                <p className="skills--section--description">{props.skill.description}</p>
                <div className='skill--tool--container'>
                    {props.skill?.badges?.map((item, index) => (
                        <img src={item.src} key={index} alt={index.name} />
                    ))}
                </div>
            </div >
        </div >
    );
}