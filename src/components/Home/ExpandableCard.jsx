import { ReactComponent as BackendSVG } from '../../assets/backend.svg';
import { ReactComponent as WebSVG } from "../../assets/web.svg";
import { ReactComponent as DatabaseSVG } from "../../assets/databases.svg";
import { ReactComponent as LanguageSVG } from "../../assets/code.svg";
import { ReactComponent as DevOpsSVG } from "../../assets/devops.svg";
import { ReactComponent as CircuitSVG } from "../../assets/circuit.svg";
import { ReactComponent as AISVG } from "../../assets/ai.svg";
import { ReactComponent as SkillsSVG } from "../../assets/skills.svg";
import { ReactComponent as OSSVG } from "../../assets/os.svg";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Reveal from '../utils/Reveal';
//import { ReactComponent as TeamworkSVG } from "../../assets/teamwork.svg";

/**
 * Badge background color is hardcoded
 * To adjust the darkmode color toggle, change the color 0c0c0c in the src field in skills.json                   
 * Also adjust modifiedSrc definition lines of this file
 * These are also hardcoded to var(--bg-shade) of App.css
 */

export default function ExpandableCard(props) {

    const [isOpen, setIsOpen] = useState(false);

    const isDarkModeEnabled = () => {
        return document.querySelector("body").getAttribute('data-theme') === 'dark';
    };

    return (
        <motion.div layout className="skills--section--card" onClick={() => setIsOpen(!isOpen)}
            transition={{ layout: { duration: 1, type: "spring" } }}>
            <motion.div layout="position" className="skills--section--card--header">
                {props.skill.title === "Back-End" && <BackendSVG className="skill--logo" />}
                {props.skill.title === "Front-End" && <WebSVG className="skill--logo" />}
                {props.skill.title === "Databases" && <DatabaseSVG className="skill--logo" />}
                {props.skill.title === "Programming Languages" && <LanguageSVG className="skill--logo" />}
                {props.skill.title === "DevOps and Version Control" && <DevOpsSVG className="skill--logo" />}
                {props.skill.title === "AI and ML environment" && <AISVG className="skill--logo" />}
                {props.skill.title === "Assembly, HDL and Embedded Systems" && <CircuitSVG className="skill--logo" />}
                {props.skill.title === "Operating Systems" && <OSSVG className="skill--logo" />}
                {props.skill.title === "Other skills" && <SkillsSVG className="skill--logo" />}
                <h3 className="skills--section--title">{props.skill.title}</h3>
            </motion.div>

            {isOpen &&
                <motion.div className="skills--section--card--content">
                    <Reveal>
                        <p className="skills--section--description">{props.skill.description}</p>
                    </Reveal>
                    <div className='skill--tool--container'>
                        {props.skill?.badges?.map((item, index) => {
                            const modifiedSrc = isDarkModeEnabled()
                                ? item.src.replace("f0f0f0", "0c0c0c")
                                : item.src.replace("0c0c0c", "f0f0f0");
                            return (
                                <Reveal>
                                    <img src={modifiedSrc} key={index} alt={index.name} />
                                </Reveal>
                            )
                        })}
                    </div>
                </motion.div>
            }
        </motion.div >
    );
}