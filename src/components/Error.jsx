import React from 'react'
import styled from 'styled-components'

const Aviso = styled.div`
  background-color: #ff0000ab; 
  text-align: center; 
  padding: 6px; 
  font-family: 'Lato', sans-serif; 
  color: #FFF; 
  font-weight: 700; 
  border-radius: 5px; 
`

const Error = ({children}) => {
  return (
    <Aviso>
      {children}
    </Aviso>
  )
}

export default Error