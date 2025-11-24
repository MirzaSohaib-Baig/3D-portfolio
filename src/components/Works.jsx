import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import VideoPopup from "./VideoPopup";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  media,
  source_code_link,
  openPopup,
}) => {

  const image = media.find((file) => !file.endsWith(".mp4") && !file.endsWith(".webm"));
  const video = media.find((file) => file.endsWith(".mp4") || file.endsWith(".webm"));

  return (
    <motion.div 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
    onClick={() => video && openPopup(video)}
    className="cursor-pointer"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div
          className='relative w-full h-full overflow-hidden rounded-2xl'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <img
              src={image}
              alt='project_media'
              className='w-full h-[180px] object-cover rounded-2xl transition-opacity duration-300'
            />
          
          
          <div className={`${source_code_link ? 'absolute inset-0 flex justify-end m-3 card-img_hover' : 'hidden'}`}>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



const Works = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          Following projects showcases my skills and experience...
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            openPopup={(video) => setPopupVideo(video)}
          />
        ))}
      </div>

      {/* Popup */}
      <VideoPopup 
        videoSrc={popupVideo} 
        onClose={() => setPopupVideo(null)} 
      />
    </>
  );
};

export default SectionWrapper(Works, "");
