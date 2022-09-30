import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Component1';
import SomeContent from './components/Component2';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id = "root">
      <NavBar/>
      <Comp1/>
      <SomeContent/>
    </div>
   
  );
}

export default App;
