import KlyoraLogo3 from '../assets/logo/klyora-3.png'
import TelegramIcon from '../assets/logo/telegram-icon.png'
import DiscordIcon from '../assets/logo/discord-icon.png'
import './Footer.css'

const Footer = ()=> {
  return(
    <section className='footer-container'>
      <div className='footer-top'>
        <img src={KlyoraLogo3} alt="" />
        <ul>
          <li> 
            <a href='/'>
              <img src={TelegramIcon} alt="Telegram icon" />
            </a> 
          </li>
          <li> 
            <a href='/'>
              <img src={DiscordIcon} alt="Discord icon" />        
            </a> 
          </li>
        </ul>
      </div>
      <div className='footer-bottom'>
        copyright &copy; klyora 2025
      </div>      
    </section>
  )
}
export default Footer