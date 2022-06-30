import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  border-radius: 10px;

  padding: 16px;

  background: ${({ isNew, theme }) =>
    isNew ? `transparent` : theme.COLORS.INPUT};
  border: ${({ isNew }) => (isNew ? `2px dashed #948F99` : 'none')};

  > svg {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`
