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
      </div> 

      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;