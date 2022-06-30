import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  color: ${({ theme }) => theme.COLORS.TEXT_GRAY};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
    }
  }

  > svg {
    margin-left: 16px;
  }
`
