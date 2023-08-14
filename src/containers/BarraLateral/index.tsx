import { Aside, BotaoAdd } from './style'
import { Titulo } from '../../styles'
import { InputContainer } from '../../components/InputContainer'
import { Botao } from '../../components/Botao'
import { useState } from 'react'

export const BarraLateral = () => {
  const [ativo, setAtivo] = useState(false)

  const ativar = () => {
    setAtivo(!ativo)
  }

  return (
    <>
      <Aside>
        <Titulo>Adicione o contato:</Titulo>
        <BotaoAdd onClick={ativar}>+</BotaoAdd>
        <InputContainer
          label="Nome"
          descricao="Digite o nome do contato..."
          ativo={ativo}
        />
        <InputContainer
          label="Email"
          descricao="Digite o email do contato..."
          ativo={ativo}
        />
        <InputContainer
          label="Telefone"
          descricao="Digite o telefone do contato..."
          ativo={ativo}
        />
        <Botao texto={'Adicionar'}></Botao>
      </Aside>
    </>
  )
}
