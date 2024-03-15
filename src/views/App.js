import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponents.js';
import ChildComponent from './Examples/ChildComponents.js';
import ListTodos from './todos/ListTodos.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <MyComponent /> */}

        <ListTodos />

      </header>
    </div>
  );
}

export default App;
