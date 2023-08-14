import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const Button = styled.button`
  padding: 5px 10px;
  color: ${variaveis.preto};
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
