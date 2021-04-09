import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyMuffin } from '../redux';

function MuffinContainer(props) {
  const numOfMuffins = useSelector((state) => state.muffin.numOfMuffins);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Muffins - {numOfMuffins} </h2>
      <button onClick={() => dispatch(buyMuffin())}>Buy Muffin</button>
    </div>
  );
}

export default MuffinContainer;
