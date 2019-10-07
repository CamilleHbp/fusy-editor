import React from 'react';
import Sidebar from './ui/Sidebar';
import EditorLayout from './ui/EditorLayout';
import './App.scss';

function App() {
  return (
    <main className="App">
      <header className="App-sidebar">
        <Sidebar />
      </header>
      <content className="App-content">
        <EditorLayout />
      </content>
      <footer className="App-footer" />
    </main>
  );
}

export default App;
