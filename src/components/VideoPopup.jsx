import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";


const VideoPopup = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-24 right-6 text-white text-white text-3xl font-bold"
      >
        <MdClose className="w-6 h-6" />
      </button>

      {/* Fullscreen Video */}
      <video
        src={videoSrc}
        controls
        autoPlay
        className="w-[90%] max-w-4xl rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default VideoPopup;
