import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import KlyoraLogo2 from '../assets/logo/klyora-2.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import './Roadmap.css'
import { useEffect } from 'react';

const Roadmap = ()=> {

  useEffect(()=> {
        AOS.init({
          duration: 1000,
          once: true
        })
  },[])

  return(
    <section className='roadmap-container' id='roadmap'>
      <div className='time-line-section' data-aos='fade-up' data-aos-delay='100'>
        <p>
          <FontAwesomeIcon icon={faArrowCircleRight}/>
          ROADMAP
        </p>
        <h4>Timeline about details funding & development goals</h4>
        <div className='klyora-logo-contaier'>
          <img src={KlyoraLogo2} alt="klyora logo" />
        </div>
      </div>
      <div className='roadmap-contents' data-aos='fade-up' data-aos-delay='150'>
        <div className='roadmap-left'>
          <div className='roadmap-left-data'>
            <p>DECMBER 01, 2025</p>
            <h4>Creating of the idea of klyora project</h4>
          </div>
          <div className='roadmap-left-data'>
            <p>JANUARY 01, 2025</p>
            <h4>Creating of the idea of klyora project</h4>
          </div>
          <div className='roadmap-left-data'>
            <p>FEBRUARY 01, 2025</p>
            <h4>Lanuch of crypto converter</h4>
          </div>
        </div>
        <div className='line'>
          <span className='line2'></span>
        </div>
        <div className='roadmap-right'>
          <div className='roadmap-right-data'>
            <p>MARCH 01, 2025</p>
            <h4>Creating of the idea of klyora project</h4>
          </div>
          <div className='roadmap-right-data'>
            <p>APRIL 01, 2025</p>
            <h4>Start of ICO project worldwide</h4>
          </div>
          <div className='roadmap-right-data'>
            <p>MAY 01, 2025</p>
            <h4>Lanuch of tutorial and resources</h4>
          </div>
          <div className='roadmap-right-data'>
            <p>MAY 01, 2025</p>
            <h4>Lanuch of klyora web mobile version</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Roadmap