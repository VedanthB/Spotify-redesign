import './Sidebar.css'
import SidebarOption from './SidebarOption'


function Sidebar() {
    return (
        <div className='sidebar'>
            <img 
             className='sidebar__logo'
             src='https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif'
             alt='logo'
            />

            <SidebarOption title='Home' />
            <SidebarOption title='Search' />
            <SidebarOption title='Your Library' />
        </div>
    )
}

export default Sidebar
