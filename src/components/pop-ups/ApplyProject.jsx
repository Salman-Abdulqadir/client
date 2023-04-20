import React from "react";
import { useNavigate } from "react-router-dom";
//icons
import { AiOutlineClose } from "react-icons/ai";

// styled
import styled from "styled-components";
import { StyledPopup } from "../../styles/PopupStyles";

const ApplyProject = () => {
  const navigate = useNavigate();
  return (
    <StyledPopup>
      <div className="container">
        <h3>Apply</h3>
        <button
          className="light-btn close"
          onClick={() => navigate("/projects")}
        >
          <AiOutlineClose />
        </button>
      </div>
    </StyledPopup>
  );
};

export default ApplyProject;
