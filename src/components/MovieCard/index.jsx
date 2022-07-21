import { Tag } from '../Tag'
import { Container } from './styles'
import { Stars } from '../Stars'

export function MovieCard({ data, ...rest }) {
  const { title, description, rating, tags } = data

  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Stars rating={rating} />

      <p>{description}</p>

      <div className="tags">
        {tags.map(tag => (
          <Tag title={tag.name} key={tag.id} />
        ))}
      </div>
    </Container>
  )
}
