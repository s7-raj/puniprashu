//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to RunShaw</h1>
      </header>
      <div className="Another">
        <h3>We providing courses</h3>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>python</li>
          <li>Full stack development</li><br/>
        </ul>
        <div className="resume">
          <form>
            <label className="move">If you intrest Register</label><br/>
            <label>Student Name</label>
            <input type="text" className="name"></input><br/>
            <label>Student Number</label>
            <input type="number" className></input><br/>
            <label>Student Email id</label>
            <input type="text" className="mail"></input><br/>
            <button type="button">Click On</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
