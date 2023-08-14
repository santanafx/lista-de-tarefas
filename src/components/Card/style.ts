import { styled } from 'styled-components'
import { Button } from '../Botao/style'

type Props = {
  editando: boolean
}

export const Cartao = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  background-color: lightgreen;

  div {
    margin: 15px 0;
  }
`

export const CartaoInput = styled.input<Props>`
  border: 1px solid white;
  width: 90%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 10px 20px;
  padding: 5px;
  font-size: 1.1rem;
  background-color: ${(props) => (props.editando ? 'white' : 'lightgreen')};
  color: black;
`

export const BotaoCustomEditar = styled(Button)`
  margin-right: 10px;
  font-size: 0.9rem;
  padding: 10px 15px;
  height: auto;
  width: auto;
  font-weight: bold;
`

export const BotaoCustom = styled(Button)`
  margin-right: 10px;
  font-size: 0.9rem;
  padding: 10px 15px;
  font-weight: bold;
  margin-bottom: 30px;
`
