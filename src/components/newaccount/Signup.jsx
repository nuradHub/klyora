import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = ()=> {
  return(
    <div className='signup-container'>
      <div className='signup-content'>
        <h4>Create an account</h4>
        <form className='user-form'>
        <div className='name-container'>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" placeholder='Name' required />
        </div>
        <div className='email-container'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Email' required />
        </div>
        <div className='password-container'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Password' required />
        </div>
        <button type='submit'>Register</button>
        </form>
        <div className='signup-option-container'>or</div>
        <div className='option-buttons'>
          <button className='google-button'>Sign In with Google</button>
          <button className='discord-button'>Sign In with Discord</button>
          <button className='linkdin-button'>Sign In with Linkdin</button>
        </div>
        <div className='existing-account'>Already have an account? <Link to='/signin' onClick={()=> scrollTo(0,0)}>Sign in</Link></div>
      </div>
    </div>
  )
}
export default Signup