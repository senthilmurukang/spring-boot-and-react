import React from 'react';
import CounterDisplay from './CounterDisplay';
import '../../styles/index.css';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Spring Boot + ReactJS</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Counter</h2>
          <CounterDisplay />
          <Counter />
        </section>
      </main>
    </div>
  );
}

export default App;