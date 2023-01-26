import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import NotFound from './components/NotFound.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
