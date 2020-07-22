import styled, { css } from 'styled-components'

export const PageWrapper = styled.div`
  color: #212738;
  position: relative;
  width: 800px;
  @media (max-width: 768px) {
    width: 800px;
  }
  @media (max-width: 470px) {
    width: 400px;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  margin: 0 auto;
`

export const PageInner = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  background: #e8e8e8;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
      list-style: none;
  }
`

export const QuizContentStyle = styled(Content)`
  padding: 3rem 0;
`

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .button {
    margin: 1rem 0;
    padding: 0.75rem;
    border: none;
    outline: none;
    border: 1px solid;
    border-radius: 10px;
    background: rgb(181, 217, 250);
    cursor: pointer;
    /* ${({ primary }) => primary ?
    css`
      background: rgb(181, 217, 250);
    ` :
    css`
      background: rgba(104, 249, 205);
    `} */
  }
`

export const Result = styled.div`
  margin: 2rem 0;

  ul {
    list-style: none;
  }
  
  .results {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: auto;
    border: 1px solid;
    border-radius: 10px;
    margin: 15px 0;
  }
  
  .correct-answer {
    /* background-color: lightgreen;
    padding: 10px;
    border-radius: 10px; */
  }
`