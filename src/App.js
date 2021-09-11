import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar/>
        <header className="App-header">
          
        </header>
      </div> 

      <Switch>
        <Route path="/">
          {/* Redirect to home */}
        </Route>
        <Route path="/login">
          {/* Redirect to login page */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
