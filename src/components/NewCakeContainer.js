import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cakes
      </button>
    </div>
  );
}

export default CakeContainer;

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { buyCake } from '../redux';

// function CakeContainer(props) {
//   const [number, setNumber] = useState(1);

//   return (
//     <div>
//       <h2>Number of cakes - {props.numOfCakes} </h2>
//       <input
//         type='text'
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={() => props.buyCake(number)}>
//         Buy {number} Cakes
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.cake.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: (number) => dispatch(buyCake(number)),
//   };
// };

// // connect connects a function to the redux store
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
