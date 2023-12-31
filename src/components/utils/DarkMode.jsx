import React, { useState } from "react";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        setIsDarkMode(true);
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        setIsDarkMode(false);
    };

    const toggleTheme = () => {
        if (isDarkMode) {
            setLightMode();
        } else {
            setDarkMode();
        }
    };

    return (
        <div className='dark--mode'>
            {/* eslint-disable-next-line*/}
            <a
                className='dark--mode--button'
                id='darkmode-toggle'
                onClick={toggleTheme}
            >
                {isDarkMode ? <Sun /> : <Moon />}
            </a>
        </div>
    );
};

export default DarkMode;
