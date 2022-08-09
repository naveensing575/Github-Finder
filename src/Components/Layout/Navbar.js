import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content '>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          {<FaGithub className='inline pr-2 text-3xl'/>}
          <Link to='/' className='text-lg font-bold align-middle'>
          {title}
          </Link>
        </div>
        <div class="flex-1 px-2 mx-2">
          <div class="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps={
  title: 'Github Finder'
}
export default Navbar