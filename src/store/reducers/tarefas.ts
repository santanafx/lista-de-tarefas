import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
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
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionar } = tarefasSlice.actions

export default tarefasSlice.reducer
