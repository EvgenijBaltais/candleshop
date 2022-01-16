//import logo from './logo.svg';
import './App.css';
import TopStripe from './components/TopStripe'
import LogoNav from './components/LogoNav'
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">

      <TopStripe />
      <LogoNav />
      <Slider />
    </div>
  );
}

export default App;


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/