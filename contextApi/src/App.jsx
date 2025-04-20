import React ,{useContext}from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/contextapi'
const App = () => {
  const counterState = useContext(CounterContext);
  // console.log(counterState)
  return (
    <div>
      <h1>Counter Value is : {counterState.count}</h1>
      <Counter/>
    </div>
  )
}

export default App