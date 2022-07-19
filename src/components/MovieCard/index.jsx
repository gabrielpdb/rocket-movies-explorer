import { Tag } from '../Tag'
import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export function MovieCard({ title, description, tags, rating }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    setStars([])
    for (let index = 1; index <= 5; index++) {
      if (index <= rating) {
        setStars(prevStars => [...prevStars, <AiFillStar size={12} />])
      } else {
        setStars(prevStars => [...prevStars, <AiOutlineStar size={12} />])
      }
    }
  }, [])

  return (
    <Container>
      <h2>{title}</h2>
      <div className="stars">{stars}</div>

      <p>{description}</p>

      <div className="tags">
        {tags.map(tag => (
          <Tag title={tag.name} key={tag.id} />
        ))}
      </div>
    </Container>
  )
}
