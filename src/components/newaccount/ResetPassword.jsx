import './ResetPassword.css'

const ResetPassword = ()=> {
  return(
    <div className='reset-password-container'>
      <div className='reset-password-content'>
        <h4>Reset your password</h4>
        <form className='user-form'>
        <div className='email-container'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Email' required />
        </div>
        <button type='submit'>Reset Password</button>
        </form>
      </div>
    </div>
  )
}
export default ResetPassword