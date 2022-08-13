function Footer() {
  const footerYear= new Date().getFullYear;
  return (
    <footer className="footer p-10 bg-grey-700 text-primary-content footer-center">
        <div>
            <p>Made with <i className="fa fa-heart pulse" style={{color:'red'}}></i> by <a href="https://github.com/naveensing575" target="_blank" rel="noreferrer">Naveen Singh</a> {footerYear}</p>
        </div>
    </footer>
  )
}

export default Footer