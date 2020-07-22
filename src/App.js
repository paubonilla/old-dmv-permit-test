import React from 'react'
import { PageWrapper, PageInner, Content } from './styled'
import './App.scss'
import Quiz from './components/Quiz'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

function App() {
  return (
    <PageWrapper>
      <PageInner>
        <h1>DMV Permit Practice Test</h1>
        <Content>
          <Quiz />
        </Content>
        <ClassCounter />
        <HookCounter />
      </PageInner>
    </PageWrapper>
  );
}

export default App;
