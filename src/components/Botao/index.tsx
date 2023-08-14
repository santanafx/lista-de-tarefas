import React, { ReactNode } from 'react'
import { Button } from './style'

type Props = {
  children: ReactNode
}

export const Botao = ({ children }: Props) => {
  return <Button>{children}</Button>
}
