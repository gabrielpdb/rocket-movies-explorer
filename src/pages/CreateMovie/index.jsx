import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return (
    <>
      <Header />
      <Container>
        <header>
          <Link to="/">{<FiArrowLeft size={12} />}Voltar</Link>
        </header>
        <h1>Novo filme</h1>
        <Form>
          <div className="inputs">
            <Input type="text" placeholder="Título" />
            <Input
              type="number"
              max="5"
              min="0"
              placeholder="Sua nota (de 0 a 5)"
            />

            <Textarea placeholder="Observações" />
          </div>

          <Section title="Marcadores">
            <div className="tags">
              <MovieTag value="React" />
              <MovieTag isNew={true} />
            </div>
          </Section>

          <div className="buttons">
            <Button title={'Excluir filme'} color="black" />
            <Button title={'Salvar alterações'} />
          </div>
        </Form>
      </Container>
    </>
  )
}
