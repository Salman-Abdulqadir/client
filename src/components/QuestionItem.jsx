import React from "react";

//components
import ProfileComponent from "./ProfileComponent";

// styles
import styled from "styled-components";

const QuestionItem = ({ question }) => {
  return (
    <StyledQuestion className="flex">
      <div className="flex-col votes">
        <h4>{question.votes} Votes</h4>
        <h4>{question?.answers?.length} Answers</h4>
      </div>
      <div className="flex-col">
        <h2>{question.title}</h2>
        <p>{question.content}</p>
        <div className="flex info">
          <div className="flex">
            {question.tags.map((tag) => (
              <button className="tag-btn">{tag}</button>
            ))}
          </div>
          <div className="flex">
            <ProfileComponent name={question.author} />
            <h4>{question.createdAt}</h4>
          </div>
        </div>
      </div>
    </StyledQuestion>
  );
};

const StyledQuestion = styled.div`
  gap: 5rem;
  border-bottom: 2px solid var(--darkgrey);
  padding: 1.5rem;
  h4 {
    min-width: fit-content;
    font-weight: bold;
  }
  .votes {
    min-width: fit-content;
  }
  .info {
    width: 100%;
    justify-content: space-between;
  }
  
`;

export default QuestionItem;
