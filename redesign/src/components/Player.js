import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body' >
                {/* sidebar */}
                <Sidebar />
                {/* body */}
                <Body spotify={spotify} />
            </div>
             {/* footer */}
             <Footer spotify={spotify} />
        </div>
    )
}


export default Player
 