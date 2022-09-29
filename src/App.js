// import logo from './logo.svg';
import './App.css';
import {ExtraTask, ExtraTask1, ExtraTask2 } from './Components/ExtraTask/ExtraTask';

import Shop from './Components/Shop/Shop';



function App() {

  return (
    <div className="App">
      <Shop></Shop>
      <ExtraTask></ExtraTask>
      <ExtraTask1></ExtraTask1>
      <ExtraTask2></ExtraTask2>
    </div>
  );
}

export default App;
