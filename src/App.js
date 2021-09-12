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
import CreatePost from './views/CreatePost';

import { useEffect, useState } from 'react';
import verifyToken from './functions/verifyToken'

function App() {
  const [selectedTitle,setSelectedTitle] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  //Check if the user is login or not
  useEffect(() => {
    verifyToken(setIsLogin)
  },[])

  return (
    <Router>
      <div className="App">
        <AppBar isLogin={isLogin}/>
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
            <Route exact path="/createpost">
              <CreatePost/>
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;