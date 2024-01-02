import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Reveal from '../utils/Reveal';
import BadgeRenderer from '../utils/BagdeRenderer';
import VideoPlayer from '../utils/VideoPlayer';

/**
 * https://mui.com/material-ui/react-modal/
 * Project tools listed in projects.json should also be one in skills.json for them to render
 * 
 * Badge background color is hardcoded
 * To adjust the darkmode color toggle, change the color 0c0c0c in the src field in skills.json                   
 * Also adjust colorModSrc definition lines of this file
 * These are also hardcoded to var(--bg-shade) of App.css
 */

export default function VideoModal(props) {

    const projectInfo = props.project;
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
        console.log(projectInfo.imgs)
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className="modal--button-container">
                {/* eslint-disable-next-line*/}
                <a
                    onClick={handleOpen}
                    className="navbar--content"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="28" viewBox="0 0 576 512"><path className='footer--logo' d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>                </a>
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
                    <div className="doc--modal--card" transition={{ layout: { duration: 5, type: "spring" } }}>
                        <Reveal>
                            <h3 className="portfolio--section--title" id="transition-modal-title">
                                {projectInfo.title}
                            </h3>
                        </Reveal>
                        <BadgeRenderer projectTools={projectInfo.tools} 
                            projectExtraTools={projectInfo.extra_tools} 
                            flex={'project--tool--container'}
                            bg_color={"f0f0f0"} />
                        <br /><br />
                        <div className="portfolio--section--container">
                            {projectInfo.videos?.map((video, index) => (
                                <VideoPlayer videoId={video} key={index} />
                            ))}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}