import React from 'react'
import { PageWrapper, PageInner, Content } from './styled'
import './App.scss'

function App() {
  return (
    <PageWrapper>
      <PageInner>
        <h1>this is your dmv practice test</h1>
        <Content>
          <div>
            <ul>Question
              <li>Choice 1</li>
              <li>Choice 2</li>
              <li>Choice 3</li>
            </ul>
          </div>
          <button>Next Question</button>
        </Content>
      </PageInner>
    </PageWrapper>
  );
}

export default App;
