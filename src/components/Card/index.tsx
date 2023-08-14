import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoCustom, Cartao, CartaoInput } from './style'
import { remover, editar } from '../../store/reducers/listaDeContatos'

type Props = {
  nome: string
  email: string
  telefone: string
  id: number
}

export const Card = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  return (
    <>
      <Cartao>
        <div>
          <label htmlFor="">Nome</label>
          <CartaoInput
            type="text"
            disabled={!estaEditando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            editando={estaEditando}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <CartaoInput
            type="text"
            disabled={!estaEditando}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            editando={estaEditando}
          />
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <CartaoInput
            type="text"
            disabled={!estaEditando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            editando={estaEditando}
          />
        </div>
      </Cartao>
      <div>
        <BotaoCustom onClick={() => dispatch(remover(id))}>Remover</BotaoCustom>
        {estaEditando ? (
          <BotaoCustom
            onClick={() => {
              setEstaEditando(!estaEditando)
              dispatch(
                editar({
                  id,
                  nome,
                  email,
                  telefone
                })
              )
            }}
          >
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
