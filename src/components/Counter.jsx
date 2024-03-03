import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../REDUX/redux-toolkite/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch()
  const hanleIncrement =()=>{
     dispatch(increment())
  }
  return (
    <div>
      <h1>
          counter {count}
      </h1>
      <button onClick={hanleIncrement}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=> dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter
 