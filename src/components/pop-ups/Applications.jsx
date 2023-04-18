import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setApplications, filterApplications } from "../../states/application";

import { StyledPopup } from "../../styles/PopupStyles";
import { AiOutlineClose } from "react-icons/ai";

// demo data
import { applicationData } from "../../data/projectData";

//components
import SearchBar from "../SearchBar";

const Applications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApplications(applicationData));
  });

  const { filteredApplications, filter, searchQuery } = useSelector(
    (state) => state.application
  );

  return (
    <StyledPopup>
      <div className="container">
        <button
          className="light-btn close"
          onClick={() => navigate("/projects")}
        >
          <AiOutlineClose />
        </button>
        <h3>My Applications ({filteredApplications.length})</h3>

        <StyledApplications>
          <SearchBar />
          <table>
            <tr>
              <th>Project</th>
              <th>Project ID</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Action</th>
            </tr>
            {filteredApplications.map((application) => (
              <tr>
                <td>
                  <h3>{application.topic}</h3>
                </td>
                <td>
                  <h6>{application.projectId}</h6>
                </td>
                <td>
                  <h3>{application.status}</h3>
                </td>
                <td>
                  <h3>{application.createdAt}</h3>
                </td>
                <td>
                  <button className="light-btn">View</button>
                </td>
              </tr>
            ))}
          </table>
        </StyledApplications>
      </div>
    </StyledPopup>
  );
};

const StyledApplications = styled.div`
  background-color: var(--lightgrey);
  padding: 1rem;
  margin-top: 2rem;
  tr {
    width: 100%;
  }
  td {
    padding: 1rem;
  }
`;
export default Applications;
