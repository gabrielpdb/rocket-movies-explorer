import { FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container, Avatar, Form } from './styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { api } from '../../services/api'

export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      oldPassword: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })

    navigate('/')
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          {<AiOutlineArrowLeft size={20} />} Voltar
        </button>
      </header>
      <Avatar>
        <img src={avatar} />
        <label htmlFor="avatar">
          <FiCamera />
          <input
            type="file"
            id="avatar"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            onChange={handleChangeAvatar}
          />
        </label>
      </Avatar>

      <Form>
        <div className="inputs">
          <Input
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <Input
            icon={FiLock}
            placeholder="Senha atual"
            type="password"
            onChange={e => setPasswordOld(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Nova senha"
            type="password"
            onChange={e => setPasswordNew(e.target.value)}
          />
        </div>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
