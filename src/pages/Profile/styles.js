import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.CARD};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 144px;

    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -90px auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const Form = styled.form`
  width: 340px;
  margin: 64px auto;

  > .inputs {
    margin-bottom: 24px;
  }
`
