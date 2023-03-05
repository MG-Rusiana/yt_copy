import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import voice from './../../img/navbar/voice.png'
import logo from './../../img/navbar/YTlogo.png'
import menu from './../../img/navbar/menu.png'
import create from './../../img/navbar/create.png'
import notif from './../../img/navbar/notif.png'
import profile from './../../img/navbar/profile.png'


export const Navbar = () => {
    const tabs = [
        { tab: "Gaming" },
        { tab: "Dota 2" },
        { tab: "Music" },
        { tab: "Mixes" },
        { tab: "Manga" },
        { tab: "Ghost Stories" }, 
        { tab: "Computer Programming" }, 
        { tab: "Sora Amamiya" }, 
        { tab: "Podcasts" }, 
    ]

    return(
        <div className='navbarmain'>
            <div className='navbar-box'>
                <div className='navbar-left'>
                    <img className='menu' src={ menu} />
                    <img className='logo' src={ logo } />
                </div>
                <div className='navbar-middle'>
                    <div className='search-box'>
                        <input className='search' type="text" placeholder='Search' />
                        <div className='search-icon'>
                            <FontAwesomeIcon className='icon' icon={ faMagnifyingGlass } />
                        </div>
                    </div>
                    <img src={voice} />
                </div>
                <div className='navbar-right'>
                    <img src= {create} />
                    <img src= {notif} />
                    <img className='profile' src= {profile} />
                </div>
            </div>
            <div className='tab-container'>
                <div className='all'>
                    <p>All</p>
                </div>

                {tabs.map((a)=>{
                    return(
                        <div className='others'>
                            <p>{a.tab}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

