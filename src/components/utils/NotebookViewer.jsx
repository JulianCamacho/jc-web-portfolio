import React from 'react';

const NotebookViewer = ({ notebookUrl }) => {
  return (
    <iframe
      className='notebook-viewer'
      title="Jupyter Notebook"
      src={notebookUrl}
      frameBorder="0"
    />
  );
};

export default NotebookViewer;
