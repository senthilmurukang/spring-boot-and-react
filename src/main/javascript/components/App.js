import React from 'react';
import CounterDisplay from './CounterDisplay';
import '../../styles/index.css';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App" >
      <CounterDisplay />
      <Counter />
    </div>
  );
}

export default App;