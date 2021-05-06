import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from "../StateProvider";

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);
  
    return (
        <div className='sidebar'>
            <img 
             className='sidebar__logo'
             src='https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif'
             alt='logo'
            />

            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

            <br />
              <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
              <SidebarOption title={playlist.name} />
             ))}
          
        </div>
    )
}

export default Sidebar
