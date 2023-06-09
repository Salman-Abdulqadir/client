import React from "react";


//styled
import styled from "styled-components";
import ProfileComponent from "./ProfileComponent";

const Biders = ({ biders }) => {
  return (
    <StyledBiders>
      <h3>Biders</h3>
      <table>
        <tr>
          <td>User</td>
          <td>Book title</td>
          <td></td>
        </tr>
        {biders.map((bid) => (
          <tr>
            <td>
              <ProfileComponent name={bid.username} />
            </td>
            <td>{bid.book.title}</td>
            <td>
              <button className="purple-btn">Accept</button>
            </td>
          </tr>
        ))}
      </table>
    </StyledBiders>
  );
};

const StyledBiders = styled.div`
  background-color: var(--lightgrey);
  padding: 1rem;
  border-radius: 10px;
`;
export default Biders;
