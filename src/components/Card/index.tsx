import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoCustom, BotaoCustomEditar, Cartao } from './style'
import { remover } from '../../store/reducers/listaDeContatos'

type Props = {
  nome: string
  email: string
  telefone: string
  id: number
}

export const Card = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
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
        <BotaoCustom onClick={() => dispatch(remover(id))}>Remover</BotaoCustom>
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
