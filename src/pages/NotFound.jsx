import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = ()=> {
  return(
    <div className='not-found-container'>
      <div className='not-found-contents'>
        <h4>Oops! The page you're looking for doesn't exist</h4>
        <p>Go back to <Link to='/'>home</Link></p>
      </div>
    </div>
  )
}
export default NotFound