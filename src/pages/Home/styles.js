import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  margin: 50px auto;
  padding: 0 123px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;

    > h1 {
      font-size: 32px;
      font-weight: 400;
    }

    > button {
      max-width: 207px;
    }
  }

  .moviesList {
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
  }
`
