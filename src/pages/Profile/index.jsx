import { FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container, Avatar, Form } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">{<AiOutlineArrowLeft size={20} />} Voltar</Link>
      </header>
      <Avatar>
        <img src="https://github.com/gabrielpdb.png" />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" />
        </label>
      </Avatar>

      <Form>
        <div className="inputs">
          <Input icon={FiUser} value="Gabriel Pontel Dal Bó" />
          <Input icon={FiMail} value="gabrielpdalbo@gmail.com" />
        </div>
        <div className="inputs">
          <Input icon={FiLock} placeholder="Senha atual" type="password" />
          <Input icon={FiLock} placeholder="Nova senha" type="password" />
        </div>

        <Button title="Salvar" type="button" disabled />
      </Form>
    </Container>
  )
}
