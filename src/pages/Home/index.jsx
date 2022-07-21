import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { IoMdAdd } from 'react-icons/io'
import { MovieCard } from '../../components/MovieCard'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleDetails(id) {
    console.log('foi')
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <div className="header">
          <h1>Meus filmes</h1>
          <Button title="Adicionar filme" icon={IoMdAdd} />
        </div>
        <div className="moviesList">
          {notes &&
            notes.map(note => (
              <MovieCard
                onClick={() => handleDetails(note.id)}
                key={note.id}
                data={note}
              />
            ))}
        </div>
      </Container>
    </>
  )
}
