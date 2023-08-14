import { useState } from 'react'

import {
  Aside,
  Botao,
  BotaoAdd,
  Input,
  InputContainer,
  Label,
  Titulo
} from './style'

export const BarraLateral = () => {
  const [ativo, setAtivo] = useState(false)

  return (
    <>
      <Aside>
        <Titulo>Adicione o contato:</Titulo>
        <BotaoAdd
          onClick={() => {
            setAtivo(!ativo)
          }}
        >
          +
        </BotaoAdd>
        <InputContainer ativo={ativo}>
          <Label>Nome:</Label>
          <Input placeholder="Digite o nome do contato..." />
        </InputContainer>
        <InputContainer ativo={ativo}>
          <Label>Email:</Label>
          <Input placeholder="Digite o email do email..." />
        </InputContainer>
        <InputContainer ativo={ativo}>
          <Label>Telefone:</Label>
          <Input placeholder="Digite o telefone do telefone..." />
          <Botao>Adicionar</Botao>
        </InputContainer>
      </Aside>
    </>
  )
}
