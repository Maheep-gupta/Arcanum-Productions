import React from 'react';

function Modal({ videoUrl, visible, onClose }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-screen h-screen">
            <div className="relative p-8 rounded h-screen w-screen backdrop-blur-sm flex justify-center items-center">
                <button onClick={onClose} className="absolute top-2 right-2 text-white text-5xl">
                    &times;
                </button>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eRMQ0K_w-jw?si=K0FWjYU92sXi4o78?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full h-full opacity-100"></iframe>
            </div>
        </div>
    );
}

export default Modal;
