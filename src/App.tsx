import React from 'react';
import { RecoilRoot } from 'recoil';
import AppManager from './components/AppManager';
import Editor from './components/edits/Editor';

function App() {
  return (
    <RecoilRoot>
      <AppManager />
    </RecoilRoot>
  );
}

export default App;
