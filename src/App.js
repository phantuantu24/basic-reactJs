import './App.css';
import ClassCounter from './components/ClassCounter';
import UseStateHook from './components/UseStateHook';
import UseStateWithArray from './components/UseStateWithArray';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithPreviousState from './components/UseStateWithPreviousState';

function App() {
  return (
    <div className="App">
      <UseStateWithArray />
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithPreviousState /> */}
      {/* <UseStateHook /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
