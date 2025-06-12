import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="about-section w-full flex flex-col items-center justify-center bg-[#000000]">
      <h1 className="about-tittle mb-5 text-5xl font-bold">About Me</h1>

      <div className="bento-grid ">
        <motion.div className="card intro ">
          <div className="flex flex-col items-start w-1/2">
            <h1 className="text-2xl font-semibold text-white ">
              Hi There, I'M Shubham
            </h1>
            <p className="text-[#7b7b7b] text-[15px] mt-5">
              I specialize in frontend development, crafting dynamic, visually
              engaging, and highly responsive websites that provide seamless
              user experiences. With a strong foundation in HTML, CSS and
              Javascript, I focus on building modern web interface that are not
              only aesthetically appealing but also optimized for performance
              and accessibility. My expertise extends to advanced frameworks
              like react and Tailwind CSS, anabling me to create interactive,
              scalable, and efficient applications. Wheter It's designing sleek
              UI components, implementing smooth animations, or enhancing use
              interctions, my goal is to develop web solutions that are both
              functional and innovative.
            </p>
          </div>

          <div className="w-1/2 flex items-center justify-center relative">
            <img
              src="./images/shubhamGanraj.png"
              className="w-57 object-cover"
              alt=""
            />
            <div class="absolute bottom-4 left-0 w-1/2 h-1/4 bg-gradient-to-t from-[#190635] to-transparent ml-24"></div>
          </div>
        </motion.div>

        <di className="card tech bg-black">
          <h1 className="text-2xl font-semibold text-white ">Tech Stack</h1>
          <p className="text-[#7b7b7b] text-[15px] mt-5">
            I specialize in a diverse range of programming languages,
            frameworks, and development tools that empower me to build robust,
            scalable, and high-performing applications. With a strong command of
            HTML, CSS and Javascript, I create visually appealing and responsive
            web interfaces that enhance user engagement. My expertise extends to
            modern frameworks like React, Tailwind CSS, and Spline, enabling me
            to develop interactive, efficient, and maintainable front-end
            architecture.
          </p>
          <img
            src="./images/skillGroup.png"
            className="absolute bottom-[10%] left-[15%] w-[70%]"
            alt="skill-image"
          />
        </di>
        <di className="card time relative">
          <h1 className="text-2xl font-semibold text-white ">
            Very Flexible With Time Zone, Communications & Locations
            <p className="text-[#7b7b7b] text-[15px] mt-5">
              Based in Chh. SambhajiNagar, Maharashtra and Open to remote and
              offline work worldwide.
            </p>
            <button className="absolute bottom-5 ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition:all duration-500 text-sm">
              Contact Me
            </button>
          </h1>
        </di>
        <di className="card passion">
          <h1 className="text-2xl font-semibold text-white">
            Passion For Coding
          </h1>

          <p className="text-[#7b7b7b] text-[15px] mt-5">
            Solving problems and building solutions through code, Programming is
            my professin-it's my passion. I enjoy exploring new technologies and
            enhancing my skills.
          </p>
        </di>
      </div>
    </section>
  );
}

export default AboutSection;
