import './App.css';
import Login from './components/Login';
import { useEffect, } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useStateValue } from "./StateProvider"
 

const spotify = new SpotifyWebApi(); // allows us to communicate to the spotify api

function App() {
  const [{  token }, dispatch] = useStateValue();
 
  useEffect(() => {
    //to track any change in the access token
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token

    if (_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        // console.log('>>>>', user)

        dispatch({ 
          type: "SET_USER",
          user: user
        })
      })
    }

    spotify.getUserPlaylists().then((playlists) => {
       dispatch({ 
         type: "SET_PLAYLISTS",
         playlists: playlists,
       })
    })


  }, [token, dispatch])

  // console.log('>>>>', user)
  // console.log('<<<<', token)

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ): (
          <Login />
        )
      }
    </div>
  );
}

export default App;
