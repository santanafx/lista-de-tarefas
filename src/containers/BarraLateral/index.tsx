import { Aside, BotaoAdd, BotaoAdicionar, Container } from './style'
import { useDispatch } from 'react-redux'
import { Titulo } from '../../styles'
import { useState } from 'react'
import Contato from '../../models/Contato'
import { adicionar } from '../../store/reducers/listaDeContatos'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const [ativo, setAtivo] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [somarId, setSomarId] = useState(1)

  const ativar = () => {
    setAtivo(!ativo)
  }

  const adicionarContato = () => {
    setSomarId(() => somarId + 1)
    const adicionarContato = new Contato(somarId, nome, email, telefone)

    dispatch(adicionar(adicionarContato))
  }

  return (
    <>
      <Aside>
        <Titulo>Adicione o contato:</Titulo>
        <BotaoAdd onClick={ativar}>+</BotaoAdd>
        <Container ativo={ativo}>
          <label>Nome:</label>
          <input
            value={nome}
            placeholder="Digite o nome do contato..."
            onChange={(e) => setNome(e.target.value)}
          />
        </Container>
        <Container ativo={ativo}>
          <label>Email:</label>
          <input
            value={email}
            placeholder="Digite o email do contato..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>
        <Container ativo={ativo}>
          <label>Contato:</label>
          <input
            value={telefone}
            placeholder="Digite o telefone do contato..."
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Container>
        <BotaoAdicionar onClick={adicionarContato}>Adicionar</BotaoAdicionar>
      </Aside>
    </>
  )
}
