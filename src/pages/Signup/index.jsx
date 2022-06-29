import { Container, Form, Image } from './styles'
import { Input } from '../../components/Input'
import { FiUser, FiLock, FiMail } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Signup() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/login">
          {<AiOutlineArrowLeft size={20} />} Voltar para o login
        </Link>
      </Form>
      <Image />
    </Container>
  )
}
