import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import voice from './../../img/navbar/voice.png'
import logo from './../../img/navbar/YTlogo.png'
import menu from './../../img/navbar/menu.png'
import create from './../../img/navbar/create.png'
import notif from './../../img/navbar/notif.png'
import profile from './../../img/navbar/profile.png'
import { useState } from 'react';


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

    const history = [
        {history: "how to be rich"},
        {history: "sekreto ng mga gwapo"},
        {history: "how to sleep for 8 hours in just 2 hours"},
        {history: "scary ghost stories"},
        {history: "healthy foods"},
        {history: "motivational songs"},
        {history: "tutorial on becoming the top 1 hacker"},
        {history: "how to map an array"},
        {history: "why vscode is good"},
        {history: "BrowserRouter vs HashRouter"},
        {history: "secrets on becoming the legendary ..."},
    ]

    const [showSuggestions, setShowSuggestions] = useState(false);
    const show = () =>{
        setShowSuggestions(true)
    }
    const hide = () =>{
        setShowSuggestions(false)
    }

    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const profileMenu = () => {
        if (showProfileMenu==false){
            setShowProfileMenu(true)
        }
        else {
            setShowProfileMenu(false)
        }

        console.log('dsd')
    }
    const hideProfileMenu = () => {
        setShowProfileMenu(false)
    }
    return(
        <>
        <div className='navbarmain'>
            <div className='navbar-box'>
                <div className='navbar-left'>
                    <img className='menu' src={ menu} />
                    <img className='logo' src={ logo } />
                </div>
                <div className='navbar-middle'>
                    <div className='search-box'>
                        <div>
                            <input className='search' type="text" onFocus={show} onBlur={hide} placeholder='Search' />
                            <div className='search-icon'>
                                <FontAwesomeIcon className='icon' icon={ faMagnifyingGlass } />
                            </div>
                        </div>
                        <div className='suggestion-relative'>
                            {showSuggestions && 
                            <div className='suggestions' >
                                {history.map((a)=>{
                                    return(
                                    <div className='suggest'>
                                        <div className='hahayst'>
                                            <FontAwesomeIcon className='re-search' icon={ faArrowRotateLeft } />
                                        </div>
                                        <div className='search-history'>{a.history}</div>
                                        <div className='remove'>Remove</div>
                                    </div>
                                    );
                                })}
                            </div>}
                        </div>
                    </div>
                    <img src={voice} />
                </div>
                <div className='navbar-right'>
                    <img src= {create} />
                    <img src= {notif} />
                    <img className='profile' src= {profile} onClick = { profileMenu } onBlur={ hideProfileMenu }/>
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
        {showProfileMenu &&
        <div className='profile-container'>
                <div className='profile-top'>
                    <div className='left'>
                        <img src={profile} alt='profile' />
                    </div>
                    <div className='right'>
                        <p className='normal'>Mark Gil Rusiana</p>
                        <p className='normal'>@markgilrusiana8234</p>
                        <p className='blue'>Manage your Google Account</p>
                    </div>
                </div>
                <div className='profile-middle'>
                    <p>Your channel</p>
                    <p>YouTube Studio</p>
                    <p>Switch Account</p>
                    <p>Sign Out</p>
                </div>
                <div className='profile-middle-2'>
                    <p>Purchases and Memberships</p>
                    <p>Your Data in YouTube</p>
                </div>
                <div className='profile-middle-3'>
                    <p>Appearance: Device Theme</p>
                    <p>Language: English</p>
                    <p>Restricted Mode: Off</p>
                    <p>Location: Philippines</p>
                    <p>Keyboard SHortcuts</p>
                </div>
                <div className='settings'>
                    <p>Settings</p>
                </div>
        </div>
        }
        </>
    );
}

