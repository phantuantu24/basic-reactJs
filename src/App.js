import './App.css';
import ClassCounter from './components/ClassCounter';
import UseStateHook from './components/UseStateHook';
import UseStateWithObject from './components/UseStateWithObject';
import UseStateWithPreviousState from './components/UseStateWithPreviousState';

function App() {
  return (
    <div className="App">
      <UseStateWithObject />
      {/* <UseStateWithPreviousState /> */}
      {/* <UseStateHook /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
