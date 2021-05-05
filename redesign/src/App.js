import './App.css';
import Login from './components/Login';
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";


function App() {
  const [token, setToken] = useState(null)
 
  useEffect(() => {
    //to track any change in the access token
    const hash = getTokenFromUrl();

    const _token = hash.access_token

    if (_token) {
      setToken(_token);
    }

    console.log('i have a token', token)
  }, [])


  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged in</h1>
        ): (
          <Login />
        )
      }
    </div>
  );
}

export default App;
