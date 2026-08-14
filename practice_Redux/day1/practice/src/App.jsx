import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/countSlice';

const App = () => {
    let dispatch = useDispatch();
    let {count} = useSelector((store) => store.count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default App
