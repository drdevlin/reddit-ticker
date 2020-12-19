import React from 'react';
import { Top } from './features/top/Top';
import { Hot } from './features/hot/Hot';
import { NewContainer } from './features/new/NewContainer';
import { Header } from './features/header/Header';
import './App.css';

function App() {
  return (
    <main className='App'>
      <div className='app-header'><Header /></div>
      <div className='app-top'><Top /></div>
      <div className='app-hot'><Hot /></div>
      <div className='app-new'><NewContainer /></div>  
    </main>
  );
}

export default App;
