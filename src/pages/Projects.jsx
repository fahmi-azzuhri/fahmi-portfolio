import { getConfigData } from "../data/configReader";
import ProjectImages from "../components/ProjectImages";

export default function Projects() {
  const configData = getConfigData();
  const projects = configData.projects;

  return (
    <div className="px-2 py-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5">
        <div className="font-medium text-lg flex items-center gap-x-2 mb-5">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          All Projects
        </div>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={index}
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
