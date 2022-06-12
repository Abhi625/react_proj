import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>

<Navbar title="My app" home="My home3"/>
<div className="container">
  <TextForm heading="Text Analyzer"/>
  </div>
     </>
  );
}

export default App;
