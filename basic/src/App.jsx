import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './redux/modules/counterSlice';
import { decrease } from './redux/modules/counterSlice';
import { __increase } from './redux/modules/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.number);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(__increase(counter));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrease(counter));
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
