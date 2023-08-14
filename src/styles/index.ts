import { styled, createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
`

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`

export default EstiloGlobal
