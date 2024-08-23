import React, { useState, useRef } from 'react';
import previewVideo from '../assets/preview.mp4';
import Modal from './Modal';

function VideosCard({ videoImageUrl }) {
     const imageUrl = videoImageUrl || "https://via.placeholder.com/250x164"
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current.pause();
    };

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    // console.log(imageUrl)
    return (
        <>
            <div
                className="card relative overflow-hidden w-64 h-40 cursor-pointer " style={{ backgroundImage: `url(${imageUrl})` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <video
                    ref={videoRef}
                    src={previewVideo}
                    loop
                    muted
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>

            {isOpen && <Modal videoUrl="https://www.youtube.com/embed/eRMQ0K_w-jw?si=K0FWjYU92sXi4o78" visible={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
}

export default VideosCard;
