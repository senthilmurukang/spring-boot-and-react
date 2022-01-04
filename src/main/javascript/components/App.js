import React from 'react';
import CounterDisplay from './CounterDisplay';
import '../../styles/index.css';
import Counter from './Counter';

const App = () => {
  return (
    <React.Fragment>
      <CounterDisplay />
      <Counter />
    </React.Fragment>
  );
}

export default App;