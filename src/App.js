import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  const[showLogin , setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name , setName] = useState("")
  const handleAuthentication = (email) => {
    setIsAuthenticated(true);
    setName(email)
  };
  return (
    <div className="App">
        {isAuthenticated ? (
        <Home name = {name}/>
      ) : (
        showLogin ? (
          <Login onAuthentication={handleAuthentication} />
        ) : (
          <Signup onAuthentication={handleAuthentication} />
        )
      )}
      {
        isAuthenticated ? "" : <p onClick={()=>setShowLogin(!showLogin)}>{
          showLogin?"LOGIN":"SIGN UP"
          }</p>
      }

     
    </div>
  );
}

export default App;
