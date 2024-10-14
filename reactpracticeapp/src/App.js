import logo from './logo.svg';
import './App.css';

function TestFunction(){
  return(
    <p>
      Inside TestFunction.
    </p>
  );
}
function FirstFunction(){
  return(
    <p>Inside FirstFunction</p>
  );
}
function SecondFunction(){
  return(<p> Inside SecondFunction</p>);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>welcome to react programming
          
            Developing React applications.
            using gitHub.
            compiling and running the applications.
            </h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and creating sample React programs.
        </a>
      </header>
      <body>
      <TestFunction/> 
      <FirstFunction/>
      <SecondFunction/>
      </body>
    </div>
  );
}

export default App;
