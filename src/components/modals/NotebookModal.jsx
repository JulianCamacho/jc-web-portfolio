import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Reveal from '../utils/Reveal';
import BadgeRenderer from '../utils/BagdeRenderer';
import NotebookViewer from '../utils/NotebookViewer';

/**
 * https://mui.com/material-ui/react-modal/
 * Project tools listed in projects.json should also be one in skills.json for them to render
 * 
 * Badge background color is hardcoded
 * To adjust the darkmode color toggle, change the color 0c0c0c in the src field in skills.json                   
 * Also adjust colorModSrc definition lines of this file
 * These are also hardcoded to var(--bg-shade) of App.css
 */

export default function NotebookModal({project}) {

    const projectInfo = project;
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
                    <svg height="29" width="27" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>jupyter</title> <path className='footer--logo' d="M16.411 23.683c-0.205 0.010-0.446 0.016-0.688 0.016-4.018 0-7.652-1.643-10.267-4.295l-0.002-0.002c0.826 2.34 2.3 4.28 4.207 5.659l0.034 0.024c1.864 1.351 4.197 2.162 6.719 2.162s4.854-0.81 6.751-2.184l-0.034 0.023c1.94-1.403 3.414-3.342 4.215-5.6l0.025-0.082c-2.619 2.653-6.256 4.296-10.276 4.296-0.241 0-0.481-0.006-0.719-0.018l0.034 0.001zM16.41 7.069c0.206-0.011 0.447-0.017 0.69-0.017 4.017 0 7.651 1.643 10.265 4.294l0.002 0.002c-0.826-2.34-2.3-4.28-4.206-5.659l-0.034-0.024c-1.864-1.35-4.197-2.159-6.719-2.159s-4.854 0.809-6.752 2.183l0.034-0.023c-1.941 1.402-3.415 3.342-4.216 5.6l-0.025 0.082c2.622-2.652 6.261-4.295 10.284-4.295 0.238 0 0.476 0.006 0.711 0.017l-0.033-0.001zM7.243 5.173c-0 0.363-0.147 0.692-0.384 0.931l0-0c-0.236 0.238-0.563 0.386-0.924 0.386s-0.689-0.148-0.924-0.386l-0-0c-0.237-0.239-0.384-0.569-0.384-0.932s0.147-0.693 0.384-0.932l-0 0c0.236-0.238 0.563-0.386 0.924-0.386s0.689 0.148 0.925 0.387l0 0c0.237 0.239 0.383 0.568 0.383 0.932 0 0 0 0.001 0 0.001v-0zM26.725 2.788c0 0.001 0 0.002 0 0.002 0 0.491-0.198 0.936-0.518 1.259l0-0c-0.319 0.323-0.762 0.523-1.251 0.523s-0.932-0.2-1.251-0.522l-0-0c-0.32-0.324-0.518-0.77-0.518-1.262s0.198-0.938 0.518-1.262l-0 0c0.319-0.322 0.761-0.522 1.251-0.522s0.932 0.2 1.251 0.522l0 0c0.32 0.323 0.518 0.768 0.518 1.26 0 0 0 0.001 0 0.001v-0zM9.948 28.748c0 0 0 0.001 0 0.002 0 0.619-0.249 1.18-0.653 1.588l0-0c-0.402 0.407-0.96 0.659-1.576 0.659s-1.174-0.252-1.576-0.658l-0-0c-0.404-0.408-0.653-0.97-0.653-1.59s0.249-1.181 0.653-1.59l-0 0c0.402-0.407 0.959-0.658 1.576-0.658s1.174 0.252 1.576 0.659l0 0c0.403 0.408 0.653 0.969 0.653 1.588 0 0.001 0 0.001 0 0.002v-0z"></path> </g></svg>
                </a>
            </div>
            <Modal className='my--modal'
                open={openModal} onClose={handleClose}
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
                                {projectInfo.title} Notebooks
                            </h3>
                        </Reveal>
                        <BadgeRenderer projectTools={projectInfo.tools}
                            projectExtraTools={projectInfo.extra_tools}
                            flex={'project--tool--container'}
                            bg_color={"f0f0f0"} />
                        <br /><br />
                        <div className="portfolio--section--container">
                            {projectInfo.notebooks?.map((notebook, index) => (
                                <NotebookViewer notebookUrl={notebook} key={index} />
                            ))}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}