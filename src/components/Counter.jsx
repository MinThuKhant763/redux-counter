import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const isShow = useSelector((state) => state.isShow);
    const increaseHandler = () => {
        dispatch({type:"increasement"})
    }
    const decreaseHandler = () => {
        dispatch({type:"decreasement"})
    }
    const resetHandler = () => {
        dispatch({type:"reset"})
    }
    const toggleHandler = () => {
        dispatch({type:"toggle"})
    }
    
  return (
    <section>
          <h3>Redux Counter</h3>
          { isShow && <h1>{ counter }</h1> }
          <hr />
          <div>
              <button onClick={increaseHandler}>Increase</button>
              <button onClick={ resetHandler }>Reset</button>
              <button onClick={ decreaseHandler }>Decrease</button>
              <button onClick={toggleHandler}>Toggle Counter</button>
          </div>
    </section>
  )
}

export default Counter
