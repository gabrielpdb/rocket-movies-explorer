import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Container } from './styles'

export function Stars({ rating }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    setStars([])
    for (let index = 1; index <= 5; index++) {
      if (index <= rating) {
        setStars(prevStars => [
          ...prevStars,
          <AiFillStar size={12} key={index} />
        ])
      } else {
        setStars(prevStars => [
          ...prevStars,
          <AiOutlineStar size={12} key={index} />
        ])
      }
    }
  }, [])

  return <Container className="stars">{stars}</Container>
}
