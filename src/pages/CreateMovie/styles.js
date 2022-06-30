import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 123px;
  overflow: hidden;

  > header {
    margin: 40px 0 24px 0;
    display: flex;
    justify-content: start;
  }

  > h1 {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
  }
`

export const Form = styled.form`
  width: 100%;
  overflow: auto;

  > .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    > textarea {
      grid-column: 1/3;
    }
  }

  .tags {
    background: #0d0c0f;
    display: flex;
    gap: 24px;
    padding: 16px;
    border-radius: 8px;
  }

  .buttons {
    display: flex;
    gap: 40px;
  }
`
