import { Link } from 'react-router-dom'
import './Signin.css'

const Signin = ()=> {
  return(
    <div className='signin-container'>
      <div className='signin-content'>
        <h4>Welcome back</h4>
        <form className='user-form'>
        <div className='email-container'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Email' required />
        </div>
        <div className='password-container'>
          <div className='password-container-f'>
            <label htmlFor="password">Password</label>
            <Link to='/resetpassword'>Forgot password?</Link>
          </div>
          <input type="password" name="password" id="password" placeholder='Password' required />
        </div>
        <button type='submit'>Sign in</button>
        </form>
        <div className='signin-option-container'>or</div>
        <div className='option-buttons'>
          <button className='google-button'>Sign In with Google</button>
          <button className='discord-button'>Sign In with Discord</button>
          <button className='linkdin-button'>Sign In with Linkdin</button>
        </div>
        <div className='existing-account'>Dont have an account? <Link to='/signup' onClick={()=> scrollTo(0,0)}>Sign up</Link></div>
      </div>
    </div>
  )
}
export default Signin