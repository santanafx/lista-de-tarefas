import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Aside = styled.aside`
  padding: 30px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`

export const BotaoAdd = styled.button`
  padding: 5px 10px;
  color: black;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: grey;
  }
`

export const InputContainer = styled.div<Props>`
  display: ${(props) => (props.ativo ? 'block' : 'none')};
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 10px 20px;
  padding: 5px;
  font-size: 1.1rem;
`

export const Botao = styled.button`
  padding: 5px 10px;
  color: black;
  background-color: white;
  border-radius: 5%;
  height: 50px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: grey;
  }
`
