import React from 'react';
import './css/Footer.css'
function Footer() {
    return(
        <div style={{height: "100px"}}>
            <div className="footer_sections about_us">
                <h5>About us</h5>
                <a href="#">Company</a>
                <a href="#">Our team</a>
            </div>

            <div className={"footer_sections contact"}>
                <h5>Contact us</h5>
                <p id="telephone">+7 (747) 271 80 17</p>
                <div className={"social-media"}>
                    <ol>
                        <li><a><img
                            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
                            alt="Facebook" width="32" height="30"/></a></li>
                        <li><a><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
                            alt="Facebook" width="32" height="30"/></a></li>
                        <li><a><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/1024px-Telegram_alternative_logo.svg.png"
                            alt="Telegram" width="32" height="30"/></a></li>
                    </ol>
                </div>
                <p>&copy; 2020 TopStore</p>
            </div>
            <div className="footer_sections tagline">
                <h5>TopStore</h5>
            </div>
        </div>
    )
}
export default Footer;
