import styled from "styled-components";

export const StyledProfile = styled.div`
    .welcome-card{
        grid-area: welcome-card;
    }
    .stats{
        grid-area: stats;
    }
    .badges{
        grid-area: badges;
    }
    .blogs{
        grid-area: blogs;
    }
    .projects{
        grid-area: projects;
    }
    .users{
        grid-area: users;
    }
    display: grid;
    grid-template-areas: "welcome-card welcome-card stats badges"
                         "blogs blogs projects users";
    gap: 2rem;
    margin: 3rem;
    width: 100%;
`;
export const StyledCard = styled.div`
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 2rem;
  justify-content: space-between;
  span{
    font-size: 3rem;
  }
  img {
    width: 15rem;
  }
`;
export const StyledStat = styled.div`
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 2rem;
  h3 {
    margin-bottom: 1rem;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    text-align: center;
  }
`;

export const StyledBadges = styled.div`
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  h3 {
    margin-bottom: 1rem;
  }
`;
