import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}> Buy IceCream </button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     numOfIceCreams: state.iceCream.numOfIceCreams,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// // connect connects a function to the redux store
// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
export default IceCreamContainer;
