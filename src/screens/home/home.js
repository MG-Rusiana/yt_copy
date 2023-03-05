import './home.css'
import img1 from './../../img/mrballen.png'
import i1 from './../../img/icon1.png'
import img2 from './../../img/datohleong.png'
import i2 from './../../img/icon2.png'
import img3 from './../../img/network.png'
import i3 from './../../img/icon3.png'
import img4 from './../../img/awesome.png'
import i4 from './../../img/icon4.png'
import img5 from './../../img/brew.png'
import i5 from './../../img/icon5.png'
import img6 from './../../img/explore.png'
import i6 from './../../img/icon6.png'
import img7 from './../../img/tenchan.png'
import i7 from './../../img/icon7.png'
import img8 from './../../img/codehal.png'
import i8 from './../../img/icon8.png'
import img9 from './../../img/takelessons.png'
import i9 from './../../img/icon9.png'
import { Navbar } from '../../components/navbar/navbar'
import { Sidebar } from '../../components/sidebar/sidebar'

export const Home = () => {
    const cards = [
        { 
            img: img1, 
            icon: i1, 
            title: "The most CLAUSTROPHOBIC tragedy (*ANXIETY WARNING)", 
            channel: "MrBallen", 
            views: "518K views - 9 hours ago"
        },
        { 
            img: img2, 
            icon: i2, 
            title: "How to do 4000 damage in 0.2 seconds", 
            channel: "DATOHLEONG", 
            views: "96K views - 7 months ago"
        },
        { 
            img: img3, 
            icon: i3, 
            title: "SQL Injections are scary!! (hacking tutorial for beginners)", 
            channel: "NetworkChuck", 
            views: "627K views - 4 months ago"
        },
        { 
            img: img4, 
            icon: i4, 
            title: "Restoration of Vintage Mechanical Coin Bank - Full Service 1932", 
            channel: "Awesome Restorations", 
            views: "11M views - 2 years ago"
        },
        { 
            img: img5, 
            icon: i5, 
            title: "The Man Who Lived Inside a Dead Body, His Family Watched for 83 Days", 
            channel: "Brew", 
            views: "5M views - 1 year ago"
        },
        { 
            img: img6, 
            icon: i6, 
            title: "A 16 Year Old Killer's Video Diary | Documentary", 
            channel: "EXPLORE WITH US", 
            views: "11M views - 1 year ago"
        },
        { 
            img: img7, 
            icon: i7, 
            title: "【雨宮天×青鬼】音量注意！ゲーム実況ならぬゲーム絶叫！！", 
            channel: "Sora Amamiya Subchannel", 
            views: "210K views - 5 months ago"
        },
        { 
            img: img8, 
            icon: i8, 
            title: "How To Make a Website with Login and Register | HTML CSS & Javascript", 
            channel: "Codehal", 
            views: "127K views - 1 month ago"
        },
        { 
            img: img9, 
            icon: i9, 
            title: "How To Do a Spanish // Sound Like a Native Speaker", 
            channel: "TakeLessons", 
            views: "325K views - 3 years ago"
        },
    ]

    return(        
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className='cards-container'>
                {cards.map((a)=>{
                    return(
                        <div className='card'> 
                            <img src={a.img} />
                            <div>
                                <div className='left'>
                                    <img src={a.icon} />
                                </div>
                                <div className='right'>
                                    <h1>{a.title}</h1>
                                    <p>{a.channel}</p>
                                    <p>{a.views}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>  
    );
}