import styled from 'styled-components'

export const Container = styled.span`
  padding: 5px 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #e5e5e5;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.TAG};
`
