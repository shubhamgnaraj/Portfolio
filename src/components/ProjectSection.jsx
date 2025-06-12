import { section } from 'framer-motion/client';
import React from 'react'

function ProjectSection() {
  return (
    <section className='w-full mt-2 overflow-hidden flex flex-col items-center justify-center'>
        <h1 className="about-tittle mb-5 text-5xl font-bold"></h1>
        <div className="slider w-full overflow-hidden mask-radial-at-right-">
            <div className="list">
                <div className="item">

                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection;