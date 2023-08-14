import { useState } from 'react'
import { BotaoCustom, BotaoCustomEditar, Cartao } from './style'

type Props = {
  nome: string
  email: string
  telefone: string
}

export const Card = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <>
      <Cartao>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" disabled value={nome} />
          {estaEditando ? <BotaoCustomEditar>Editar</BotaoCustomEditar> : ''}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" disabled value={email} />
          {estaEditando ? <BotaoCustomEditar>Editar</BotaoCustomEditar> : ''}
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input type="text" disabled value={telefone} />
          {estaEditando ? <BotaoCustomEditar>Editar</BotaoCustomEditar> : ''}
        </div>
      </Cartao>
      <div>
        <BotaoCustom>Remover</BotaoCustom>
        {estaEditando ? (
          <BotaoCustom onClick={() => setEstaEditando(!estaEditando)}>
            Salvar
          </BotaoCustom>
        ) : (
          <BotaoCustom onClick={() => setEstaEditando(!estaEditando)}>
            Editar
          </BotaoCustom>
        )}
      </div>
    </>
  )
}
