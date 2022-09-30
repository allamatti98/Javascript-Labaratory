import logo from './logo.svg';
import './App.css';
import ReactReasons from './components/ReactReasonsList';
import Header from './components/header1';
import Heading1 from './components/heading1';
import Footer1 from './components/footer1';
import Nav1 from './components/NavBar1';


function App() {
  return (
    <div id = "root">
      <nav className="NavBar">
      <Header/>
      <Nav1/>
      </nav>
      <Heading1/>
      <ReactReasons/>
      <Footer1/>
    </div>
   
  );
}

export default App;
