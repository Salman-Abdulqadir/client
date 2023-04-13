import React from "react";

//styled components
import { StyledProfile } from "../styles/profilePageStyles";

//components
import WelcomeCard from "../components/WelcomeCard";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";
import Badges from "../components/Badges";

const ProfilePage = () => {
  return (
    <StyledProfile>
      <div className="welcome-card">
        <SearchBar />
        <WelcomeCard />
      </div>
      <Stats className="stats" />
      <Badges className="badges"/>
      <div className="blogs container"></div>
      <div className="projects container"></div>
      <div className="users container"></div>
    </StyledProfile>
  );
};

export default ProfilePage;
