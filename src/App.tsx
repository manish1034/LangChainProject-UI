import React from 'react';
import Chat from './components/Chat.tsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>cHaTbot aPp</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
}

export default App;