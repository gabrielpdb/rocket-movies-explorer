import { Container } from './styles'

export function Button({ title, color, icon: Icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest} color={color}>
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
