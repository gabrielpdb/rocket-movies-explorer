import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;
  gap: 64px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};

  > a {
    font-size: 24px;
    font-weight: 700;
  }
`

export const Profile = styled(Link)`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    > p {
      color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
      font-size: 14px;
      font-weight: 700;
    }

    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
      font-size: 14px;
      font-weight: 400;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: ${({ theme }) => theme.COLORS.GRAY};
  }
`
