import './Footer.css'
import footer_logo from '../../Assets/footer_logo.jpeg'
import user_icon from '../../Assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder = "Enter your Email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />

        <div className="footer-bottom">
            <div className="footer-bottom-left"><p>© 2024 R Naga Tarun. All rights reserved</p></div>

            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Pilocy</p>
                <p>Connect With Me</p>
            </div>
      
         </div>
    </div>
  )
}

export default Footer
