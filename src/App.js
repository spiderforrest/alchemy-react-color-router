import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Main /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
