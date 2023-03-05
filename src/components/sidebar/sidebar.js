import './sidebar.css'
import home from './../../img/navbar/home.png'
import shorts from './../../img/navbar/shorts.png'
import subscriptions from './../../img/navbar/subscriptions.png'
import library from './../../img/navbar/library.png'

export const Sidebar = () => {
    return(
        <div className="sidebarmain">
            <img src={home} alt='Home'/>
            <img src={shorts} alt='Shorts'/>
            <img src={subscriptions} alt='Subscriptions'/>
            <img src={library} alt='Library'/>
        </div>
    );
}