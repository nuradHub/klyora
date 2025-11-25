import KlyoraLogo from '../assets/logo/klyora-1.png'
import KlyoraLogo2 from '../assets/logo/klyora-2.png'
import Faq from '../components/Faq'
import Features from '../components/Features'
import Roadmap from '../components/Roadmap'
import AOS from 'aos'
import "aos/dist/aos.css";
import './Home.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [visibility, setVisibility] = useState(false)

  const navigate = useNavigate()

  const navigateToSignup = ()=> {
    navigate('/signup')
    scrollTo(0,0)
  }

  useEffect(()=> {
    AOS.init({
      duration: 1000,
      once: true
    })

    const toggleVisibility = ()=> {
      if(window.scrollY > 200){
        setVisibility(true)
      }else{
        setVisibility(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)

    return ()=> window.removeEventListener('scroll', toggleVisibility);
  },[])

  return (
    <section className='home-container' id='home'>
      <div className='home-contents'>
        <div className='about-klyora-container' data-aos='fade-up' data-aos-delay='100'>
          <div className='about-klyora' data-aos='fade-right' data-aos-delay='200'>
            <p>Meet Klyo: Our Brand Ethos</p>
            <h3>Secure Your Future. Driven by Klyo the Fox.</h3>
            <button onClick={navigateToSignup}>Get Started</button>
          </div>
          <div className='about-klyora-logo' data-aos='fade-up' data-aos-delay='200'>
            <img src={KlyoraLogo} alt="klyora logo" />
          </div>
        </div>
        <div className='token-sales-tracking'>
          <div className='token-progress-container' data-aos='fade-up' data-aos-delay='100'>
            <h5>Token sales progress</h5>
            <div className='sales-track'>
              <div className='raised-coin'>
                <p>RAISED</p>
                <h5>5,723 COIN</h5>
              </div>
              <div className='total-coin'>
                <p>TOTAL COIN</p>
                <h5>8,490,000</h5>
              </div>
            </div>
            <div className='starting-sales'>
              <p className='timer-header'>Token sales starting in:</p>
              <div className='starting-time'>
                <div className='time'>
                  <h5>506</h5>
                  <p>Days</p>
                </div>
                <div className='time'>
                  <h5>4</h5>
                  <p>Hours</p>
                </div>
                <div className='time'>
                  <h5>5</h5>
                  <p>Minutes</p>
                </div>
                <div className='time'>
                  <h5>35</h5>
                  <p>Seconds</p>
                </div>
              </div>
              <button onClick={navigateToSignup}>Register & Buy Token</button>
            </div>
          </div>
          <div className='sales-information-container' data-aos='fade-up' data-aos-delay='100'>
            <h5 className='sales-header'>Sales Information</h5>
            <div className='sales-info'>
              <div className='sales-data'>
                <h5>PUBLIC SALE STARTS</h5>
                <h3>JANUARY 01, 2025</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>TOKEN SUPPLY</h5>
                <h3>499,000,000</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>T. ALLOCATED FOR ICO</h5>
                <h3>499,000,000</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>HARD CAP</h5>
                <h3>499,000,000</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>SOFT CAP</h5>
                <h3>499,000,000</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>TOKEN VALUE</h5>
                <h3>1 GPB = 3177.38 KLY</h3>
              </div>
              <hr />
              <div className='sales-data'>
                <h5>ACCEPTED</h5>
                <h3 className='accepted-coin'>ETH, GBP</h3>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className='scrool-visibility' style={{display: visibility ? 'block' : 'none' }}>
        <HashLink smooth to='/#home'>
          <FontAwesomeIcon icon={faCircleArrowUp}/>
        </HashLink>
        </div>
      </div>
      <Features />
      <Roadmap />
      <div className='token-allocation-container' >
        <div className='token-allocation-summary' data-aos='fade-up' data-aos-delay='100'>
          <div className='token-allocation-header'>
            <div className='klyora-logo-container'>
              <img src={KlyoraLogo2} alt="" />
            </div>
            <div className='allocation-data'>
              <div className='allocation-header'> 
                <p>
                  <FontAwesomeIcon icon={faCircleArrowRight}/>
                  SUMMARY OF ICO
                </p>
                <h4>Token allocation summary</h4>
              </div>
              <div className='allocation-details'>
                <p>Token Offer - <span>46,000.000</span></p>
                <hr />
                <p>UTO Bounties - <span>11,500.000</span></p>
                <hr />
                <p>UTO Community Researve - <span>423,000.000</span></p>
                <hr />
                <p>UTO Community Building - <span>23,000.000</span></p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className='token-allocation-sales' data-aos='fade-up' data-aos-delay='200'>
          <div className='token-sales'>
          <p>PRE-SALES</p>
          <div className='sales-percentage'>
            <h4>25%</h4>
            <p>Early Bonus</p>
          </div>
        </div>
        <div className='token-sales'>
          <p>ICO SALE-WEEK 1</p>
          <div className='sales-percentage'>
            <h4>25%</h4>
            <p>Early Bonus</p>
          </div>
        </div>
        <div className='token-sales'>
          <p>ICO SALE-WEEK 2</p>
          <div className='sales-percentage'>
            <h4>1%</h4>
            <p>Early Bonus</p>
          </div>
        </div>
        </div>
        <button data-aos='fade-up' data-aos-delay='50' onClick={navigateToSignup}>PURCHASE NOW</button>
      </div>
      <div className='about-founder-container'>
        <div className='about-founder-header' data-aos='fade-up' data-aos-delay='100'>
          <p>
            <FontAwesomeIcon icon={faCircleArrowRight}/>
            FOUNDER
          </p>
          <h4>About Founder</h4>
        </div>
        <div className='about-fonder-content' data-aos='fade-up' data-aos-delay='200'>
          <div className='founder-data'>
            <div className='kyora-logo-container'>
              <img src={KlyoraLogo} alt="klyora logo" />
            </div>
            <summary>My name is Tom, and I work as an IT analyst. I created Klyora as a practical project with a clear purpose:
              to generate the funds needed to make essential adaptations to my home due to a neurological condition.
              Rather than approaching it through traditional fundraising, I built a system that could stand on its own
              and potentially grow in value over time. The initial seeder allocation is made up mainly of close friends
              and family who support me day-to-day. Klyora is simply a structured way of recognising that support
              while creating something useful, transparent, and sustainable.</summary>
          </div>
        </div>
      </div>
      <Faq/>
    </section>
  )
}
export default Home
