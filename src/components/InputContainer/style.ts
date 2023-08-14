import styled from 'styled-components'

type Props = {
  ativo: boolean
}

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
