import { Button } from './style'

type Props = {
  texto: string
}

export const Botao = ({ texto }: Props) => {
  return <Button>{texto}</Button>
}
