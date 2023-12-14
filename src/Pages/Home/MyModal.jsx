import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProjectSwiper from './ProjectSwiper';
import data from "../../data/skills.json"

/**
 * https://mui.com/material-ui/react-modal/
 * Project tools listed in projects.json should also be one in skills.json for them to render
 */

export default function MyModal(props) {

    const projectInfo = props.project;
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const isDarkModeEnabled = () => {
        return document.querySelector("body").getAttribute('data-theme') === 'dark';
    };

    const findReactBadge = (badgeName) => {
        for (const skill of data.skills) {
            for (const badge of skill.badges) {
                if (badge.name === badgeName) {
                    console.log(badge)
                    return badge;
                }
            }
        }
        return null;
    }

    return (
        <>
            <div className="modal--button-container">
                <button className="btn btn-primary" onClick={handleOpen}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                    target="_blank" rel="noreferrer">
                    View in detail
                </button>
            </div>
            <Modal className='my--modal'
                open={openModal}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <div className="modal--card" transition={{ layout: { duration: 5, type: "spring" } }}>
                        <h3 className="portfolio--section--title" id="transition-modal-title">
                            {projectInfo.title}
                        </h3>
                        <p className="text-md" id="transition-modal-description">
                            {projectInfo.description}
                        </p>
                        <div className='project--tool--container'>
                            {projectInfo.tools?.map((tool, index2) => {
                                const toolBadge = findReactBadge(tool);

                                const colorModSrc = isDarkModeEnabled()
                                    ? toolBadge?.src.replace("f8f8f8", "0c0c0c")
                                    : toolBadge?.src.replace("0c0c0c", "f8f8f8");
                                const modifiedSrc = colorModSrc.replace(/badge\/.*?-/, "badge/-"); // Removes everything between "badge/" and "-"
                                console.log(modifiedSrc)
                                return (
                                    <img
                                        src={modifiedSrc}
                                        key={index2}
                                        alt={toolBadge.name}
                                    />
                                );
                            })}
                        </div>
                        <br /><br />
                        <div className="portfolio--section--container">
                            <ProjectSwiper projectData={projectInfo.imgs} />
                        </div>
                        {(projectInfo.title === "GymTEC" || projectInfo.title === "SmartHomeTEC" ||
                            projectInfo.title === "XBattlePong") &&
                            <div className="portfolio--section--container">
                                <br /><br />
                                <ProjectSwiper projectData={projectInfo.admin_imgs} />
                            </div>}
                        { /*projectInfo.title === "SmartHomeTEC" &&
                            <div className="portfolio--section--container">
                                <br /><br />
                                <ProjectSwiper projectData={projectInfo.mobile_imgs} />
                        </div>*/}
                    </div>
                </Fade>
            </Modal>
        </>
    )
}