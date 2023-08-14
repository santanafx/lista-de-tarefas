import { useState } from 'react'
import { BotaoCustom, BotaoCustomEditar, Cartao } from './style'

export const Card = () => {
  const [ativo, setAtivo] = useState(false)

  const editar = () => {
    setAtivo(!editar)
  }
  return (
    <>
      <Cartao>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" disabled value={'teste'} />
          <BotaoCustomEditar>Editar</BotaoCustomEditar>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" disabled value={'teste'} />
          <BotaoCustomEditar>Editar</BotaoCustomEditar>
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input type="tel" disabled value={'teste'} />
          <BotaoCustomEditar>Editar</BotaoCustomEditar>
        </div>
      </Cartao>
      <div>
        <BotaoCustom>Remover</BotaoCustom>
        <BotaoCustom onClick={() => editar}>Editar</BotaoCustom>
      </div>
    </>
  )
}
