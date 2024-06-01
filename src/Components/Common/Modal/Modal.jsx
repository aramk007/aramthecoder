import React, { useRef, useState, useEffect } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

// CustomModal component to display project details in a modal
export default function CustomModal({ modalIsOpen, setIsOpen, project }) {
  // Custom styles for the modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: "0",
      overflow: "visible",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent black for dimming effect
    },
  };

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // References and state variables for video controls
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing
  const [duration, setDuration] = useState(0); // State to store video duration
  const [currentTime, setCurrentTime] = useState(0); // State to store current time of video

  // useEffect hook to set up event listeners for video metadata and time updates
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Function to handle loaded metadata (e.g., duration)
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      // Function to handle time updates
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      // Add event listeners
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);

      // Clean up event listeners on component unmount
      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  // Function to toggle play/pause state of the video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video if it's currently playing
      } else {
        videoRef.current.play(); // Play the video if it's currently paused
      }
      setIsPlaying(!isPlaying); // Update the play/pause state
    }
  };

  // Function to handle progress bar changes
  const handleProgressChange = (event) => {
    if (videoRef.current) {
      videoRef.current.currentTime = event.target.value; // Update the current time of the video
      setCurrentTime(event.target.value); // Update the current time state
    }
  };

  // Function to format time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="wrapper">
      <AnimatePresence>
        {modalIsOpen && (
          // Modal component from react-modal library
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Project Modal"
            ariaHideApp={false}
          >
            {/* Animated overlay using framer-motion */}
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated content container using framer-motion */}
              <motion.div
                className="modal-content"
                initial={{ scale: 0.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.1, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Close button to close the modal */}
                <button className="close-button" onClick={closeModal}>
                  &times;
                </button>
                {/* Container for the modal content */}
                <div className="modal-container">
                  {/* Project title */}
                  <h1 className="project-name-heading">{project.name}</h1>
                  {/* Video player with custom controls */}
                  <div className="video-placeholder">
                    <video ref={videoRef} width="100%" height="100%">
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-controls">
                      {/* Play/Pause button */}
                      <button
                        className="play-pause-button"
                        onClick={togglePlayPause}
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button>
                      {/* Progress bar */}
                      <input
                        type="range"
                        className="progress-bar"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                      />
                      {/* Time display */}
                      <span className="time-display">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                  {/* Buttons for visiting live site and GitHub repository */}
                  <div className="button-group">
                    <button
                      className="action-button"
                      onClick={() => window.open(project.liveSiteUrl, "_blank")}
                    >
                      Visit Live Site
                    </button>
                    <button
                      className="action-button"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      View on GitHub
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
