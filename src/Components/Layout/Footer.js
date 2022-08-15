import {FaHeart} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer p-10 bg-grey-700 text-primary-content footer-center">
        <div>
            <p>Made with <FaHeart className='' style={{color:'red', display:'inline'}}/> by <a href="https://github.com/naveensing575" target="_blank" rel="noreferrer">Naveen Singh</a></p>
        </div>
    </footer>
  )
}

export default Footer