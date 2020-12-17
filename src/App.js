import React from 'react';
import { Top } from './features/top/Top';
import { Hot } from './features/hot/Hot';
import './App.css';

function App() {
  return (
    <main>
      <Top />
      <p>----</p>
      <Hot />   
    </main>
  );
}

export default App;
