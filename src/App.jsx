import React from 'react';
import Sidebar from './UI/Sidebar';
import RichTextEditorLayout from './UI/RichTextEditorLayout';
import './App.scss';

function App() {
  return (
    <main className="App">
      <header className="App-sidebar">
        <Sidebar />
      </header>
      <content className="App-content">
        <RichTextEditorLayout />
      </content>
      <footer className="App-footer" />
    </main>
  );
}

export default App;
