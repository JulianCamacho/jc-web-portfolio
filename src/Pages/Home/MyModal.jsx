import { useState } from 'react';
import Modal from '@mui/material/Modal';
import ProjectSwiper from './ProjectSwiper';

export default function MyModal(props) {

    const projectInfo = props.project;
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

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
            >
                <div className="modal--card">
                    <h3 className="portfolio--section--title">
                        {projectInfo.title}
                    </h3>
                    <p className="text-md">
                        {projectInfo.description}
                    </p>
                    <div className="portfolio--section--container">
                        <ProjectSwiper projectData={projectInfo} />
                    </div>
                </div>
            </Modal>
        </>
    )
}