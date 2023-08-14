import { configureStore } from '@reduxjs/toolkit'

import listaDeContatosReducer from './reducers/listaDeContatos'

const store = configureStore({
  reducer: {
    listaDeContatos: listaDeContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
