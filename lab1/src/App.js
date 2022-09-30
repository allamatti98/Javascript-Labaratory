import logo from './logo.svg';
import './App.css';
import ReactReasons from './components/ReactReasonsList';

function App() {
  return (
    <div id = "root">
      <img src = {logo} width="150px"/>
      <ReactReasons/>
    </div>
   
  );
}

export default App;
