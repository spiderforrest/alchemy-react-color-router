import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:r/:g/:b">
            <Main />
          </Route>
          <Route path="*">
            <Redirect to="/15/55/15" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
