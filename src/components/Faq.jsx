import AOS from 'aos'
import "aos/dist/aos.css";
import './Faq.css'
import { useEffect, useState } from 'react';

const Faq = () => {

  const [faqIndex, setFaqIndex] = useState(null)

  const faqAnswer = [{
    ans:  'Once a transaction is recorded in a block and added to the blockchain, it cannot be altered without consensus from the network, ensuring data integrity. Ensure that all participants agree on the validity of transac-tions before they are added to the blockchain.',
  },{
    ans:  'Once a transaction is recorded in a block and added to the blockchain, it cannot be altered without consensus from the network, ensuring data integrity. Ensure that all participants agree on the validity of transac-tions before they are added to the blockchain.',
  },{
    ans:  'Once a transaction is recorded in a block and added to the blockchain, it cannot be altered without consensus from the network, ensuring data integrity. Ensure that all participants agree on the validity of transac-tions before they are added to the blockchain.',
  }]

  const toggleShowFaq = (i)=> {
    faqAnswer.map((_answer, index)=> {
      if(index === i){
        setFaqIndex(index)
      }
    })
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className='faq-container' id='faq'>
      <div className='faq-header' data-aos='fade-up' data-aos-delay='100'>
        <p>FAQ</p>
        <h4>Frequently Asked Questions</h4>
      </div>
      <div className='faq-question-container' data-aos='fade-up' data-aos-delay='100'>
        {faqAnswer.map((answer, index)=> 
        <div className='faq-question-details' data-aos='fade-up' data-aos-delay='200' key={index}>
          <div className='faq-question'>
            <div className='view-symbol' onClick={()=>toggleShowFaq(index)}>+</div>
            <h4>How does blockchain ensure transaction security</h4>
          </div>
          <p className='faq-answer'> {index === faqIndex && answer.ans} </p>
        </div>
        )}
      </div>
    </div>
  )
}
export default Faq