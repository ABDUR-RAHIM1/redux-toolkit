
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../REDUX/fetch/actions';

function Data() {
  const {info , isLoading} = useSelector(state => state.data);
  const dispatch = useDispatch()
   


  const handleTodoClick = () => {
    dispatch(fetchData("https://jsonplaceholder.typicode.com/todos"))
  }

  const handleUserClick = () => {
    dispatch(fetchData("https://jsonplaceholder.typicode.com/users"))
  }
  return (
    <div>
      
      <button onClick={handleUserClick}>
        UserData
      </button>
      <button onClick={handleTodoClick}>
        TodoData
      </button> <br /> <br />
      {
        isLoading ? "Loading . . ." : info && info.map(dt => (
          <h2 style={{ margin: "20px" }}>{dt.name || dt.title}</h2>
        ))
      }


    
    </div>
  )
}

export default Data