import React from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import './styles/main.css';  // Add your global styles
import PageOne from './components/PageOne';

function App() {
  return (
    <div className="App">
      <ScrollAnimation />
      <PageOne/>
    </div>
  );
}

export default App;
