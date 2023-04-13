import React from "react";

//styled components
import { StyledProfile } from "../styles/profilePageStyles";

//components
import WelcomeCard from "../components/WelcomeCard";
import SearchBar from "../components/SearchBar"

const ProfilePage = () => {
  return (
    <StyledProfile className="flex">
      <div className="column column-md">
        <SearchBar />
        <WelcomeCard />
      </div>
      <div className="column column-md">
        <SearchBar />
        <WelcomeCard />
      </div>

    </StyledProfile>
  );
};

export default ProfilePage;
