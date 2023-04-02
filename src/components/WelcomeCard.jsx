import React from "react";

//styled components
import { StyledCard } from "../styles/profilePageStyles";

//images
import profileStudying from "../images/profile-studying.jpg";

// components
import SearchBar from "./SearchBar";

const WelcomeCard = () => {
  return (
    <>
      <SearchBar />
      <StyledCard className="flex">
        <div>
          <h1>
            Welcome Back, <span>Ashley</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maxime dolore consectetur eaque dignissimos eius aspernatur omnis
            cupiditate dicta autem, sed molestiae mollitia, corrupti minus.
          </p>
        </div>
        <img src={profileStudying} alt="" />
      </StyledCard>
    </>
  );
};

export default WelcomeCard;
