import { Container, Profile } from './styles'
import { useNavigate, useLocation } from 'react-router-dom'
import { Input } from '../Input'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useEffect } from 'react'

export function Header({ setSearch }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(search) {
    navigate('/', { state: search })
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input
        placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearch(e.target.value)
          }
        }}
        value={location.state ? location.state : ''}
      />
      <Profile to="/profile">
        <div>
          <p>{user.name}</p>

          <button onClick={signOut}>sair</button>
        </div>

        <img src={avatarUrl} alt="Avatar do usuário" />
      </Profile>
    </Container>
  )
}
