import React from 'react'
import { PageWrapper, PageInner, Content } from './styled'
import './App.scss'
import Quiz from './components/Quiz'

function App() {
  return (
    <PageWrapper>
      <PageInner>
        <h1>dmv permit test</h1>
        <Content>
          <Quiz />
        </Content>
      </PageInner>
    </PageWrapper>
  );
}

export default App;
