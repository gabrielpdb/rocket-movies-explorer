import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function MovieTag({ isNew, value }) {
  return (
    <Container isNew={isNew}>
      {value && !isNew ? value : 'Novo marcador'}
      {isNew ? <FiPlus /> : <FiX />}
    </Container>
  )
}
