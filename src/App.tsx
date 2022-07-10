import React from 'react';
import { RecoilRoot } from 'recoil';
import Editor from './components/edits/Editor';

function App() {
  return (
    <RecoilRoot>
      <Editor />
    </RecoilRoot>
  );
}

export default App;
