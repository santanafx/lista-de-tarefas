import EstiloGlobal, { Container } from './styles'
import { BarraLateral } from './containers/BarraLateral'
import { ListaDeContatos } from './containers/ListaDeContatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
