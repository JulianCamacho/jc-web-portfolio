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

import data from "../../data/index.json";

export default function MySkills() {

    /** 
     * To add a badge: https://shields.io/badges
     * Badge icons from: https://simpleicons.org/
     * Card icons from: https://www.svgrepo.com/
     */

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
                            {item.title === "Back-End" && <BackendSVG className="skill--logo" />}
                            {item.title === "Front-End" && <WebSVG className="skill--logo" />}
                            {item.title === "Databases" && <DatabaseSVG className="skill--logo" />}
                            {item.title === "Programming Languages" && <LanguageSVG className="skill--logo" />}
                            {item.title === "DevOps" && <DevOpsSVG className="skill--logo" />}
                            {item.title === "AI and ML environment" && <AISVG className="skill--logo" />}
                            {item.title === "HDL and Assembly" && <CircuitSVG className="skill--logo" />}
                            {item.title === "Operating Systems" && <OSSVG className="skill--logo" />}
                            {item.title === "Other skills" && <SkillsSVG className="skill--logo" />}
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                            {item.title === "Front-End" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Angular-black?style=for-the-badge&logo=angular&logoColor=DD0031" alt="Angular" />
                                    <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=20232A" alt="React" />
                                    <img src="https://img.shields.io/badge/Bootstrap-black?style=for-the-badge&logo=bootstrap&logoColor=563D7C" alt="Bootstrap" />
                                    <img src="https://img.shields.io/badge/mui-black?style=for-the-badge&logo=mui&logoColor=007FFF" alt="Material-UI" />
                                    <img src="https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5&logoColor=E34F26" alt="HTML5" />
                                    <img src="https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3&logoColor=1572B6" alt="CSS3" />
                                    <img src="https://img.shields.io/badge/firebase-black?style=for-the-badge&logo=firebase&logoColor=FFCA28" alt="Firebase" />
                                    <img src="https://img.shields.io/badge/Auth0-black?style=for-the-badge&logo=auth0&logoColor=EB5424" alt="Auth0" />
                                    <img src="https://img.shields.io/badge/Capacitor-black?style=for-the-badge&logo=Capacitor&logoColor=119EFF" alt="Capacitor" />
                                    <img src="https://img.shields.io/badge/Ionic-black?style=for-the-badge&logo=ionic&logoColor=3880FF" alt="Ionic" />
                                </div>
                            }
                            {item.title === "Back-End" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/.NET-black?style=for-the-badge&logo=.net&logoColor=5C2D91" alt=".NET" />
                                    <img src="https://img.shields.io/badge/node.js-black?style=for-the-badge&logo=nodedotjs&logoColor=339933" alt="Node.js" />
                                    <img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=express&logoColor=white)" alt="Express" />
                                    <img src=" https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=flask&logoColor=white)" alt="Flask" />
                                </div>
                            }
                            {item.title === "Databases" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/SQL_Server-black?style=for-the-badge&logo=microsoftsqlserver&logoColor=CC2927" alt="SQL Server" />
                                    <img src="https://img.shields.io/badge/PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=316192" alt="PostgreSQL" />
                                    <img src="https://img.shields.io/badge/mysql-black?style=for-the-badge&logo=mysql&logoColor=4479A1" alt="MySQL" />
                                    <img src="https://img.shields.io/badge/sqlite-black?style=for-the-badge&logo=sqlite&logoColor=003B57" alt="SQLite" />
                                    <img src="https://img.shields.io/badge/mongodb-black?style=for-the-badge&logo=mongodb&logoColor=47A248" alt="MongoDB" />
                                    <img src="https://img.shields.io/badge/Neo4j-black?style=for-the-badge&logo=neo4j&logoColor=018bff" alt="Neo4j" />
                                </div>
                            }
                            {item.title === "Programming Languages" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Python-black?style=for-the-badge&logo=python&logoColor=3776AB" alt="Python" />
                                    <img src="https://img.shields.io/badge/C%20-black?style=for-the-badge&logo=c&logoColor=2370ED" alt="C" />
                                    <img src="https://img.shields.io/badge/C%23-black?style=for-the-badge&logo=c-sharp&logoColor=239120" alt="C#" />
                                    <img src="https://img.shields.io/badge/C++%20-black?style=for-the-badge&logo=c%2B%2B&logoColor=00599C" alt="C++" />
                                    <img src="https://img.shields.io/badge/Java-black?style=for-the-badge&logo=java&logoColor=E34F26" alt="Java" />
                                    <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
                                    <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
                                    <img src="https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
                                </div>
                            }
                            {item.title === "DevOps" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Jira-black?style=for-the-badge&logo=Jira&logoColor=0052CC" alt="Jira" />
                                    <img src="https://img.shields.io/badge/Azure_DevOps-black?style=for-the-badge&logo=azure-devops&logoColor=0078D7" alt="Azure DevOps" />
                                </div>
                            }
                            {item.title === "AI and ML environment" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/TensorFlow-black?style=for-the-badge&logo=tensorflow&logoColor=FF6F00" alt="TensorFlow" />
                                    <img src="https://img.shields.io/badge/keras-black?style=for-the-badge&logo=keras&logoColor=D00000" alt="Keras" />
                                    <img src="https://img.shields.io/badge/Scikitlearn-black?style=for-the-badge&logo=scikitlearn&logoColor=F7931E" alt="Scikit-learn" />
                                    <img src="https://img.shields.io/badge/Jupyter-black?style=for-the-badge&logo=Jupyter" alt="Jupyter" />
                                    <img src="https://img.shields.io/badge/googlecolab-black?style=for-the-badge&logo=googlecolab&logoColor=F9AB00" alt="Google Colab" />
                                </div>
                            }
                            {item.title === "HDL and Assembly" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Assembly_x86-black?style=for-the-badge&logo=assemblyscript" alt="Assembly x86" />
                                    <img src="https://img.shields.io/badge/Assembly_ARM-black?style=for-the-badge&logo=ARM" alt="Assembly ARM" />
                                    <img src="https://img.shields.io/badge/System_Verilog-black?style=for-the-badge&logo=velog&logoColor=gray" alt="SysVerilog" />
                                    <img src="https://img.shields.io/badge/Verilog-black?style=for-the-badge&logo=velog&logoColor=darkblue" alt="Verilog" />
                                </div>
                            }
                            {item.title === "Operating Systems" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Arch_Linux-black?style=for-the-badge&logo=arch-linux&logoColor=1793D1" alt="Arch Linux" />
                                    <img src="https://img.shields.io/badge/ubuntu-black?style=for-the-badge&logo=ubuntu&logoColor=E95420" alt="Ubuntu" />
                                    <img src="https://img.shields.io/badge/Windows-black?style=for-the-badge&logo=windows&logoColor=0078D6" alt="Windows" />
                                </div>
                            }
                            {item.title === "Other skills" &&
                                <div className='skill--tool--container'>
                                    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-black?style=for-the-badge&logo=visual-studio-code&logoColor=0078d7" alt="Visual Studio Code" />
                                    <img src="https://img.shields.io/badge/octave-black?style=for-the-badge&logo=octave&logoColor=0790C0" alt="Octave" />
                                    <img src="https://img.shields.io/badge/open_ai_api-black?style=for-the-badge&logo=openai&logoColor=412991" alt="OpenAI" />
                                    <img src="https://img.shields.io/badge/Overleaf-black?style=for-the-badge&logo=Overleaf&logoColor=47A141" alt="Overleaf" />
                                    <img src="https://img.shields.io/badge/Canva-black?style=for-the-badge&logo=Canva&logoColor=%2300C4CC" alt="Canva" />
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}