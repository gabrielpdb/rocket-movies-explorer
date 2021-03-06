import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  background-color: ${props =>
    props.color ? props => props.color : ({ theme }) => theme.COLORS.RED};
  color: ${({ theme, color }) => (color ? theme.COLORS.RED : theme.COLORS.TAG)};

  border: 0;
  padding: 0 16px;
  margin-top: 24px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
