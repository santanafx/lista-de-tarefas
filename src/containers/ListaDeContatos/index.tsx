import { Titulo } from '../../styles'
import { BotaoCustomEditar, BotaoCustomRemover, Card, Main } from './style'

export const ListaDeContatos = () => {
  return (
    <Main>
      <Titulo>Lista de contatos:</Titulo>
      <Card>
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
      </Card>
      <BotaoCustomRemover>Remover</BotaoCustomRemover>
    </Main>
  )
}
