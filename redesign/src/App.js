import './App.css';
import Login from './components/Login';
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';


const spotify = new SpotifyWebApi(); // allows us to communicate to the spotify api

function App() {
  const [token, setToken] = useState(null)
 
  useEffect(() => {
    //to track any change in the access token
    const hash = getTokenFromUrl();

    const _token = hash.access_token

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log('>>>>', user)
      })
    }

    console.log('i have a token', token)
  }, [])


  return (
    <div className="App">
      {
        token ? (
          <Player />
        ): (
          <Login />
        )
      }
    </div>
  );
}

export default App;
