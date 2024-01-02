import React from 'react';

const VideoPlayer = ({ videoId }) => {
  // YouTube video URL format: https://www.youtube.com/embed/{videoId}
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-embed">
      <iframe
        width="560" // You can adjust the width and height as needed
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
