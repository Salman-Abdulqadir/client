import React from 'react'

import styled from 'styled-components'

// icons
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder='search'/>
        <button><AiOutlineSearch/></button>
    </div>
  )
}

const StyledSearch = styled.div`
    
`

export default SearchBar