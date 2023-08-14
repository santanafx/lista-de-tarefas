import { Card } from '../../components/Card'
import { Titulo } from '../../styles'
import { Main } from './style'

const itens = [
  {
    id: 1,
    nome: 'Lucas',
    email: 'santanafx@hotmail.com',
    telefone: '997915854'
  },
  {
    id: 2,
    nome: 'Lucas',
    email: 'santanafx@hotmail.com',
    telefone: '997915854'
  },
  {
    id: 3,
    nome: 'Lucas',
    email: 'santanafx@hotmail.com',
    telefone: '997915854'
  }
]

export const ListaDeContatos = () => {
  return (
    <Main>
      <Titulo>Lista de contatos:</Titulo>
      <ul>
        {itens.map((e) => (
          <li key={e.nome}>
            <Card email={e.email} nome={e.nome} telefone={e.telefone} />
          </li>
        ))}
      </ul>
    </Main>
  )
}
