import React, { useState } from "react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleGitHubClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank");
    } else {
      setModalMessage(
        "This repository is private. You don't have permission to view it."
      );
      setShowModal(true);
    }
  };

  const handleLiveClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else {
      setModalMessage(
        "This site is currently not live and hasn't been hosted yet."
      );
      setShowModal(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
        {project.video && (
          <button
            className="absolute inset-0 flex items-center justify-center z-10"
            onClick={() => setShowVideo(!showVideo)}
            aria-label={showVideo ? "Show image" : "Play video"}
          >
            {!showVideo && (
              <div className="w-16 h-16 bg-blue-600 bg-opacity-75 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </button>
        )}

        {showVideo && project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 ">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 ">
          <a
            onClick={handleGitHubClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View on GitHub</span>
          </a>

          <a
            onClick={handleLiveClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex  items-center justify-center z-50 bg-black/100 backdrop-blur-[5px] ">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Notice
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
