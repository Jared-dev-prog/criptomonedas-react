import { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: #FFF; 
  display: block; 
  font-family: 'Lato', sans-serif; 
  font-size: 20px; 
  font-weight: 700; 
  margin: 15px 0; 
`

const Select = styled.select`
  width: 100%; 
  padding: 8px; 
  border-radius: 5px; 
`

const useSelectMonedas = (label, monedas) => {

  const [ state, setState ] = useState('')

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {monedas.map(moneda => (
          <option
            key={moneda.id}
            value={moneda.id}
          >{moneda.nombre}</option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas
