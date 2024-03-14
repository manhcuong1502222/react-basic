import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponents.js';
import ChildComponent from './Examples/ChildComponents.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a>
          reactjs
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
