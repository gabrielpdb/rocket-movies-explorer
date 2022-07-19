import { Container, Profile } from './styles'
import { Input } from '../Input'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input placeholder="Pesquisar pelo título" />
      <Profile to="/profile">
        <div>
          <p>{user.name}</p>

          <a onClick={signOut}>sair</a>
        </div>

        <img src={avatarUrl} alt="Avatar do usuário" />
      </Profile>
    </Container>
  )
}
