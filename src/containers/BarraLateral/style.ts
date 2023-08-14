import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Aside = styled.aside`
  padding: 30px;
  background-color: ${variaveis.azulClaro};
  display: flex;
  flex-direction: column;
`

export const BotaoAdd = styled.button`
  padding: 5px 10px;
  color: black;
  background-color: ${variaveis.branco};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: ${variaveis.cinza};
  }
`

export const Container = styled.div<Props>`
  display: ${(props) => (props.ativo ? 'block' : 'none')};
  margin-top: 10px;
  margin-bottom: 10px;

  label {
    font-size: 1.1rem;
    font-weight: bold;
  }

  input {
    width: 90%;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin: 10px 20px;
    padding: 5px;
    font-size: 1.1rem;
  }
`

export const BotaoAdicionar = styled.button`
  padding: 5px 10px;
  color: black;
  background-color: ${variaveis.branco};
  border-radius: 10px;
  height: 50px;
  width: 150px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;

  &:hover {
    color: ${variaveis.cinza};
  }
`
