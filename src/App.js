// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';

import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MuffinContainer from './components/MuffinContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <MuffinContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
