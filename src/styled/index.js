import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  background: #333246;
`

export const PageInner = styled.div`
  position: absolute;
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