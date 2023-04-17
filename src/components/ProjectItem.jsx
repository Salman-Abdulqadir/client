import React from 'react'
import styled from 'styled-components'

//components
import ProfileComponent from './ProfileComponent'


const ProjectItem = ({project}) => {
  return (
    <StyledProjectItem>
        <div className="flex">
            <ProfileComponent name={project.postedBy}></ProfileComponent>
            <h6>View Project</h6>
        </div>
        <h4>{project.topic}</h4>
        <p>{project.description}</p>
        <h4>Related to:</h4>
        <div className="flex">
            {project.tags.map((tag, index) => <button key={index} className='tag-btn'>{tag}</button>)}
        </div>
    </StyledProjectItem>
  )
}

const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0rem;
    h6{
        min-width: fit-content;
    }
    h4{
        font-size: 1rem;
        font-weight: bold;
    }
`


export default ProjectItem