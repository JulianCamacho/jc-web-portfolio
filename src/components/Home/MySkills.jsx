
import skills_data from '../../data/skills.json'
import ExpandableCard from './ExpandableCard';

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
                {skills_data?.skills?.map((item, index) => (
                    <ExpandableCard skill={item} key={index}/>
                ))}
            </div>
        </section >
    );
}