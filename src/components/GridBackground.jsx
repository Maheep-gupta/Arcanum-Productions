import React from 'react';
import GridContent from './GridContent';

function GridBackground() {
    return (
        <div className=" md:h-screen w-full bg-[#282828]">
            <div className="inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:70px_70px]">
                <GridContent/>
            </div>
        </div>
    );
}

export default GridBackground;
