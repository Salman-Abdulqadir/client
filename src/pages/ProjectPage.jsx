import React from "react";
import styled from "styled-components";

// redux
// import { useSelector } from "react-redux";
// components
import SearchBar from "../components/SearchBar";
import Projects from "../components/Projects";
// import ProjectDetails from "../components/pop-ups/ProjectDetails";

const ProjectPage = () => {
    const projects = [
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
      { topic: "Market Analysis and Expansion Strategy", applicants: 34 },
    ];

    // const popup = useSelector((state) => state.project.popup)
  return (
    <StyledProjectPage>

      <div className="search">
        <SearchBar className="searchbar" />
        <div className="flex">
          <button className="light-btn">My Applications</button>
          <button className="purple-btn">+ Create Project</button>
        </div>
      </div>
      <div className="flex">
        <div className="container container-md">
          <h3>My Projects</h3>
          <table>
            <tr>
              <th>Projects</th>
              <th>Applicant</th>
              <th>Action</th>
            </tr>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.topic}</td>
                <td>
                  <h6>{project.applicants}</h6>
                </td>
                <td>
                  <button className="purple-btn">View</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="container container-md">
          <Projects />
        </div>
      </div>
    </StyledProjectPage>
  );
};

const StyledProjectPage = styled.div`
  padding: 2rem;
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .container {
    flex: 1;
    height: 80vh;
  }
  td button {
    display: block;
    font-size: 10px;
  }
  h3 {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    th {
      text-align: left;
    }
    td,
    th {
      padding: 1rem;
    }
    h6 {
      font-size: 2rem;
    }
  }
`;
export default ProjectPage;
