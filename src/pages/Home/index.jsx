import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { IoMdAdd } from 'react-icons/io'
import { MovieCard } from '../../components/MovieCard'

export function Home() {
  const tags = [
    { id: 1, name: 'Ficção Científica' },
    { id: 2, name: 'Drama' },
    { id: 3, name: 'Suspense' }
  ]

  return (
    <>
      <Header />
      <Container>
        <div className="header">
          <h1>Meus filmes</h1>
          <Button title="Adicionar filme" icon={IoMdAdd} />
        </div>
        <div className="moviesList">
          <MovieCard
            title="Interestellar"
            description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
            tags={tags}
          />
          <MovieCard
            title="Interestellar"
            description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
            tags={tags}
          />
          <MovieCard
            title="Interestellar"
            description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
            tags={tags}
          />
          <MovieCard
            title="Interestellar"
            description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."
            tags={tags}
          />
        </div>
      </Container>
    </>
  )
}
