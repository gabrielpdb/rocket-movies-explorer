import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useState } from 'react'

export function CreateMovie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    if (newTag != '') {
      setTags(prevState => [...prevState, newTag])

      setNewTag('')
    }
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  const navigate = useNavigate()

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título do filme')
    }
    if (!rating) {
      return alert('Informe uma nota para o filme')
    }
    if (!description) {
      return alert('Informe uma descrição para o filme')
    }

    if (newTag) {
      return alert(
        'Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
      )
    }

    await api.post('/movie_notes', {
      title,
      description,
      tags,
      rating
    })

    alert('Filme adicionado com sucesso!')
    navigate('/')
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <Container>
        <header>
          <button onClick={handleBack}>
            {<FiArrowLeft size={12} />}Voltar
          </button>
        </header>
        <h1>Novo filme</h1>
        <Form>
          <div className="inputs">
            <Input
              type="text"
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="number"
              max="5"
              min="0"
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieTag
                  value={tag}
                  key={String(index)}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MovieTag
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button title={'Excluir filme'} color="black" />
            <Button title={'Salvar alterações'} onClick={handleNewNote} />
          </div>
        </Form>
      </Container>
    </>
  )
}
