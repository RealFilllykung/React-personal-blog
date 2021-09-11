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
import Content from './views/Content';
import { useState } from 'react';

function App() {
  const [selectedTitle,setSelectedTitle] = useState('')

  return (
    <Router>
      <div className="App">
        <AppBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home setTitle={setSelectedTitle}/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/content">
              <Content title={selectedTitle}/>
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;