import React from 'react'

//styled components
import { StyledProfile } from '../styles/profilePageStyles'

//components
import WelcomeCard from '../components/WelcomeCard'

const ProfilePage = () => {
  return (
    <StyledProfile>
        <WelcomeCard/>
    </StyledProfile>
  )
}

export default ProfilePage