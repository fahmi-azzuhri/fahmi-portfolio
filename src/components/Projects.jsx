import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { useNavigate } from "react-router-dom";
import ProjectImages from "./ProjectImages";

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  const handleViewAllClick = () => {
    navigate("/projects");
  };

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5">
        <div className="flex items-center justify-between mb-5">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Projects
          </div>
          <button
            type="button"
            onClick={handleViewAllClick}
            className="gap-x-2 text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          {projects.slice(0, 3).map((project, index) => (
            <a
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="drop-shadow-md card bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300 mb-2"
            >
              <div className="flex flex-col justify-center">
                <h1 className="font-medium text-lg">
                  {project["project-name"]}
                </h1>
                <p className="text-gray-500 text-md">
                  {project["project-desc"]}
                </p>
                <p className="text-blue-500 text-md py-3">
                  {project["project-url"]}
                </p>
                <ProjectImages images={project["project-images"]} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
