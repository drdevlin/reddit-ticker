import React from 'react';
import { Top } from './features/top/Top';
import { Hot } from './features/hot/Hot';
import { NewContainer } from './features/new/NewContainer';
import './App.css';

function App() {
  return (
    <main>
      <Top />
      <p>----</p>
      <Hot />
      <p>----</p>
      <NewContainer />  
    </main>
  );
}

export default App;
