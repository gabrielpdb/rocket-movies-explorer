import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;

  background: ${({ theme }) => theme.COLORS.CARD};
  border-radius: 16px;

  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 31.65px;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    margin-bottom: 8px;
  }

  .stars {
    color: ${({ theme }) => theme.COLORS.RED};
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 15px;
  }

  > p {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_GRAY};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 15px;
  }

  .tags {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
  }
`
