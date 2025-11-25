import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import KlyoraLogo1 from '../assets/logo/klyora-1.png'
import KlyoraLogo2 from '../assets/logo/klyora-2.png'
import KlyoraLogo3 from '../assets/logo/klyora-3.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import './Features.css'
import { useEffect } from 'react';

const Features = ()=> {

  useEffect(()=> {
      AOS.init({
        duration: 1000,
        once: true
      })
  },[])

  return(
    <section className='features-container' id='features'>
      <div className='features-header' data-aos='fade-up' data-aos-delay='100'>
        <p>
          <FontAwesomeIcon icon={faArrowCircleRight}/>
          WHY CHOOSE US?
        </p>
        <h4>Core Features of Klyora</h4>
      </div>
      <div className='features-content'>
        <div className='features-data' data-aos='fade-up' data-aos-delay='200'>
          <div className='kyora-logo-container'>
            <img src={KlyoraLogo1} alt="klyora logo" />
          </div>
          <h4>Lower Transaction fee</h4>
          <summary>A decentralized all-in-one platform accessible to consumers & brands with lower transaction fees & operational costs.</summary>
        </div>
        <div className='features-data' data-aos='fade-up' data-aos-delay='200'>
          <div className='kyora-logo-container'>
            <img src={KlyoraLogo2} alt="klyora logo" />
          </div>
          <h4>Lower Transaction fee</h4>
          <summary>A decentralized all-in-one platform accessible to consumers & brands with lower transaction fees & operational costs.</summary>
        </div>
        <div className='features-data' data-aos='fade-up' data-aos-delay='200'>
          <div className='kyora-logo-container'>
            <img src={KlyoraLogo3} alt="klyora logo" />
          </div>
          <h4>Lower Transaction fee</h4>
          <summary>A decentralized all-in-one platform accessible to consumers & brands with lower transaction fees & operational costs.</summary>
        </div>
      </div>
    </section>
  )
}
export default Features