import React from "react";

// react router
import { Link, useLocation } from "react-router-dom";

// react icons
import { AiOutlineBook, AiOutlineQuestion, AiOutlineSearch } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineProject } from "react-icons/ai";

// styled components
import styled from "styled-components";
const Nav = () => {
  const location = useLocation().pathname;

  return (
    <StyledNav className="flex-col">
      <h1>
        Student <span>Hub</span>
      </h1>
      <ul>
        <h2>General</h2>
        <li className={location === "/" ? "active" : ""}>
          <Link to={"/"}>
            <GoHome /> My Profile
          </Link>
        </li>
        <li className={location === "/search" ? "active" : ""}>
          <Link to={'/search'}>
            <AiOutlineSearch /> Search{" "}
          </Link>
        </li>
        <li className={location === "/projects" ? "active" : ""}>
          <Link to={'/projects'}>
            <AiOutlineProject /> Projects{" "}
          </Link>
        </li>
        <li className={location === "/book-biding" ? "active" : ""}>
          <Link to={'/book-biding'}>
            <AiOutlineBook /> Book Biding{" "}
          </Link>
        </li>
        <li className={location === "/questions" ? "active" : ""}>
          <Link to={'/questions'}>
            <AiOutlineQuestion /> Q&A
          </Link>
        </li>
        <li className={location === "/blogs" ? "active" : ""}>
          <Link to={'/blogs'}>
            <TfiWrite /> Blogs
          </Link>
        </li>
        <h2>Settings</h2>

        <li className={location === "/account" ? "active" : ""}>
          <Link to={'/account'}>
            <VscAccount /> Account
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: white;
  min-width: fit-content;
  min-height: 100vh;
  padding: 3rem;
  align-items: flex-start;
  h1 {
    margin-bottom: 3rem;
    span {
      color: #9cfe47;
    }
  }
  ul {
    list-style: none;
    li {
      margin: 2rem 0rem;
      padding: 1rem;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    li:hover, .active {
      color: #7941f5;
      background-color: #e0ddfc;
      border-radius: 15px;
      border: 2px solid #7941f5;
    }
  }
`;

export default Nav;
