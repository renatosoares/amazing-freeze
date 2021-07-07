import React from 'react';
import ThemeProvider from 'styles/ThemeProvider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <h1>Hello world!</h1>
    </ThemeProvider>
  );
}

export default App;
