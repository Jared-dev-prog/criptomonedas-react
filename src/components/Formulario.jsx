import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9497ff; 
  border: none; 
  width: 100%; 
  padding: 8px; 
  color: #FFF; 
  font-weight: 700; 
  text-transform: uppercase; 
  font-size: 15px; 
  border-radius: 5px; 
  transition: background-color 300ms ease; 
  margin-top: 25px; 

  &:hover {
    cursor: pointer;
    background-color: #7A7DFE; 
  }
`

const Formulario = ({ setMonedas }) => {

  const [ criptos, setCriptos ] = useState([])
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige la moneda', monedas)
  const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige la criptomoneda', criptos)

  const [ error, setError ] = useState(false)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      
      setCriptos(arrayCriptos)
    }

    consultarAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    
    if([moneda, criptomoneda].includes('')) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 2000);
      return
    }

    setMonedas({
      moneda, 
      criptomoneda
    })
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit 
          type='submit'
          value='cotizar'
        />
      </form>    
    </>

  )
}

export default Formulario
