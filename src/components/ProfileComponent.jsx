import React from 'react'
import styled from 'styled-components'

const ProfileComponent = ({profile}) => {
  return (
    <StyledProfile className='flex'>
        <div className="icon">{profile?.firstname[0]}</div>
        <h4>{profile?.firstname}</h4>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
width: 100%;
    .icon{
        font-size: 1rem;
        padding: 1rem;
        border-radius: 50%;
        background-color: var(--primary);
        color: white;
    }
`
export default ProfileComponent