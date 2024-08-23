import VideosCard from './VideosCard';
import React from 'react'

function CardGroup() {
    return (
        <>
            <section className=' p-5'>
                <div className="card-grp flex relative w-full overflow-x-auto snap-x snap-mandatory">
                    <div className="flex flex-nowrap gap-5">

                        <VideosCard className="snap-start" videoImageUrl={"https://nextui.org/images/hero-card-complete.jpeg"}  />
                        <VideosCard className="snap-start" videoImageUrl={"https://nextui-docs-v2.vercel.app/images/album-cover.png"}/>
                        <VideosCard className="snap-start" videoImageUrl={"https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"}/>
                        <VideosCard className="snap-start" videoImageUrl={"https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"}/>
                        <VideosCard className="snap-start" videoImageUrl={""}/>
                        <VideosCard className="snap-start" videoImageUrl={""}/>
                        <VideosCard className="snap-start" videoImageUrl={""}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardGroup;
