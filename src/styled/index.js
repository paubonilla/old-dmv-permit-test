import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
`

export const PageInner = styled.div`
  position: absolute;
  padding: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
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