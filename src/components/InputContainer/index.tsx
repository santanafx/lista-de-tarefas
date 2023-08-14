import { Container } from './style'

type Props = {
  label: string
  descricao: string
  ativo: boolean
}

export const InputContainer = ({ label, descricao, ativo }: Props) => {
  return (
    <Container ativo={ativo}>
      <label>{label}</label>
      <input placeholder={descricao} />
    </Container>
  )
}
