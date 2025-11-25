import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import KlyoraLogo from '../assets/logo/klyora-1.png'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppComponent'
import TelegramIcon from '../assets/logo/telegram-icon.png'
import DiscordIcon from '../assets/logo/discord-icon.png'
import './Header.css'

const Header = ()=> {

  const {asideBar, setAsideBar} = useContext(AppContext)

  const closeAsideContainer = ()=> {
    setAsideBar(false)
    scrollTo(0,0)
  }

  return(
    <section className='header-container'>
      <div className='left-content-container'>
        <Link to='/'><img src={KlyoraLogo} alt="Klyora logo" /></Link>
      </div>
      <div className='middle-content-container'>
        <ul>
          <li><HashLink smooth to='/' onClick={()=> scrollTo(0,0)}>HOME</HashLink></li>
          <li><HashLink smooth to='/#features'>FEATURES</HashLink></li>
          <li><HashLink smooth to='/#roadmap'>ROADMAP</HashLink></li>
          <li><HashLink smooth to='/#faq'>FAQ</HashLink></li>
          <li><HashLink smooth to='/' onClick={()=> scrollTo(0,0)}>BLOG</HashLink></li>
          <li><HashLink smooth to='/' onClick={()=> scrollTo(0,0)}>CONTACT</HashLink></li>
        </ul>
      </div>
      <div className='right-content-container'>
        <Link to='/signin' className='signin-button' onClick={()=> scrollTo(0,0)}>SIGNIN</Link>
        <Link to='/signup' className='register-button' onClick={()=> scrollTo(0,0)}>REGISTER</Link>
        <FontAwesomeIcon icon={faBars} onClick={()=> setAsideBar(true)}/>
      </div>
      {asideBar && 
        <div className='aside-content-container'>
          <div className='aside-content-header'>
            <Link to='/'><img src={KlyoraLogo} alt="Klyora logo" /></Link>
            <FontAwesomeIcon icon={faTimes} onClick={()=> setAsideBar(false)}/>
          </div>
          <hr />
          <div className='aside-menus'>
            <Link to='/' onClick={closeAsideContainer}>HOME</Link>
            <HashLink smooth to='/#features' onClick={closeAsideContainer} >FEATURES</HashLink>
            <HashLink smooth to='/#roadmap' onClick={closeAsideContainer}>ROADMAP</HashLink>
            <hr />
            <HashLink smooth to='/#faq' onClick={closeAsideContainer}>FAQ</HashLink>
            <Link to='/' onClick={closeAsideContainer}>BLOG</Link>
            <Link to='/' onClick={closeAsideContainer}>CONTACT</Link>
            <hr />
            <Link to='/signin' onClick={closeAsideContainer}>SIGNIN</Link>
            <Link to='/signup' onClick={closeAsideContainer}>SIGNUP</Link>
          </div>
          <hr />
          <div className='socials-container'>
            <a href="">
              <img src={TelegramIcon} alt="Telegram icon" />
            </a>
            <a href="">
              <img src={DiscordIcon} alt="Discord icon" />
            </a>
          </div>
        </div>
      }
    </section>
  )
}
export default Header