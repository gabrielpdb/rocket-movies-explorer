import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  border: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.INPUT};
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  }
`
