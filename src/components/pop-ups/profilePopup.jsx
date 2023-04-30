import React from 'react'

//components
import Profile from '../../pages/Profile'

// styles
import styled from 'styled-components'
import { StyledPopup } from '../../styles/PopupStyles'


const profilePopup = () => {
  return (
    <StyledProfilePopup>
        <div className="container">
            <Profile/>
        </div>
    </StyledProfilePopup>
  )
}

const StyledProfilePopup = styled(StyledPopup)`

`
export default profilePopup