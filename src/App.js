import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          This widget was created by
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://daianaarena.github.io/my-portfolio/#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT ME
        </a>
      </header>
    </div>
  );
}

export default App;

//function App({data}) {