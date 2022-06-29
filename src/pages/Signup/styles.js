import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > a {
    width: 100%;
    text-align: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.RED};
  }
`

export const Image = styled.div`
  flex: 1;
  background: url(${banner}) no-repeat center center;
  background-size: cover;
`
