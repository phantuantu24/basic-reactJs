import './App.css';
import ClassCounter from './components/ClassCounter';
import UseStateHook from './components/UseStateHook';
import UseStateWithPreviousState from './components/UseStateWithPreviousState';

function App() {
  return (
    <div className="App">
      <UseStateWithPreviousState />
      {/* <UseStateHook /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
