import { Tag } from '../Tag'
import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function MovieCard({ title, description, tags }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div className="stars">
        <AiFillStar size={12} />
        <AiFillStar size={12} />
        <AiFillStar size={12} />
        <AiFillStar size={12} />
        <AiOutlineStar size={12} />
      </div>

      <p>{description}</p>

      <div className="tags">
        {tags.map(tag => (
          <Tag title={tag.name} key={tag.id} />
        ))}
      </div>
    </Container>
  )
}
