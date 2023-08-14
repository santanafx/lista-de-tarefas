import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 30px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
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
