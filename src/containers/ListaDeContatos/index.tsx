import { useSelector } from 'react-redux'
import { Card } from '../../components/Card'
import { Titulo } from '../../styles'
import { Main } from './style'
import { RootReducer } from '../../store'

export const ListaDeContatos = () => {
  const estado = useSelector((state: RootReducer) => state.listaDeContatos)
  return (
    <Main>
      <Titulo>Lista de contatos:</Titulo>
      <ul>
        {estado.itens.map((e) => (
          <li key={e.nome}>
            <Card
              email={e.email}
              nome={e.nome}
              telefone={e.telefone}
              id={e.id}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}
