import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 123px;
  margin-top: 40px;

  > header {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 24px;

    button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.COLORS.RED};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  > main {
    > .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 19px;
      margin-bottom: 24px;

      h1 {
        font-size: 36px;
        font-weight: 500;
        line-height: 47px;
      }
    }

    > .author {
      display: flex;
      align-items: center;
      gap: 8px;

      font-size: 16px;
      font-weight: 400;
      line-height: 18.75px;
      margin-bottom: 40px;

      .name,
      .date {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .name img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
      }

      .date svg {
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }

    > .tags {
      display: flex;
      gap: 8px;
      margin-bottom: 40px;
    }

    > .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;

      display: flex;
      flex-direction: column;
      gap: 21px;
    }
  }
`
