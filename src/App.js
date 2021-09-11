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

import firebase from './Firebase/Firebase'
import UID from './Firebase/uid.json'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

function App() {
  const [selectedTitle,setSelectedTitle] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  //Check if the user is login or not
  useEffect(() => {
    const auth = getAuth(firebase)
    onAuthStateChanged(auth, user => {
      try{
        if (UID.uid === user.uid) setIsLogin(true)
      }
      catch(error){
        console.log(error)
      }
      
    })
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
          </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;