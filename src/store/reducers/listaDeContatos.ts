import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Jose',
      email: 'santanafx@hotmail.com',
      telefone: 'teste'
    },
    {
      id: 2,
      nome: 'Alfredo',
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

const listaDeContatosSlice = createSlice({
  name: 'listaDeContatos',
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
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = listaDeContatosSlice.actions

export default listaDeContatosSlice.reducer
