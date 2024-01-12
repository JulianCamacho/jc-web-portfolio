import React from "react";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { useTheme } from './ThemeContext';

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className='dark--mode'>
            {/* eslint-disable-next-line*/}
            <a
                className='dark--mode--button'
                id='darkmode-toggle'
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <Sun /> : <Moon />}
            </a>
        </div>
    );
};

export default DarkMode;
