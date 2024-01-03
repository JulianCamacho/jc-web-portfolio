import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Reveal from '../utils/Reveal';
import PdfViewer from '../utils/PdfViewer';
import BadgeRenderer from '../utils/BagdeRenderer';

/**
 * https://mui.com/material-ui/react-modal/
 * Project tools listed in projects.json should also be one in skills.json for them to render
 * 
 * Badge background color is hardcoded
 * To adjust the darkmode color toggle, change the color 0c0c0c in the src field in skills.json                   
 * Also adjust colorModSrc definition lines of this file
 * These are also hardcoded to var(--bg-shade) of App.css
 */

export default function DocModal(props) {

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
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="21" viewBox="0 0 384 512"><path className="footer--logo" d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" /></svg>
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
                                {projectInfo.title} Documentation
                            </h3>
                        </Reveal>
                        <BadgeRenderer projectTools={projectInfo.tools} 
                            projectExtraTools={projectInfo.extra_tools}
                            flex={'project--tool--container'}
                            bg_color={"f0f0f0"}/>
                        <br /><br />
                        <div className="portfolio--section--container">
                            {projectInfo.docs?.map((doc, index) => (
                                <PdfViewer pdfUrl={doc} key={index} />
                            ))}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}