import './Login.css'
import { loginUrl } from "../spotify";

function Login() {
    return (
        <div className="login">
            <img 
             src='https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif'
             alt='logo'
            />
            <a href={loginUrl} >Login With Spotify</a>
            <p><span>&#9888;</span> You will need Spotify premium to play songs in this</p>
            
        </div>
    )
}

export default Login
