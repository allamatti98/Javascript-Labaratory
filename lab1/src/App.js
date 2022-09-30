import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Component1';
import SomeContent from './components/Component2';
import NavBar from './components/NavBar';
import ReactFacts from './components/Facts';

function App() {
  return (
    <div id = "root">
      <img src = {logo} style = {{width: "9em"}}/>
      <ReactFacts/>
    </div>
   
  );
}

export default App;
