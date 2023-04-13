import React from 'react'

import styled from 'styled-components'

// icons
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <StyledSearch>
        <input type="text" placeholder='search...'/>
        <button><AiOutlineSearch/></button>
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    input{
      width: 100%;
    }
    button{
      background-color: white;
    }
`

export default SearchBar