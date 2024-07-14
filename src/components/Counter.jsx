import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store';
const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const isShow = useSelector((state) => state.isShow);
    const increaseHandler = () => {
        dispatch(counterActions.increase())
    }
    const decreaseHandler = () => {
        dispatch(counterActions.decrease())
    }
    const resetHandler = () => {
        dispatch(counterActions.reset())
    }
    const toggleHandler = () => {
        dispatch(counterActions.toggle())
    }
    const increaseby5Handler = () => {
        dispatch(counterActions.increaseby5(5))
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
              <button onClick={ toggleHandler }>Toggle Counter</button>
              <button onClick={ increaseby5Handler }>Increase By 5</button>
          </div>
    </section>
  )
}

export default Counter
