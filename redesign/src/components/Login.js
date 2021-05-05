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
        </div>
    )
}

export default Login
