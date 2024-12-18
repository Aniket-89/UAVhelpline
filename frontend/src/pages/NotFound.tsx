import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-full flex items-center justify-center text-center'>
        <h6>Oh, you are not supposed to be here. Go <Link to={'/'} className='hover:text-accent'>home</Link></h6>
    </div>
  )
}

export default NotFound
