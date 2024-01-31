const Footer = () => {

    return (

        <footer className="footer section__wide">

            <div className="footer__logo"> <img src="HosamUmbaddiLogoSlate.svg" /> </div>
            <div className="footer__desc"> Hire me, I'm ready for Freelance Work </div>

            <div className="footer__nav">

                <div className="footer__list list">

                    <div className='list__title' > Navigation </div>
                    
                    <a href="#home" className="list__link"> Home </a>
                    <a href="#techniques" className="list__link"> Techniques </a>
                    <a href="#projects" className="list__link"> Projects </a>

                </div>

                <div className="footer__list list">

                    <div className='list__title' > Recent Projects </div>

                    <a href="https://khartoum-organization.netlify.app" className="list__link"> Khartoum Organization </a>
                    <a href="https://study-aboard.netlify.app" className="list__link"> StudyAboard </a>
                    <a href="https://clashifyapp.onrender.com" className="list__link"> ClashifyApp </a>

                </div>

                <div className="footer__list list">

                    <div className='list__title' > Contacts </div>

                    <a href="https://wa.me/00249997118208" className="list__link"> WhatsApp </a>
                    <a href="https://facebook.com/hosam.umbaddi" className="list__link"> Facebook </a>
                    <a href="https://twitter.com/umbaddih" className="list__link"> X (Twitter) </a>

                </div>
            
            </div>

            <div className="footer__copyrights"> &copy; 2024 Hosam Umbaddi </div>

        </footer>
    )
}

export default Footer