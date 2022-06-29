import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Rodrigo Gonçalves</p>

          <Link to="/login">sair</Link>
        </div>

        <img src="https://github.com/gabrielpdb.png" alt="" />
      </Profile>
    </Container>
  )
}
