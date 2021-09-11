import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;