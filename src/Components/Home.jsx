import React, { useEffect } from 'react';
import '../Css/Home.css'
import Facebook from '../Assets/facebook.png'
import Instagram from '../Assets/instagram.png'
import Portfolio from '../Assets/portfolio.png'
import Spotify from '../Assets/spotify.png'
import Profile from '../Assets/profilepicture.jpg'
import Logo from '../Assets/carl logo.png'

function Home() {
  return (
    <div className='body'>
        <section>
            <div>
                <img src={Profile} alt='me' className='profilepic' />
                <h1 className='name'>saguinsin, carl</h1>
                <h3 className='intro'>3rd bsit student, front-end web developer</h3>
            </div>

            <div>
                <button className='portfolio'><a href='https://csaguinsin.github.io/carl-saguinsin/' target='_blank'>Portfolio</a></button>
                <button className='dribble'><a href='https://dribbble.com/cj_saginsin' target='_blank'>UI Design</a></button>
                <button className='spotify'><a href='https://open.spotify.com/user/31egzpa7rmlzyfkwg3ukg3757gzy?si=5fbcee67e7104535' target='_blank'>Spotify</a></button>
                <button className='facebook'><a href='https://www.facebook.com/carlsaginsin/' target='_blank'>Facebook</a></button>
                <button className='instagram'><a href='https://www.instagram.com/carl_sgnsn/' target='_blank'>Instagram</a></button>
                <img src={Logo} alt='logo' className='logo' />
            </div>
        </section>
    </div> 
  )
}

export default Home