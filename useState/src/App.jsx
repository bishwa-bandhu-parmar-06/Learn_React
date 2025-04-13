import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incre</button>
      <button onClick={() => setCount(count - 1)}>Decre</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};

export default App;
