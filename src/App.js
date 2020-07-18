import React from 'react'
import { PageWrapper, PageInner, Content } from './styled'
import Quiz from './components/Quiz'
import './App.scss'

function App() {
  return (
    <PageWrapper>
      <PageInner>
        <h1>this is your dmv practice test</h1>
        <Content>
          <Quiz />
        </Content>
      </PageInner>
    </PageWrapper>
  );
}

export default App;
