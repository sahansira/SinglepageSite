import React from 'react';

const Video = (props) => {
    return (
        <div className="video-container">
            <video playsInline autoPlay muted loop>
                <source src={props.data.video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;