import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="top-bar">
        <span className="header">
          Do it!
        </span>

        <InputField />
      </div>
    </div>
  );
}

export default App;
