import React from 'react';
import Reveal from './Reveal';
import data from "../../data/skills.json"

/**
 * https://mui.com/material-ui/react-modal/
 * Project tools listed in projects.json should also be one in skills.json for them to render
 * 
 * Badge background color is hardcoded
 * To adjust the darkmode color toggle, change the color 0c0c0c in the src field in skills.json                   
 * Also adjust colorModSrc definition lines of this file
 * These are also hardcoded to var(--bg-shade) of App.css
 */

const BadgeRenderer = ({ projectTools, projectExtraTools, flex, bg_color }) => {

    const isDarkModeEnabled = () => {
        return document.querySelector("body").getAttribute('data-theme') === 'dark';
    };

    const findReactBadge = (badgeName) => {
        for (const skill of data.skills) {
            for (const badge of skill.badges) {
                if (badge.name === badgeName) {
                    return badge;
                }
            }
        }
        return null;
    }

    return (
        <div className={flex}>
            {projectTools?.map((tool, index) => {
                const toolBadge = findReactBadge(tool);

                const colorModSrc = isDarkModeEnabled()
                    ? toolBadge?.src.replace(bg_color, "0c0c0c")
                    : toolBadge?.src.replace("0c0c0c", bg_color);
                const modifiedSrc = colorModSrc.replace(/badge\/.*?-/, "badge/-"); // Removes everything between "badge/" and "-"
                return (
                    <Reveal>
                        <img className='project--tool--img'
                            src={modifiedSrc}
                            key={index}
                            alt={toolBadge.name}
                        />
                    </Reveal>
                );
            })}
            {projectExtraTools?.map((extra_tool, index2) => (
                <Reveal>
                    <object type="image/svg+xml" data={extra_tool} className='modal--extra--tools'>
                        <img src={extra_tool} key={index2} alt="Extra_Tool" />
                    </object>
                </Reveal>
            ))}
        </div>
    );
};

export default BadgeRenderer;
