import React from "react";
import ProjectItem from "./ProjectItem";



const Projects = () => {
  const data = [
    {
      topic: "Interesting Project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis?",
      postedBy: "Ahmed",
      createdAt: "11-11-2023",
      deadline: "12-12-2023",
      skillset: ["python", "economy"],
      tags: ["programming", "business", "software"],
    },
    {
      topic: "Interesting Project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis?",
      postedBy: "Ahmed",
      createdAt: "11-11-2023",
      deadline: "12-12-2023",
      skillset: ["python", "economy"],
      tags: ["programming", "business", "software"],
    },
    {
      topic: "Interesting Project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolorem accusamus, tempore eligendi enim nesciunt pariatur distinctio incidunt quibusdam sapiente molestiae, nam, architecto cupiditate facilis?",
      postedBy: "Ahmed",
      createdAt: "11-11-2023",
      deadline: "12-12-2023",
      skillset: ["python", "economy"],
      tags: ["programming", "business", "software"],
    },
  ];
  return (
    <div>
      <h3>Projects</h3>
      {data.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
