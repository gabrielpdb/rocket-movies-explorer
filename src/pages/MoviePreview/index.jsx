import { useParams, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Tag } from '../../components/Tag'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Stars } from '../../components/Stars'

export function MoviePreview() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [userAvatar, setUserAvatar] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`)
      response.data.created_at.replaceAll('-', '/').replace(' ', ' às ')

      setData(response.data)
    }

    fetchNote()
  }, [])

  useEffect(() => {
    const avatarUrl = data.user_avatar
      ? `${api.defaults.baseURL}/files/${data.user_avatar}`
      : avatarPlaceholder

    setUserAvatar(avatarUrl)
  })

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <header>
          <button onClick={handleBack}>
            {<FiArrowLeft size={12} />}Voltar
          </button>
        </header>
        {data && (
          <main>
            <div className="title">
              <h1>{data.title}</h1>
              {data.rating && <Stars rating={data.rating} />}
            </div>
            <div className="author">
              <div className="name">
                <img src={userAvatar} alt="Imagem do autor" />
                <p>Por {data.user_name}</p>
              </div>
              <div className="date">
                <FiClock size={16} />
                <p>{data.created_at}</p>
              </div>
            </div>
            <div className="tags">
              {data.tags &&
                data.tags.map(tag => <Tag title={tag.name} key={tag.id} />)}
            </div>
            <div className="description">{data.description}</div>
          </main>
        )}
      </Container>
    </>
  )
}
